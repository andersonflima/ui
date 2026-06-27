import { Component, Prop, h, Host } from "@stencil/core";

export type UiSpinnerSize = "sm" | "md" | "lg";

@Component({
  tag: "ui-spinner",
  styleUrl: "ui-spinner.css",
  shadow: true,
})
export class UiSpinner {
  /** Tamanho do spinner. */
  @Prop() size: UiSpinnerSize = "md";

  render() {
    return (
      <Host role="status">
        <span class={{ spinner: true, [`size-${this.size}`]: true }}></span>
        <span class="sr-only">Carregando</span>
      </Host>
    );
  }
}
