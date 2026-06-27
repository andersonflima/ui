import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ui-breadcrumb",
  styleUrl: "ui-breadcrumb.css",
  shadow: true,
})
export class UiBreadcrumb {
  render() {
    return (
      <Host>
        <nav aria-label="breadcrumb">
          <ol>
            <slot></slot>
          </ol>
        </nav>
      </Host>
    );
  }
}
