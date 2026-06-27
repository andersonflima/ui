import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

export interface UiSegmentedItem {
  label: string;
  value: string;
}

@Component({
  tag: "ui-segmented",
  styleUrl: "ui-segmented.css",
  shadow: true,
})
export class UiSegmented {
  /** Lista de segmentos. */
  @Prop() items: UiSegmentedItem[] = [];
  /** Valor do segmento ativo. */
  @Prop({ mutable: true, reflect: true }) value = "";

  /** Emitido quando o segmento ativo muda. */
  @Event() uiChange!: EventEmitter<string>;

  private select = (value: string) => {
    if (value === this.value) return;
    this.value = value;
    this.uiChange.emit(value);
  };

  render() {
    return (
      <Host>
        <div class="track" role="radiogroup">
          {this.items.map((item) => {
            const active = item.value === this.value;
            return (
              <button
                key={item.value}
                class={{ segment: true, active }}
                type="button"
                role="radio"
                aria-checked={active ? "true" : "false"}
                onClick={() => this.select(item.value)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </Host>
    );
  }
}
