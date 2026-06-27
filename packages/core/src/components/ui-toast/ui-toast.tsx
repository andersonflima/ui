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

export type UiToastVariant = "default" | "success" | "warning" | "danger";

@Component({
  tag: "ui-toast",
  styleUrl: "ui-toast.css",
  shadow: true,
})
export class UiToast {
  /** Controla a visibilidade do toast. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Variante visual (afeta a borda lateral). */
  @Prop() variant: UiToastVariant = "default";

  /** Título do toast. */
  @Prop() heading?: string;

  /** Descrição do toast. */
  @Prop() description?: string;

  /** Tempo em ms até o auto-dismiss. */
  @Prop() duration = 4000;

  /** Emitido quando o toast é fechado (timer, close() ou botão). */
  @Event() uiClose!: EventEmitter<void>;

  private timer?: ReturnType<typeof setTimeout>;

  @Watch("open")
  onOpenChange(value: boolean) {
    if (value) this.startTimer();
    else this.clearTimer();
  }

  componentDidLoad() {
    if (this.open) this.startTimer();
  }

  disconnectedCallback() {
    this.clearTimer();
  }

  private startTimer() {
    this.clearTimer();
    if (this.duration > 0) {
      this.timer = setTimeout(() => this.dismiss(), this.duration);
    }
  }

  private clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  private dismiss() {
    this.clearTimer();
    this.open = false;
    this.uiClose.emit();
  }

  /** Abre o toast imperativamente. */
  @Method() async show() {
    this.open = true;
  }

  /** Fecha o toast imperativamente. */
  @Method() async close() {
    this.dismiss();
  }

  render() {
    return (
      <Host>
        {this.open && (
          <div
            class={{ toast: true, [`variant-${this.variant}`]: true }}
            role="status"
          >
            <div class="body">
              {this.heading && <p class="heading">{this.heading}</p>}
              {this.description && (
                <p class="description">{this.description}</p>
              )}
            </div>
            <button
              class="close"
              type="button"
              aria-label="Fechar"
              onClick={() => this.dismiss()}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        )}
      </Host>
    );
  }
}
