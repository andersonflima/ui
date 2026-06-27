import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "ui-breadcrumb-item",
  styleUrl: "ui-breadcrumb-item.css",
  shadow: true,
})
export class UiBreadcrumbItem {
  /** Destino do link. */
  @Prop() href?: string;

  /** Indica o item atual (página corrente). */
  @Prop() current = false;

  private renderSeparator() {
    return (
      <span class="separator" aria-hidden="true">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </span>
    );
  }

  render() {
    const isLink = this.href && !this.current;
    return (
      <Host>
        {isLink ? (
          <a class="link" href={this.href}>
            <slot></slot>
          </a>
        ) : (
          <span
            class="current"
            aria-current={this.current ? "page" : undefined}
          >
            <slot></slot>
          </span>
        )}
        {!this.current && this.renderSeparator()}
      </Host>
    );
  }
}
