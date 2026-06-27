import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ui-accordion",
  styleUrl: "ui-accordion.css",
  shadow: true,
})
export class UiAccordion {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
