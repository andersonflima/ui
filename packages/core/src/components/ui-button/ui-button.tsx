import { Component, Prop, h, Host } from "@stencil/core";

export type UiButtonVariant =
  | "solid"
  | "default"
  | "subtle"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";
export type UiButtonSize = "sm" | "md" | "lg" | "icon";

@Component({
  tag: "ui-button",
  styleUrl: "ui-button.css",
  shadow: true,
})
export class UiButton {
  /** Variante visual. */
  @Prop() variant: UiButtonVariant = "default";
  /** Tamanho. */
  @Prop() size: UiButtonSize = "md";
  /** Desabilita o botão. */
  @Prop() disabled = false;
  /** Exibe spinner e desabilita durante uma ação assíncrona. */
  @Prop() loading = false;
  /** Tipo do botão nativo. */
  @Prop() type: "button" | "submit" | "reset" = "button";

  render() {
    return (
      <Host>
        <button
          class={{
            btn: true,
            [`variant-${this.variant}`]: true,
            [`size-${this.size}`]: true,
          }}
          type={this.type}
          disabled={this.disabled || this.loading}
          aria-busy={this.loading ? "true" : null}
        >
          {this.loading && <span class="spinner" aria-hidden="true"></span>}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
