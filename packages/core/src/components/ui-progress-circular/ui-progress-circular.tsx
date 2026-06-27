import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "ui-progress-circular",
  styleUrl: "ui-progress-circular.css",
  shadow: true,
})
export class UiProgressCircular {
  /** Valor atual do progresso. `null` torna o componente indeterminado. */
  @Prop() value: number | null = null;

  /** Valor máximo. */
  @Prop() max = 100;

  /** Tamanho do anel (qualquer unidade CSS). */
  @Prop() size = "3rem";

  /** Espessura do traço. */
  @Prop() strokeWidth = 4;

  /** Força o estado indeterminado. */
  @Prop() indeterminate = false;

  /** Exibe o percentual no centro quando determinado. */
  @Prop() showValue = false;

  private get isIndeterminate(): boolean {
    return this.indeterminate || this.value === null;
  }

  private get percent(): number {
    if (this.value === null || this.max <= 0) return 0;
    const clamped = Math.min(Math.max(this.value, 0), this.max);
    return clamped / this.max;
  }

  render() {
    const determinate = !this.isIndeterminate;
    const radius = 50 - this.strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const dashoffset = determinate
      ? circumference * (1 - this.percent)
      : circumference * 0.75;

    return (
      <Host
        role="progressbar"
        aria-valuenow={determinate ? String(this.value) : undefined}
        aria-valuemin={determinate ? "0" : undefined}
        aria-valuemax={determinate ? String(this.max) : undefined}
        style={{ width: this.size, height: this.size }}
      >
        <svg
          class={{ ring: true, indeterminate: this.isIndeterminate }}
          width={this.size}
          height={this.size}
          viewBox="0 0 100 100"
        >
          <circle
            class="track"
            cx="50"
            cy="50"
            r={String(radius)}
            stroke-width={String(this.strokeWidth)}
          ></circle>
          <circle
            class="indicator"
            cx="50"
            cy="50"
            r={String(radius)}
            stroke-width={String(this.strokeWidth)}
            stroke-linecap="round"
            stroke-dasharray={String(circumference)}
            stroke-dashoffset={String(dashoffset)}
          ></circle>
        </svg>
        {this.showValue && determinate ? (
          <div class="value">{Math.round(this.percent * 100)}%</div>
        ) : null}
      </Host>
    );
  }
}
