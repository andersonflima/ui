import { Component, Prop, h, Host } from "@stencil/core";
import type { UiSpinnerSize } from "../ui-spinner/ui-spinner";

/**
 * Sobreposição de carregamento que cobre o elemento pai.
 * O host pai deve ter `position: relative` para que a sobreposição
 * absoluta (inset 0) o cubra corretamente.
 */
@Component({
  tag: "ui-loading-overlay",
  styleUrl: "ui-loading-overlay.css",
  shadow: true,
})
export class UiLoadingOverlay {
  /** Controla a exibição da sobreposição. */
  @Prop() visible = false;

  /** Texto opcional exibido abaixo do spinner. */
  @Prop() label?: string;

  /** Tamanho do spinner. */
  @Prop() spinnerSize: UiSpinnerSize = "md";

  render() {
    if (!this.visible) {
      return <Host></Host>;
    }
    return (
      <Host role="status" aria-live="polite">
        <div class="overlay">
          <ui-spinner size={this.spinnerSize}></ui-spinner>
          {this.label && <p class="label">{this.label}</p>}
        </div>
      </Host>
    );
  }
}
