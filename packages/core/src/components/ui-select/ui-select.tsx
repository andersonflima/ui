import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

export interface UiSelectOption {
  label: string;
  value: string;
}

@Component({
  tag: "ui-select",
  styleUrl: "ui-select.css",
  shadow: true,
})
export class UiSelect {
  /** Valor selecionado. */
  @Prop({ mutable: true }) value?: string;
  /** Desabilita o controle. */
  @Prop() disabled = false;
  /** Nome do campo. */
  @Prop() name?: string;
  /** Opções disponíveis. */
  @Prop() options: UiSelectOption[] = [];
  /** Placeholder exibido como opção desabilitada inicial. */
  @Prop() placeholder?: string;

  /** Emitido quando a seleção muda. */
  @Event() uiChange!: EventEmitter<string>;

  private onChange = (event: Event) => {
    const value = (event.target as HTMLSelectElement).value;
    this.value = value;
    this.uiChange.emit(value);
  };

  render() {
    const hasValue = this.value !== undefined && this.value !== "";
    return (
      <Host>
        <div class="wrapper">
          <select
            class="select"
            name={this.name}
            disabled={this.disabled}
            onChange={this.onChange}
          >
            {this.placeholder && (
              <option value="" disabled selected={!hasValue}>
                {this.placeholder}
              </option>
            )}
            {this.options.map((option) => (
              <option value={option.value} selected={option.value === this.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            class="chevron"
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
        </div>
      </Host>
    );
  }
}
