import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: "ui-textarea",
  styleUrl: "ui-textarea.css",
  shadow: true,
})
export class UiTextarea {
  /** Valor do campo. */
  @Prop({ mutable: true }) value = "";
  /** Placeholder. */
  @Prop() placeholder?: string;
  /** Desabilita o campo. */
  @Prop() disabled = false;
  /** Marca o campo como inválido (estilo + aria-invalid). */
  @Prop() invalid = false;
  /** Nome do campo. */
  @Prop() name?: string;
  /** Número de linhas visíveis. */
  @Prop() rows = 4;

  /** Emitido a cada digitação. */
  @Event() uiInput!: EventEmitter<string>;
  /** Emitido ao confirmar (change). */
  @Event() uiChange!: EventEmitter<string>;

  private onInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.uiInput.emit(target.value);
  };

  private onChange = (event: Event) => {
    this.uiChange.emit((event.target as HTMLTextAreaElement).value);
  };

  render() {
    return (
      <Host>
        <textarea
          class={{ textarea: true, invalid: this.invalid }}
          name={this.name}
          rows={this.rows}
          placeholder={this.placeholder}
          disabled={this.disabled}
          aria-invalid={this.invalid ? "true" : null}
          onInput={this.onInput}
          onChange={this.onChange}
        >
          {this.value}
        </textarea>
      </Host>
    );
  }
}
