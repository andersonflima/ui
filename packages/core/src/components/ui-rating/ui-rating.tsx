import {
  Component,
  Prop,
  State,
  Event,
  EventEmitter,
  h,
  Host,
} from "@stencil/core";

@Component({
  tag: "ui-rating",
  styleUrl: "ui-rating.css",
  shadow: true,
})
export class UiRating {
  /** Valor selecionado. */
  @Prop({ mutable: true }) value = 0;

  /** Quantidade de estrelas. */
  @Prop() max = 5;

  /** Apenas leitura, sem interação. */
  @Prop() readonly = false;

  /** Estrela atualmente sob o cursor (-1 quando sem hover). */
  @State() hoverValue = -1;

  /** Emitido quando o valor muda. */
  @Event() uiChange!: EventEmitter<number>;

  private select(index: number) {
    if (this.readonly) return;
    this.value = index;
    this.uiChange.emit(this.value);
  }

  private onEnter(index: number) {
    if (this.readonly) return;
    this.hoverValue = index;
  }

  private onLeave = () => {
    this.hoverValue = -1;
  };

  render() {
    const active = this.hoverValue > 0 ? this.hoverValue : this.value;
    const stars = Array.from({ length: this.max }, (_, i) => i + 1);

    return (
      <Host>
        <div
          class="rating"
          role="radiogroup"
          aria-label="Avaliação"
          onMouseLeave={this.onLeave}
        >
          {stars.map((index) => {
            const filled = index <= active;
            return (
              <button
                class={{ star: true, filled, readonly: this.readonly }}
                type="button"
                role="radio"
                aria-checked={index === this.value ? "true" : "false"}
                aria-label={`${index} estrelas`}
                onClick={() => this.select(index)}
                onMouseEnter={() => this.onEnter(index)}
              >
                <svg viewBox="0 0 24 24" width="100%" height="100%">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            );
          })}
        </div>
      </Host>
    );
  }
}
