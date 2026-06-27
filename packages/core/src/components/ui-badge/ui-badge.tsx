import { Component, Prop, h, Host } from "@stencil/core";

export type UiBadgeVariant =
  | "default"
  | "solid"
  | "outline"
  | "success"
  | "warning"
  | "danger"
  | "info";

@Component({
  tag: "ui-badge",
  styleUrl: "ui-badge.css",
  shadow: true,
})
export class UiBadge {
  /** Variante visual. */
  @Prop() variant: UiBadgeVariant = "default";

  render() {
    return (
      <Host>
        <span class={{ badge: true, [`variant-${this.variant}`]: true }}>
          <slot></slot>
        </span>
      </Host>
    );
  }
}
