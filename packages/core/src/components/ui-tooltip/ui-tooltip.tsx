import { Component, Prop, State, Element, h, Host } from "@stencil/core";
import {
  computePosition,
  autoUpdate,
  offset,
  flip,
  shift,
  type Placement,
} from "@floating-ui/dom";

@Component({
  tag: "ui-tooltip",
  styleUrl: "ui-tooltip.css",
  shadow: true,
})
export class UiTooltip {
  @Element() host!: HTMLElement;

  /** Texto exibido no balão flutuante. */
  @Prop() content = "";

  /** Posição preferida do balão relativa ao gatilho. */
  @Prop() placement: Placement = "top";

  /** Atraso (ms) antes de exibir o balão. */
  @Prop() openDelay = 200;

  @State() visible = false;

  private triggerEl?: HTMLElement;
  private floatingEl?: HTMLElement;
  private cleanup?: () => void;
  private timer?: ReturnType<typeof setTimeout>;

  disconnectedCallback() {
    this.stop();
    if (this.timer) clearTimeout(this.timer);
  }

  private start() {
    if (!this.triggerEl || !this.floatingEl) return;
    this.stop();
    this.cleanup = autoUpdate(this.triggerEl, this.floatingEl, () => {
      if (!this.triggerEl || !this.floatingEl) return;
      computePosition(this.triggerEl, this.floatingEl, {
        placement: this.placement,
        middleware: [offset(8), flip(), shift({ padding: 8 })],
      }).then(({ x, y }) => {
        Object.assign(this.floatingEl!.style, { left: `${x}px`, top: `${y}px` });
      });
    });
  }

  private stop() {
    this.cleanup?.();
    this.cleanup = undefined;
  }

  private onEnter = () => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.visible = true;
      requestAnimationFrame(() => this.start());
    }, this.openDelay);
  };

  private onLeave = () => {
    if (this.timer) clearTimeout(this.timer);
    this.visible = false;
    this.stop();
  };

  render() {
    return (
      <Host
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onFocusin={this.onEnter}
        onFocusout={this.onLeave}
      >
        <span class="trigger" ref={(el) => (this.triggerEl = el as HTMLElement)}>
          <slot></slot>
        </span>
        <div
          class={{ tooltip: true, "is-visible": this.visible }}
          role="tooltip"
          ref={(el) => (this.floatingEl = el as HTMLElement)}
        >
          {this.content}
        </div>
      </Host>
    );
  }
}
