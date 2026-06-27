import {
  Component,
  Prop,
  State,
  Watch,
  Method,
  Event,
  EventEmitter,
  Element,
  h,
  Host,
} from "@stencil/core";

export interface UiCommandItem {
  label: string;
  value: string;
  group?: string;
  hint?: string;
}

@Component({
  tag: "ui-command",
  styleUrl: "ui-command.css",
  shadow: true,
})
export class UiCommand {
  @Element() host!: HTMLElement;

  /** Controla a abertura da paleta de comandos. */
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Itens disponíveis na paleta. */
  @Prop() items: UiCommandItem[] = [];
  /** Placeholder do campo de busca. */
  @Prop() placeholder = "Buscar comando…";
  /** Abre/fecha com Cmd/Ctrl+K quando habilitado. */
  @Prop() hotkey = true;

  /** Texto digitado na busca. */
  @State() query = "";
  /** Índice do item destacado na lista filtrada. */
  @State() activeIndex = 0;

  /** Emitido ao selecionar um comando. */
  @Event() uiSelect!: EventEmitter<string>;

  private dialogEl?: HTMLDialogElement;
  private inputEl?: HTMLInputElement;

  @Watch("open")
  onOpenChange(value: boolean) {
    this.sync(value);
    if (value) {
      requestAnimationFrame(() => this.inputEl?.focus());
    }
  }

  componentDidLoad() {
    this.sync(this.open);
  }

  connectedCallback() {
    if (this.hotkey && typeof document !== "undefined") {
      document.addEventListener("keydown", this.onHotkey);
    }
  }

  disconnectedCallback() {
    if (typeof document !== "undefined") {
      document.removeEventListener("keydown", this.onHotkey);
    }
  }

  private sync(value: boolean) {
    if (!this.dialogEl) return;
    if (value && !this.dialogEl.open) this.dialogEl.showModal();
    else if (!value && this.dialogEl.open) this.dialogEl.close();
  }

  /** Abre a paleta imperativamente. */
  @Method() async show() {
    this.open = true;
  }

  /** Fecha a paleta imperativamente. */
  @Method() async close() {
    this.open = false;
  }

  private get filtered(): UiCommandItem[] {
    const term = this.query.toLowerCase();
    return this.items.filter((item) =>
      item.label.toLowerCase().includes(term),
    );
  }

  private onHotkey = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      this.open = !this.open;
    }
  };

  private onClose = () => {
    if (this.open) this.open = false;
    this.query = "";
    this.activeIndex = 0;
  };

  private select(item: UiCommandItem) {
    this.uiSelect.emit(item.value);
    this.open = false;
    this.query = "";
    this.activeIndex = 0;
  }

  private onInput = (event: Event) => {
    this.query = (event.target as HTMLInputElement).value;
    this.activeIndex = 0;
  };

  private onKeydown = (event: KeyboardEvent) => {
    const items = this.filtered;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (items.length === 0) return;
        this.activeIndex = (this.activeIndex + 1) % items.length;
        break;
      case "ArrowUp":
        event.preventDefault();
        if (items.length === 0) return;
        this.activeIndex =
          (this.activeIndex - 1 + items.length) % items.length;
        break;
      case "Enter":
        if (items[this.activeIndex]) {
          event.preventDefault();
          this.select(items[this.activeIndex]);
        }
        break;
    }
  };

  render() {
    const items = this.filtered;
    let flatIndex = -1;
    const seenGroups = new Set<string>();

    return (
      <Host>
        <dialog
          class="command"
          ref={(el) => (this.dialogEl = el as HTMLDialogElement)}
          onClose={this.onClose}
          onCancel={this.onClose}
        >
          <div class="panel">
            <input
              class="search"
              type="text"
              role="combobox"
              aria-expanded="true"
              aria-autocomplete="list"
              autocomplete="off"
              value={this.query}
              placeholder={this.placeholder}
              ref={(el) => (this.inputEl = el as HTMLInputElement)}
              onInput={this.onInput}
              onKeyDown={this.onKeydown}
            />
            <div class="list" role="listbox">
              {items.length === 0 ? (
                <div class="empty">Nenhum comando</div>
              ) : (
                items.map((item) => {
                  flatIndex += 1;
                  const index = flatIndex;
                  const showGroup =
                    item.group !== undefined && !seenGroups.has(item.group);
                  if (item.group !== undefined) seenGroups.add(item.group);
                  return [
                    showGroup ? (
                      <div class="group">{item.group}</div>
                    ) : null,
                    <div
                      class={{ item: true, active: index === this.activeIndex }}
                      role="option"
                      aria-selected={
                        index === this.activeIndex ? "true" : "false"
                      }
                      onMouseEnter={() => (this.activeIndex = index)}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        this.select(item);
                      }}
                    >
                      <span class="label">{item.label}</span>
                      {item.hint ? (
                        <span class="hint">{item.hint}</span>
                      ) : null}
                    </div>,
                  ];
                })
              )}
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
