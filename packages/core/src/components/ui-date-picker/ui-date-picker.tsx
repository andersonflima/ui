import {
  Component,
  Prop,
  State,
  Watch,
  Event,
  EventEmitter,
  Element,
  h,
  Host,
} from "@stencil/core";
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  shift,
} from "@floating-ui/dom";

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];

@Component({
  tag: "ui-date-picker",
  styleUrl: "ui-date-picker.css",
  shadow: true,
})
export class UiDatePicker {
  @Element() host!: HTMLElement;

  /** Data selecionada no formato ISO "YYYY-MM-DD". */
  @Prop({ mutable: true }) value = "";
  /** Texto exibido quando nenhuma data está selecionada. */
  @Prop() placeholder = "Selecione a data";

  /** Controla a visibilidade do calendário. */
  @State() open = false;
  /** Ano exibido na grade do calendário. */
  @State() viewYear!: number;
  /** Mês exibido na grade do calendário (0-11). */
  @State() viewMonth!: number;

  /** Emitido ao selecionar uma data (ISO "YYYY-MM-DD"). */
  @Event() uiChange!: EventEmitter<string>;

  private triggerEl?: HTMLElement;
  private floatingEl?: HTMLElement;
  private cleanup?: () => void;

  componentWillLoad() {
    this.syncViewFromValue();
  }

  @Watch("value")
  onValueChange() {
    this.syncViewFromValue();
  }

  disconnectedCallback() {
    this.stop();
    document.removeEventListener("click", this.onDocumentClick);
    document.removeEventListener("keydown", this.onKeydown);
  }

  private syncViewFromValue() {
    const parsed = this.parseValue(this.value);
    const base = parsed ?? new Date();
    this.viewYear = base.getFullYear();
    this.viewMonth = base.getMonth();
  }

  /** Converte o ISO em Date local, evitando shift de fuso. */
  private parseValue(value: string): Date | null {
    if (!value) return null;
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return null;
    const [, y, m, d] = match;
    return new Date(Number(y), Number(m) - 1, Number(d));
  }

  /** Gera o ISO "YYYY-MM-DD" a partir de componentes locais. */
  private toISO(year: number, month: number, day: number): string {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  }

  private formatValue(): string {
    const parsed = this.parseValue(this.value);
    return parsed ? parsed.toLocaleDateString("pt-BR") : "";
  }

  private monthLabel(): string {
    return new Date(this.viewYear, this.viewMonth, 1).toLocaleDateString(
      "pt-BR",
      { month: "long", year: "numeric" },
    );
  }

  private setOpen(value: boolean) {
    if (this.open === value) return;
    this.open = value;
    if (value) {
      this.syncViewFromValue();
      requestAnimationFrame(() => this.start());
      document.addEventListener("click", this.onDocumentClick);
      document.addEventListener("keydown", this.onKeydown);
    } else {
      this.stop();
      document.removeEventListener("click", this.onDocumentClick);
      document.removeEventListener("keydown", this.onKeydown);
    }
  }

  private start() {
    if (!this.triggerEl || !this.floatingEl) return;
    this.stop();
    this.cleanup = autoUpdate(this.triggerEl, this.floatingEl, () => {
      if (!this.triggerEl || !this.floatingEl) return;
      computePosition(this.triggerEl, this.floatingEl, {
        placement: "bottom-start",
        middleware: [offset(6), flip(), shift({ padding: 8 })],
      }).then(({ x, y }) => {
        Object.assign(this.floatingEl!.style, { left: `${x}px`, top: `${y}px` });
      });
    });
  }

  private stop() {
    this.cleanup?.();
    this.cleanup = undefined;
  }

  private onTriggerClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.setOpen(!this.open);
  };

  private onDocumentClick = (event: MouseEvent) => {
    if (!this.open) return;
    if (event.composedPath().includes(this.host)) return;
    this.setOpen(false);
  };

  private onKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this.open) this.setOpen(false);
  };

  private prevMonth = (event: MouseEvent) => {
    event.stopPropagation();
    if (this.viewMonth === 0) {
      this.viewMonth = 11;
      this.viewYear -= 1;
    } else {
      this.viewMonth -= 1;
    }
  };

  private nextMonth = (event: MouseEvent) => {
    event.stopPropagation();
    if (this.viewMonth === 11) {
      this.viewMonth = 0;
      this.viewYear += 1;
    } else {
      this.viewMonth += 1;
    }
  };

  private selectDay(day: number) {
    this.value = this.toISO(this.viewYear, this.viewMonth, day);
    this.setOpen(false);
    this.uiChange.emit(this.value);
  }

  private buildDays(): number[] {
    const firstWeekday = new Date(this.viewYear, this.viewMonth, 1).getDay();
    const daysInMonth = new Date(
      this.viewYear,
      this.viewMonth + 1,
      0,
    ).getDate();
    const leading = Array.from({ length: firstWeekday }, () => 0);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return [...leading, ...days];
  }

  private isToday(day: number): boolean {
    const now = new Date();
    return (
      day === now.getDate() &&
      this.viewMonth === now.getMonth() &&
      this.viewYear === now.getFullYear()
    );
  }

  private isSelected(day: number): boolean {
    return this.value === this.toISO(this.viewYear, this.viewMonth, day);
  }

  render() {
    const display = this.formatValue();
    return (
      <Host>
        <button
          type="button"
          class="field"
          ref={(el) => (this.triggerEl = el as HTMLElement)}
          onClick={this.onTriggerClick}
          aria-haspopup="dialog"
          aria-expanded={this.open ? "true" : "false"}
        >
          <span class={{ label: true, placeholder: !display }}>
            {display || this.placeholder}
          </span>
          <svg
            class="icon"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </button>

        <div
          class={{ calendar: true, "is-open": this.open }}
          role="dialog"
          ref={(el) => (this.floatingEl = el as HTMLElement)}
        >
          <div class="header">
            <button
              type="button"
              class="nav"
              aria-label="Mês anterior"
              onClick={this.prevMonth}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <span class="month-label">{this.monthLabel()}</span>
            <button
              type="button"
              class="nav"
              aria-label="Próximo mês"
              onClick={this.nextMonth}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div class="weekdays">
            {WEEKDAYS.map((label) => (
              <span class="weekday">{label}</span>
            ))}
          </div>

          <div class="grid">
            {this.buildDays().map((day) =>
              day === 0 ? (
                <span class="day empty"></span>
              ) : (
                <button
                  type="button"
                  class={{
                    day: true,
                    today: this.isToday(day),
                    selected: this.isSelected(day),
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    this.selectDay(day);
                  }}
                >
                  {day}
                </button>
              ),
            )}
          </div>
        </div>
      </Host>
    );
  }
}
