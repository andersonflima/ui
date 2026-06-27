import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "ui-section",
  styleUrl: "ui-section.css",
  shadow: true,
})
export class UiSection {
  /** Texto curto exibido acima do título. */
  @Prop() eyebrow = "";
  /** Título principal da seção. */
  @Prop() heading = "";
  /** Descrição complementar. */
  @Prop() description = "";

  render() {
    return (
      <Host>
        <section>
          {this.eyebrow && <p class="eyebrow">{this.eyebrow}</p>}
          {this.heading && <h2 class="heading">{this.heading}</h2>}
          {this.description && <p class="description">{this.description}</p>}
          <slot></slot>
        </section>
      </Host>
    );
  }
}
