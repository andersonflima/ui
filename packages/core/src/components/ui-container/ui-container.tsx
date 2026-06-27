import { Component, Prop, h, Host } from "@stencil/core";

export type UiContainerSize = "sm" | "md" | "lg" | "xl" | "full";

@Component({
  tag: "ui-container",
  styleUrl: "ui-container.css",
  shadow: true,
})
export class UiContainer {
  /** Largura máxima do container. */
  @Prop() size: UiContainerSize = "lg";
  /** Aplica padding lateral responsivo. */
  @Prop() padded = true;

  render() {
    const classes = {
      container: true,
      [`size-${this.size}`]: true,
      padded: this.padded,
    };

    return (
      <Host>
        <div class={classes}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
