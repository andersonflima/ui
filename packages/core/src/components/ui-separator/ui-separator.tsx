import { Component, Prop, h, Host } from "@stencil/core";

export type UiSeparatorOrientation = "horizontal" | "vertical";

@Component({
  tag: "ui-separator",
  styleUrl: "ui-separator.css",
  shadow: true,
})
export class UiSeparator {
  /** Orientação da linha. */
  @Prop({ reflect: true }) orientation: UiSeparatorOrientation = "horizontal";

  render() {
    return (
      <Host
        role="separator"
        aria-orientation={this.orientation}
        class={`orientation-${this.orientation}`}
      ></Host>
    );
  }
}
