import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ui-skeleton",
  styleUrl: "ui-skeleton.css",
  shadow: true,
})
export class UiSkeleton {
  render() {
    return (
      <Host>
        <span class="skeleton"></span>
      </Host>
    );
  }
}
