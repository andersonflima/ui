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
  /** Exibe um botão para limpar o valor quando preenchido. */
  @Prop() clearable = false;

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

  private clear = () => {
    this.value = "";
    this.uiInput.emit("");
    this.uiChange.emit("");
  };

  render() {
    const showClear = this.clearable && !!this.value && !this.disabled;
    return (
      <Host>
        <div class={{ field: true, invalid: this.invalid, disabled: this.disabled }}>
          <span class="affix">
            <slot name="prefix"></slot>
          </span>
          <input
            class="input"
            type={this.type}
            value={this.value}
            name={this.name}
            placeholder={this.placeholder}
            disabled={this.disabled}
            aria-invalid={this.invalid ? "true" : null}
            onInput={this.onInput}
            onChange={this.onChange}
          />
          {showClear && (
            <button class="clear" type="button" aria-label="Limpar" onClick={this.clear}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
          <span class="affix">
            <slot name="suffix"></slot>
          </span>
        </div>
      </Host>
    );
  }
}
