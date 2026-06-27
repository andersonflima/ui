import { Component, Prop, h, Host } from "@stencil/core";

export type UiGridGap = "xs" | "sm" | "md" | "lg" | "xl";

const GAP: Record<UiGridGap, string> = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
};

@Component({
  tag: "ui-grid",
  styleUrl: "ui-grid.css",
  shadow: true,
})
export class UiGrid {
  /** Número de colunas da grade. */
  @Prop() columns = 12;
  /** Espaçamento entre células. */
  @Prop() gap: UiGridGap = "md";
  /** Largura mínima por item para layout responsivo (auto-fit). */
  @Prop() minItemWidth?: string;

  render() {
    const style = {
      gridTemplateColumns: this.minItemWidth
        ? `repeat(auto-fit, minmax(${this.minItemWidth}, 1fr))`
        : `repeat(${this.columns}, minmax(0, 1fr))`,
      gap: GAP[this.gap],
    };

    return (
      <Host>
        <div class="grid" style={style}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
