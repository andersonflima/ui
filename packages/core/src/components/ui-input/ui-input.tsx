import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: "ui-input",
  styleUrl: "ui-input.css",
  shadow: true,
})
export class UiInput {
  /** Valor do campo. */
  @Prop({ mutable: true }) value = "";
  /** Placeholder. */
  @Prop() placeholder?: string;
  /** Tipo do input nativo. */
  @Prop() type = "text";
  /** Desabilita o campo. */
  @Prop() disabled = false;
  /** Marca o campo como inválido (estilo + aria-invalid). */
  @Prop() invalid = false;
  /** Nome do campo. */
  @Prop() name?: string;

  /** Emitido a cada digitação. */
  @Event() uiInput!: EventEmitter<string>;
  /** Emitido ao confirmar (change). */
  @Event() uiChange!: EventEmitter<string>;

  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.uiInput.emit(target.value);
  };

  private onChange = (event: Event) => {
    this.uiChange.emit((event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <Host>
        <input
          class={{ input: true, invalid: this.invalid }}
          type={this.type}
          value={this.value}
          name={this.name}
          placeholder={this.placeholder}
          disabled={this.disabled}
          aria-invalid={this.invalid ? "true" : null}
          onInput={this.onInput}
          onChange={this.onChange}
        />
      </Host>
    );
  }
}
