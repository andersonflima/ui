import { Component, Prop, Watch, Method, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: "ui-dialog",
  styleUrl: "ui-dialog.css",
  shadow: true,
})
export class UiDialog {
  /** Controla a abertura do modal. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Emitido quando o modal é fechado (Esc, backdrop ou close()). */
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

  /** Abre o modal imperativamente. */
  @Method() async show() {
    this.open = true;
  }

  /** Fecha o modal imperativamente. */
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
          class="dialog"
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
