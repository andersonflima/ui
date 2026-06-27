import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "ui-timeline",
  styleUrl: "ui-timeline.css",
  shadow: true,
})
export class UiTimeline {
  render() {
    return (
      <Host>
        <div class="timeline">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
