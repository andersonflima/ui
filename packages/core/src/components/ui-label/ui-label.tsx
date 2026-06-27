import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ui-label",
  styleUrl: "ui-label.css",
  shadow: true,
})
export class UiLabel {
  render() {
    return (
      <Host>
        <label class="label">
          <slot></slot>
        </label>
      </Host>
    );
  }
}
