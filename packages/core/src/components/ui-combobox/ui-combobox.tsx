import {
  Component,
  Prop,
  State,
  Event,
  EventEmitter,
  Element,
  h,
  Host,
} from "@stencil/core";
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  shift,
  size,
} from "@floating-ui/dom";

export interface UiComboboxOption {
  label: string;
  value: string;
}

@Component({
  tag: "ui-combobox",
  styleUrl: "ui-combobox.css",
  shadow: true,
})
export class UiCombobox {
  @Element() host!: HTMLElement;

  /** Opções disponíveis para autocomplete. */
  @Prop() options: UiComboboxOption[] = [];
  /** Valor selecionado. */
  @Prop({ mutable: true }) value = "";
  /** Placeholder do campo. */
  @Prop() placeholder = "";

  /** Texto digitado no campo. */
  @State() query = "";
  /** Indica se a lista flutuante está aberta. */
  @State() open = false;
  /** Índice da opção destacada. */
  @State() activeIndex = -1;

  /** Emitido ao selecionar uma opção. */
  @Event() uiChange!: EventEmitter<string>;

  private inputEl?: HTMLInputElement;
  private listEl?: HTMLElement;
  private cleanup?: () => void;
  private listId = `ui-combobox-list-${Math.random().toString(36).slice(2, 9)}`;

  componentWillLoad() {
    const selected = this.options.find((option) => option.value === this.value);
    if (selected) this.query = selected.label;
  }

  disconnectedCallback() {
    this.stop();
    document.removeEventListener("click", this.onDocumentClick);
  }

  private get filtered(): UiComboboxOption[] {
    const term = this.query.toLowerCase();
    return this.options.filter((option) =>
      option.label.toLowerCase().includes(term),
    );
  }

  private setOpen(value: boolean) {
    if (this.open === value) return;
    this.open = value;
    if (value) {
      requestAnimationFrame(() => this.start());
      document.addEventListener("click", this.onDocumentClick);
    } else {
      this.stop();
      this.activeIndex = -1;
      document.removeEventListener("click", this.onDocumentClick);
    }
  }

  private start() {
    if (!this.inputEl || !this.listEl) return;
    this.stop();
    this.cleanup = autoUpdate(this.inputEl, this.listEl, () => {
      if (!this.inputEl || !this.listEl) return;
      computePosition(this.inputEl, this.listEl, {
        placement: "bottom-start",
        middleware: [
          offset(6),
          flip(),
          shift({ padding: 8 }),
          size({
            apply: ({ rects, elements }) => {
              Object.assign(elements.floating.style, {
                width: `${rects.reference.width}px`,
              });
            },
          }),
        ],
      }).then(({ x, y }) => {
        Object.assign(this.listEl!.style, { left: `${x}px`, top: `${y}px` });
      });
    });
  }

  private stop() {
    this.cleanup?.();
    this.cleanup = undefined;
  }

  private select(option: UiComboboxOption) {
    this.value = option.value;
    this.query = option.label;
    this.setOpen(false);
    this.uiChange.emit(option.value);
  }

  private onInput = (event: Event) => {
    this.query = (event.target as HTMLInputElement).value;
    this.activeIndex = -1;
    this.setOpen(true);
  };

  private onFocus = () => {
    this.setOpen(true);
  };

  private onKeydown = (event: KeyboardEvent) => {
    const items = this.filtered;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!this.open) {
          this.setOpen(true);
          return;
        }
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
        if (this.open && this.activeIndex >= 0 && items[this.activeIndex]) {
          event.preventDefault();
          this.select(items[this.activeIndex]);
        }
        break;
      case "Escape":
        if (this.open) {
          event.preventDefault();
          this.setOpen(false);
        }
        break;
    }
  };

  private onDocumentClick = (event: MouseEvent) => {
    if (!this.open) return;
    if (event.composedPath().includes(this.host)) return;
    this.setOpen(false);
  };

  render() {
    const items = this.filtered;
    return (
      <Host>
        <div class="field">
          <input
            class="input"
            type="text"
            role="combobox"
            value={this.query}
            placeholder={this.placeholder}
            autocomplete="off"
            aria-expanded={this.open ? "true" : "false"}
            aria-controls={this.listId}
            aria-autocomplete="list"
            ref={(el) => (this.inputEl = el as HTMLInputElement)}
            onInput={this.onInput}
            onFocus={this.onFocus}
            onKeyDown={this.onKeydown}
          />
        </div>
        <div
          id={this.listId}
          class={{ list: true, "is-open": this.open }}
          role="listbox"
          ref={(el) => (this.listEl = el as HTMLElement)}
        >
          {items.length === 0 ? (
            <div class="empty">Nenhum resultado</div>
          ) : (
            items.map((option, index) => (
              <div
                class={{
                  option: true,
                  active: index === this.activeIndex,
                  selected: option.value === this.value,
                }}
                role="option"
                aria-selected={option.value === this.value ? "true" : "false"}
                onMouseEnter={() => (this.activeIndex = index)}
                onMouseDown={(event) => {
                  event.preventDefault();
                  this.select(option);
                }}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      </Host>
    );
  }
}
