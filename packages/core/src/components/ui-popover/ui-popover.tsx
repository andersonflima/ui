import {
  Component,
  Prop,
  Watch,
  Method,
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
  type Placement,
} from "@floating-ui/dom";

@Component({
  tag: "ui-popover",
  styleUrl: "ui-popover.css",
  shadow: true,
})
export class UiPopover {
  @Element() host!: HTMLElement;

  /** Controla a abertura do conteúdo flutuante. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Posição preferida do conteúdo relativo ao gatilho. */
  @Prop() placement: Placement = "bottom";

  /** Emitido quando o estado de abertura muda. */
  @Event() uiOpenChange!: EventEmitter<boolean>;

  private triggerEl?: HTMLElement;
  private floatingEl?: HTMLElement;
  private cleanup?: () => void;

  @Watch("open")
  onOpenChange(value: boolean) {
    if (value) {
      requestAnimationFrame(() => this.start());
      document.addEventListener("click", this.onDocumentClick);
      document.addEventListener("keydown", this.onKeydown);
    } else {
      this.stop();
      document.removeEventListener("click", this.onDocumentClick);
      document.removeEventListener("keydown", this.onKeydown);
    }
  }

  disconnectedCallback() {
    this.stop();
    document.removeEventListener("click", this.onDocumentClick);
    document.removeEventListener("keydown", this.onKeydown);
  }

  /** Abre o popover imperativamente. */
  @Method() async show() {
    this.setOpen(true);
  }

  /** Fecha o popover imperativamente. */
  @Method() async close() {
    this.setOpen(false);
  }

  private setOpen(value: boolean) {
    if (this.open === value) return;
    this.open = value;
    this.uiOpenChange.emit(value);
  }

  private start() {
    if (!this.triggerEl || !this.floatingEl) return;
    this.stop();
    this.cleanup = autoUpdate(this.triggerEl, this.floatingEl, () => {
      if (!this.triggerEl || !this.floatingEl) return;
      computePosition(this.triggerEl, this.floatingEl, {
        placement: this.placement,
        middleware: [offset(8), flip(), shift({ padding: 8 })],
      }).then(({ x, y }) => {
        Object.assign(this.floatingEl!.style, { left: `${x}px`, top: `${y}px` });
      });
    });
  }

  private stop() {
    this.cleanup?.();
    this.cleanup = undefined;
  }

  private onTriggerClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.setOpen(!this.open);
  };

  private onDocumentClick = (event: MouseEvent) => {
    if (!this.open) return;
    if (event.composedPath().includes(this.host)) return;
    this.setOpen(false);
  };

  private onKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this.open) this.setOpen(false);
  };

  render() {
    return (
      <Host>
        <span
          class="trigger"
          ref={(el) => (this.triggerEl = el as HTMLElement)}
          onClick={this.onTriggerClick}
        >
          <slot name="trigger"></slot>
        </span>
        <div
          class={{ panel: true, "is-open": this.open }}
          ref={(el) => (this.floatingEl = el as HTMLElement)}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
