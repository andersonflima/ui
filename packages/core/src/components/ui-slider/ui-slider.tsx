import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: "ui-slider",
  styleUrl: "ui-slider.css",
  shadow: true,
})
export class UiSlider {
  /** Valor atual. */
  @Prop({ mutable: true }) value = 50;
  /** Valor mínimo. */
  @Prop() min = 0;
  /** Valor máximo. */
  @Prop() max = 100;
  /** Incremento. */
  @Prop() step = 1;
  /** Desabilita o controle. */
  @Prop() disabled = false;

  /** Emitido a cada movimento. */
  @Event() uiInput!: EventEmitter<number>;
  /** Emitido ao confirmar (change). */
  @Event() uiChange!: EventEmitter<number>;

  private onInput = (event: Event) => {
    const value = Number((event.target as HTMLInputElement).value);
    this.value = value;
    this.uiInput.emit(value);
  };

  private onChange = (event: Event) => {
    this.uiChange.emit(Number((event.target as HTMLInputElement).value));
  };

  render() {
    return (
      <Host>
        <input
          class="slider"
          type="range"
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.value}
          disabled={this.disabled}
          onInput={this.onInput}
          onChange={this.onChange}
        />
      </Host>
    );
  }
}
