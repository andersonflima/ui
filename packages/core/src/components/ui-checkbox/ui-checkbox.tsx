import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: "ui-checkbox",
  styleUrl: "ui-checkbox.css",
  shadow: true,
})
export class UiCheckbox {
  /** Estado marcado/desmarcado. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Desabilita o controle. */
  @Prop() disabled = false;
  /** Nome do campo. */
  @Prop() name?: string;
  /** Valor associado. */
  @Prop() value?: string;

  /** Emitido quando o estado muda. */
  @Event() uiChange!: EventEmitter<boolean>;

  private toggle = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.uiChange.emit(this.checked);
  };

  private onKeyDown = (event: KeyboardEvent) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      this.toggle();
    }
  };

  render() {
    return (
      <Host>
        <button
          class="checkbox"
          type="button"
          role="checkbox"
          aria-checked={this.checked ? "true" : "false"}
          disabled={this.disabled}
          onClick={this.toggle}
          onKeyDown={this.onKeyDown}
        >
          <svg
            class="check"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </Host>
    );
  }
}
