import { Component, Prop, State, Element, h, Host } from "@stencil/core";

@Component({
  tag: "ui-reveal",
  styleUrl: "ui-reveal.css",
  shadow: true,
})
export class UiReveal {
  @Element() host!: HTMLElement;

  /** Atraso da transição em milissegundos. */
  @Prop() delay = 0;

  /** Indica se o conteúdo já foi revelado. */
  @State() visible = false;

  private observer?: IntersectionObserver;

  connectedCallback() {
    if (typeof IntersectionObserver === "undefined") {
      this.visible = true;
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.visible = true;
          this.observer?.disconnect();
          break;
        }
      }
    });
    this.observer.observe(this.host);
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  render() {
    return (
      <Host>
        <div
          class={{ reveal: true, visible: this.visible }}
          style={{ transitionDelay: `${this.delay}ms` }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
