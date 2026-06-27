import { Component, State, h, Host } from "@stencil/core";

@Component({
  tag: "ui-scroll-progress",
  styleUrl: "ui-scroll-progress.css",
  shadow: true,
})
export class UiScrollProgress {
  /** Progresso da rolagem (0 a 1). */
  @State() progress = 0;

  connectedCallback() {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.onScroll();
  }

  disconnectedCallback() {
    if (typeof window === "undefined") return;
    window.removeEventListener("scroll", this.onScroll);
  }

  private onScroll = () => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    const scrollable = el.scrollHeight - el.clientHeight;
    this.progress = scrollable > 0 ? el.scrollTop / scrollable : 0;
  };

  render() {
    return (
      <Host>
        <div
          class="bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(this.progress * 100)}
          style={{ transform: `scaleX(${this.progress})` }}
        ></div>
      </Host>
    );
  }
}
