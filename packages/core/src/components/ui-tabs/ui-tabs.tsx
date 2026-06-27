import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

export interface UiTabItem {
  label: string;
  value: string;
}

@Component({
  tag: "ui-tabs",
  styleUrl: "ui-tabs.css",
  shadow: true,
})
export class UiTabs {
  /** Valor da aba ativa. */
  @Prop({ mutable: true, reflect: true }) value = "";
  /** Lista de abas. */
  @Prop() items: UiTabItem[] = [];

  /** Emitido quando a aba ativa muda. */
  @Event() uiChange!: EventEmitter<string>;

  private select = (value: string) => {
    if (value === this.value) return;
    this.value = value;
    this.uiChange.emit(value);
  };

  render() {
    return (
      <Host>
        <div class="tablist" role="tablist">
          {this.items.map((item) => {
            const active = item.value === this.value;
            return (
              <button
                key={item.value}
                class={{ tab: true, active }}
                type="button"
                role="tab"
                aria-selected={active ? "true" : "false"}
                onClick={() => this.select(item.value)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <slot name={this.value}></slot>
      </Host>
    );
  }
}
