import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

export interface UiRadioOption {
  label: string;
  value: string;
}

@Component({
  tag: "ui-radio-group",
  styleUrl: "ui-radio-group.css",
  shadow: true,
})
export class UiRadioGroup {
  /** Valor selecionado. */
  @Prop({ mutable: true }) value?: string;
  /** Nome do grupo. */
  @Prop() name?: string;
  /** Opções disponíveis. */
  @Prop() options: UiRadioOption[] = [];
  /** Desabilita o grupo. */
  @Prop() disabled = false;

  /** Emitido quando a seleção muda. */
  @Event() uiChange!: EventEmitter<string>;

  private select = (value: string) => {
    if (this.disabled || value === this.value) return;
    this.value = value;
    this.uiChange.emit(value);
  };

  private onKeyDown = (event: KeyboardEvent, index: number) => {
    if (this.disabled) return;
    const total = this.options.length;
    if (total === 0) return;
    let next = -1;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = (index + 1) % total;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = (index - 1 + total) % total;
    }
    if (next >= 0) {
      event.preventDefault();
      this.select(this.options[next].value);
    }
  };

  render() {
    return (
      <Host>
        <div class="group" role="radiogroup">
          {this.options.map((option, index) => {
            const selected = option.value === this.value;
            return (
              <button
                class="radio"
                type="button"
                role="radio"
                aria-checked={selected ? "true" : "false"}
                tabindex={selected || (!this.value && index === 0) ? "0" : "-1"}
                disabled={this.disabled}
                onClick={() => this.select(option.value)}
                onKeyDown={(event) => this.onKeyDown(event, index)}
              >
                <span class="indicator">
                  <span class="dot"></span>
                </span>
                <span class="label">{option.label}</span>
              </button>
            );
          })}
        </div>
      </Host>
    );
  }
}
