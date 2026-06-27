import { Component, Prop, h, Host } from "@stencil/core";

export type UiStatTrend = "up" | "down" | "neutral";

@Component({
  tag: "ui-stat",
  styleUrl: "ui-stat.css",
  shadow: true,
})
export class UiStat {
  /** Rótulo da métrica. */
  @Prop() label!: string;

  /** Valor principal exibido. */
  @Prop() value!: string;

  /** Variação exibida no chip (ex.: "+12%"). */
  @Prop() delta?: string;

  /** Direção da tendência. */
  @Prop() trend: UiStatTrend = "neutral";

  private renderArrow() {
    if (this.trend === "down") {
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 11 1 4h10z"></path>
        </svg>
      );
    }
    if (this.trend === "up") {
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 1 11 8H1z"></path>
        </svg>
      );
    }
    return null;
  }

  render() {
    return (
      <Host>
        <div class="card">
          <p class="label">{this.label}</p>
          <div class="value-row">
            <span class="value">{this.value}</span>
            {this.delta && (
              <span class={{ delta: true, [`trend-${this.trend}`]: true }}>
                {this.renderArrow()}
                {this.delta}
              </span>
            )}
          </div>
          <div class="extra">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
