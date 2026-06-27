import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

type PageEntry = number | "...";

@Component({
  tag: "ui-pagination",
  styleUrl: "ui-pagination.css",
  shadow: true,
})
export class UiPagination {
  /** Total de páginas. */
  @Prop() total = 1;
  /** Página atual. */
  @Prop({ mutable: true, reflect: true }) current = 1;
  /** Quantidade de páginas ao redor da atual. */
  @Prop() siblings = 1;

  /** Emitido quando a página muda. */
  @Event() uiChange!: EventEmitter<number>;

  private clamp = (page: number) => Math.min(Math.max(page, 1), Math.max(this.total, 1));

  private go = (page: number) => {
    const next = this.clamp(page);
    if (next === this.current) return;
    this.current = next;
    this.uiChange.emit(next);
  };

  private buildRange = (): PageEntry[] => {
    const total = Math.max(this.total, 1);
    const current = this.clamp(this.current);
    const siblings = Math.max(this.siblings, 0);

    const start = Math.max(current - siblings, 1);
    const end = Math.min(current + siblings, total);

    const pages = new Set<number>([1, total]);
    for (let page = start; page <= end; page += 1) pages.add(page);

    const sorted = Array.from(pages)
      .filter((page) => page >= 1 && page <= total)
      .sort((a, b) => a - b);

    const result: PageEntry[] = [];
    let previous = 0;
    for (const page of sorted) {
      if (previous && page - previous > 1) result.push("...");
      result.push(page);
      previous = page;
    }
    return result;
  };

  render() {
    const total = Math.max(this.total, 1);
    const current = this.clamp(this.current);
    const entries = this.buildRange();

    return (
      <Host>
        <nav class="pagination" role="navigation" aria-label="Paginação">
          <button
            class="page nav"
            type="button"
            aria-label="Página anterior"
            disabled={current <= 1}
            onClick={() => this.go(current - 1)}
          >
            ‹
          </button>
          {entries.map((entry, index) => {
            if (entry === "...") {
              return (
                <span key={`ellipsis-${index}`} class="ellipsis" aria-hidden="true">
                  …
                </span>
              );
            }
            const active = entry === current;
            return (
              <button
                key={entry}
                class={{ page: true, active }}
                type="button"
                aria-label={`Página ${entry}`}
                aria-current={active ? "page" : undefined}
                onClick={() => this.go(entry)}
              >
                {entry}
              </button>
            );
          })}
          <button
            class="page nav"
            type="button"
            aria-label="Próxima página"
            disabled={current >= total}
            onClick={() => this.go(current + 1)}
          >
            ›
          </button>
        </nav>
      </Host>
    );
  }
}
