import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "ui-avatar",
  styleUrl: "ui-avatar.css",
  shadow: true,
})
export class UiAvatar {
  /** URL da imagem do avatar. */
  @Prop() src?: string;

  /** Texto alternativo da imagem. */
  @Prop() alt = "";

  /** Texto exibido quando não há imagem (ex.: iniciais). */
  @Prop() fallback?: string;

  render() {
    return (
      <Host>
        <span class="avatar">
          {this.src ? (
            <img class="image" src={this.src} alt={this.alt} />
          ) : (
            <span class="fallback">{this.fallback}</span>
          )}
        </span>
      </Host>
    );
  }
}
