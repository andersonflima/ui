import { Component, Prop, h, Host } from "@stencil/core";

export type UiStackDirection = "vertical" | "horizontal";
export type UiStackGap = "xs" | "sm" | "md" | "lg" | "xl";
export type UiStackAlign = "start" | "center" | "end" | "stretch";
export type UiStackJustify = "start" | "center" | "end" | "between";

const GAP: Record<UiStackGap, string> = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
};

const ALIGN: Record<UiStackAlign, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

const JUSTIFY: Record<UiStackJustify, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
};

@Component({
  tag: "ui-stack",
  styleUrl: "ui-stack.css",
  shadow: true,
})
export class UiStack {
  /** Direção do empilhamento. */
  @Prop() direction: UiStackDirection = "vertical";
  /** Espaçamento entre itens. */
  @Prop() gap: UiStackGap = "md";
  /** Alinhamento no eixo cruzado. */
  @Prop() align: UiStackAlign = "stretch";
  /** Distribuição no eixo principal. */
  @Prop() justify: UiStackJustify = "start";
  /** Permite quebra de linha dos itens. */
  @Prop() wrap = false;

  render() {
    const style = {
      flexDirection: this.direction === "horizontal" ? "row" : "column",
      gap: GAP[this.gap],
      alignItems: ALIGN[this.align],
      justifyContent: JUSTIFY[this.justify],
      flexWrap: this.wrap ? "wrap" : "nowrap",
    };

    return (
      <Host>
        <div class="stack" style={style}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
