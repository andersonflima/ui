import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ui-navbar",
  styleUrl: "ui-navbar.css",
  shadow: true,
})
export class UiNavbar {
  render() {
    return (
      <Host>
        <nav class="navbar">
          <div class="brand">
            <slot name="brand"></slot>
          </div>
          <div class="center">
            <slot></slot>
          </div>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </nav>
      </Host>
    );
  }
}
