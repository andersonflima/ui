import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ui-card",
  styleUrl: "ui-card.css",
  shadow: true,
})
export class UiCard {
  render() {
    return (
      <Host>
        <div class="card">
          <slot name="title"></slot>
          <slot name="description"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </Host>
    );
  }
}
