import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: "ui-accordion-item",
  styleUrl: "ui-accordion-item.css",
  shadow: true,
})
export class UiAccordionItem {
  /** Título exibido no cabeçalho. */
  @Prop() heading = "";
  /** Estado aberto/fechado. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Emitido quando o item é aberto ou fechado. */
  @Event() uiToggle!: EventEmitter<boolean>;

  private onToggle = (event: Event) => {
    const details = event.currentTarget as HTMLDetailsElement;
    this.open = details.open;
    this.uiToggle.emit(this.open);
  };

  render() {
    return (
      <Host>
        <details open={this.open} onToggle={this.onToggle}>
          <summary>
            <span class="heading">{this.heading}</span>
            <svg
              class="chevron"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </summary>
          <div class="content">
            <slot></slot>
          </div>
        </details>
      </Host>
    );
  }
}
