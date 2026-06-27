import { Component, h, Host } from "@stencil/core";

/**
 * Agrupa avatares sobrepostos. Use com elementos `<ui-avatar>` no slot default.
 */
@Component({
  tag: "ui-avatar-group",
  styleUrl: "ui-avatar-group.css",
  shadow: true,
})
export class UiAvatarGroup {
  render() {
    return (
      <Host>
        <div class="group">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
