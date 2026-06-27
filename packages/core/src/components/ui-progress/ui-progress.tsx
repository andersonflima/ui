import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "ui-progress",
  styleUrl: "ui-progress.css",
  shadow: true,
})
export class UiProgress {
  /** Valor atual do progresso. `null` torna o componente indeterminado. */
  @Prop() value: number | null = null;

  /** Valor máximo. */
  @Prop() max = 100;

  /** Força o estado indeterminado. */
  @Prop() indeterminate = false;

  private get isIndeterminate(): boolean {
    return this.indeterminate || this.value === null;
  }

  private get percent(): number {
    if (this.value === null || this.max <= 0) return 0;
    const clamped = Math.min(Math.max(this.value, 0), this.max);
    return (clamped / this.max) * 100;
  }

  render() {
    const determinate = !this.isIndeterminate;
    return (
      <Host
        role="progressbar"
        aria-valuenow={determinate ? String(this.value) : undefined}
        aria-valuemin={determinate ? "0" : undefined}
        aria-valuemax={determinate ? String(this.max) : undefined}
      >
        <div class="track">
          <div
            class={{ indicator: true, indeterminate: this.isIndeterminate }}
            style={
              determinate ? { width: `${this.percent}%` } : undefined
            }
          ></div>
        </div>
      </Host>
    );
  }
}
