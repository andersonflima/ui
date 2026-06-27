import {
  Component,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
  Element,
  h,
  Host,
} from "@stencil/core";

@Component({
  tag: "ui-carousel",
  styleUrl: "ui-carousel.css",
  shadow: true,
})
export class UiCarousel {
  @Element() host!: HTMLElement;

  /** Permite navegação circular (wrap) entre o primeiro e o último slide. */
  @Prop() loop = false;
  /** Intervalo de autoplay em ms. 0 desliga o autoplay. */
  @Prop() autoplay = 0;
  /** Exibe as setas de navegação. */
  @Prop() showArrows = true;
  /** Exibe os indicadores (dots). */
  @Prop() showDots = true;

  /** Índice do slide atual. */
  @State() index = 0;
  /** Quantidade de slides. */
  @State() count = 0;

  /** Emitido quando o slide atual muda, com o índice novo. */
  @Event() uiChange!: EventEmitter<number>;

  private timer?: ReturnType<typeof setInterval>;

  componentDidLoad() {
    this.syncCount();
    this.startAutoplay();
  }

  disconnectedCallback() {
    this.stopAutoplay();
  }

  private syncCount = () => {
    const slot = this.host.shadowRoot?.querySelector("slot");
    if (!slot) return;
    this.count = (slot as HTMLSlotElement).assignedElements().length;
    if (this.index > this.count - 1) {
      this.index = Math.max(0, this.count - 1);
    }
  };

  private startAutoplay() {
    if (this.autoplay > 0) {
      this.stopAutoplay();
      this.timer = setInterval(() => {
        this.advance();
      }, this.autoplay);
    }
  }

  private stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private advance() {
    if (this.count < 1) return;
    this.goTo((this.index + 1) % this.count);
  }

  private setIndex(i: number) {
    if (this.count < 1) return;
    let target = i;
    if (this.loop) {
      target = ((i % this.count) + this.count) % this.count;
    } else {
      target = Math.max(0, Math.min(i, this.count - 1));
    }
    if (target === this.index) return;
    this.index = target;
    this.uiChange.emit(this.index);
  }

  /** Avança para o próximo slide. */
  @Method()
  async next() {
    this.setIndex(this.index + 1);
  }

  /** Volta para o slide anterior. */
  @Method()
  async prev() {
    this.setIndex(this.index - 1);
  }

  /** Vai para um slide específico pelo índice. */
  @Method()
  async goTo(i: number) {
    this.setIndex(i);
  }

  private handleMouseEnter = () => {
    if (this.autoplay > 0) this.stopAutoplay();
  };

  private handleMouseLeave = () => {
    if (this.autoplay > 0) this.startAutoplay();
  };

  render() {
    const hasNav = this.count > 1;
    const atStart = this.index <= 0;
    const atEnd = this.index >= this.count - 1;

    return (
      <Host>
        <div
          class="viewport"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div
            class="track"
            style={{ transform: `translateX(${-this.index * 100}%)` }}
          >
            <slot onSlotchange={this.syncCount}></slot>
          </div>

          {this.showArrows && hasNav && (
            <button
              type="button"
              class="arrow arrow-prev"
              aria-label="Slide anterior"
              disabled={!this.loop && atStart}
              onClick={() => this.prev()}
            >
              ‹
            </button>
          )}

          {this.showArrows && hasNav && (
            <button
              type="button"
              class="arrow arrow-next"
              aria-label="Próximo slide"
              disabled={!this.loop && atEnd}
              onClick={() => this.next()}
            >
              ›
            </button>
          )}

          {this.showDots && hasNav && (
            <div class="dots">
              {Array.from({ length: this.count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  class={{ dot: true, active: i === this.index }}
                  aria-label={`Ir para slide ${i + 1}`}
                  aria-current={i === this.index ? "true" : "false"}
                  onClick={() => this.goTo(i)}
                ></button>
              ))}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
