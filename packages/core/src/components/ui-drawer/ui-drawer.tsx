import {
  Component,
  Prop,
  Watch,
  Method,
  Event,
  EventEmitter,
  h,
  Host,
} from "@stencil/core";

@Component({
  tag: "ui-drawer",
  styleUrl: "ui-drawer.css",
  shadow: true,
})
export class UiDrawer {
  /** Controla a abertura do painel lateral. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Borda onde o painel é ancorado. */
  @Prop({ reflect: true }) side: "right" | "bottom" = "right";

  /** Emitido quando o painel é fechado (Esc, backdrop ou close()). */
  @Event() uiClose!: EventEmitter<void>;

  private dialogEl?: HTMLDialogElement;

  @Watch("open")
  onOpenChange(value: boolean) {
    this.sync(value);
  }

  componentDidLoad() {
    this.sync(this.open);
  }

  private sync(value: boolean) {
    if (!this.dialogEl) return;
    if (value && !this.dialogEl.open) this.dialogEl.showModal();
    else if (!value && this.dialogEl.open) this.dialogEl.close();
  }

  /** Abre o painel imperativamente. */
  @Method() async show() {
    this.open = true;
  }

  /** Fecha o painel imperativamente. */
  @Method() async close() {
    this.open = false;
  }

  private onClose = () => {
    if (this.open) {
      this.open = false;
      this.uiClose.emit();
    }
  };

  private onBackdropClick = (event: MouseEvent) => {
    if (event.target === this.dialogEl) this.close();
  };

  render() {
    return (
      <Host>
        <dialog
          class={`drawer side-${this.side}`}
          ref={(el) => (this.dialogEl = el as HTMLDialogElement)}
          onClose={this.onClose}
          onCancel={this.onClose}
          onClick={this.onBackdropClick}
        >
          <div class="content">
            <slot></slot>
          </div>
        </dialog>
      </Host>
    );
  }
}
