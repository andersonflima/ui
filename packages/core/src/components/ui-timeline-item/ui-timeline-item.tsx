import { Component, Prop, h, Host } from "@stencil/core";

export type UiTimelineVariant =
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "muted";

@Component({
  tag: "ui-timeline-item",
  styleUrl: "ui-timeline-item.css",
  shadow: true,
})
export class UiTimelineItem {
  /** Título do item (opcional). */
  @Prop() heading?: string;
  /** Rótulo de tempo, ex.: data ou label (opcional). */
  @Prop() time?: string;
  /** Cor do ponto da timeline. */
  @Prop({ reflect: true }) variant: UiTimelineVariant = "accent";

  render() {
    return (
      <Host>
        <div class={`item variant-${this.variant}`}>
          <div class="marker">
            <span class="dot"></span>
            <span class="line"></span>
          </div>
          <div class="content">
            {this.time ? <span class="time">{this.time}</span> : null}
            {this.heading ? (
              <span class="heading">{this.heading}</span>
            ) : null}
            <div class="body">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
