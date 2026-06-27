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

  /** Indicador de status. */
  @Prop() status?: "online" | "offline" | "busy" | "away";

  render() {
    return (
      <Host>
        <span class="wrapper">
          <span class="avatar">
            {this.src ? (
              <img class="image" src={this.src} alt={this.alt} />
            ) : (
              <span class="fallback">{this.fallback}</span>
            )}
          </span>
          {this.status && (
            <span class={`status status-${this.status}`} aria-label={this.status}></span>
          )}
        </span>
      </Host>
    );
  }
}
