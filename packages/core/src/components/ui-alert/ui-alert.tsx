import {
  Component,
  Prop,
  State,
  Event,
  EventEmitter,
  h,
  Host,
} from "@stencil/core";

export type UiAlertVariant = "info" | "success" | "warning" | "danger";

@Component({
  tag: "ui-alert",
  styleUrl: "ui-alert.css",
  shadow: true,
})
export class UiAlert {
  /** Variante visual. */
  @Prop() variant: UiAlertVariant = "info";

  /** Título do alerta. */
  @Prop() heading?: string;

  /** Exibe o botão de fechar. */
  @Prop() dismissible = false;

  /** Controla a visibilidade interna do alerta. */
  @State() open = true;

  /** Emitido quando o alerta é fechado. */
  @Event() uiClose!: EventEmitter<void>;

  private dismiss = () => {
    this.open = false;
    this.uiClose.emit();
  };

  private renderIcon() {
    switch (this.variant) {
      case "success":
        return (
          <svg
            class="icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12l3 3 5-6"></path>
          </svg>
        );
      case "warning":
        return (
          <svg
            class="icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case "danger":
        return (
          <svg
            class="icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      default:
        return (
          <svg
            class="icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="11" x2="12" y2="16"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        );
    }
  }

  render() {
    return (
      <Host>
        {this.open && (
          <div
            class={{ alert: true, [`variant-${this.variant}`]: true }}
            role="alert"
          >
            <span class="indicator">{this.renderIcon()}</span>
            <div class="body">
              {this.heading && <p class="heading">{this.heading}</p>}
              <div class="content">
                <slot></slot>
              </div>
            </div>
            {this.dismissible && (
              <button
                class="close"
                type="button"
                aria-label="Fechar"
                onClick={this.dismiss}
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
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        )}
      </Host>
    );
  }
}
