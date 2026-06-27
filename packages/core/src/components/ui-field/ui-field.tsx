import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "ui-field",
  styleUrl: "ui-field.css",
  shadow: true,
})
export class UiField {
  /** Texto do rótulo. */
  @Prop() label?: string;
  /** Texto auxiliar exibido abaixo do controle. */
  @Prop() description?: string;
  /** Mensagem de erro; quando presente substitui a descrição. */
  @Prop() error?: string;
  /** Marca o campo como obrigatório (asterisco). */
  @Prop() required = false;
  /** Id do controle associado ao rótulo. */
  @Prop() fieldId?: string;

  render() {
    return (
      <Host>
        <div class="field">
          {this.label && (
            <label class="label" htmlFor={this.fieldId}>
              {this.label}
              {this.required && (
                <span class="required" aria-hidden="true">
                  {" *"}
                </span>
              )}
            </label>
          )}
          <slot></slot>
          {this.error ? (
            <p class="error" role="alert">
              {this.error}
            </p>
          ) : (
            this.description && <p class="description">{this.description}</p>
          )}
        </div>
      </Host>
    );
  }
}
