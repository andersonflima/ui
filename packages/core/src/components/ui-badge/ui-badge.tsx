import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

export type UiBadgeVariant =
  | "default"
  | "solid"
  | "outline"
  | "success"
  | "warning"
  | "danger"
  | "info";

@Component({
  tag: "ui-badge",
  styleUrl: "ui-badge.css",
  shadow: true,
})
export class UiBadge {
  /** Variante visual. */
  @Prop() variant: UiBadgeVariant = "default";
  /** Exibe um ponto colorido à esquerda. */
  @Prop() dot = false;
  /** Exibe um botão para remover o badge. */
  @Prop() removable = false;

  /** Emitido ao clicar no botão de remover. */
  @Event() uiRemove!: EventEmitter<void>;

  render() {
    return (
      <Host>
        <span class={{ badge: true, [`variant-${this.variant}`]: true }}>
          {this.dot && <span class="dot"></span>}
          <slot></slot>
          {this.removable && (
            <button
              class="remove"
              type="button"
              aria-label="Remover"
              onClick={() => this.uiRemove.emit()}
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </span>
      </Host>
    );
  }
}
