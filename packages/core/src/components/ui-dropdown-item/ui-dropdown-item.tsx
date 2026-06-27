import {
  Component,
  Prop,
  Event,
  EventEmitter,
  Element,
  h,
  Host,
} from "@stencil/core";

@Component({
  tag: "ui-dropdown-item",
  styleUrl: "ui-dropdown-item.css",
  shadow: true,
})
export class UiDropdownItem {
  @Element() host!: HTMLElement;

  /** Desabilita o item, impedindo seleção. */
  @Prop({ reflect: true }) disabled = false;

  /** Emitido quando o item é selecionado. */
  @Event() uiSelect!: EventEmitter<void>;

  private onClick = () => {
    if (this.disabled) return;
    this.uiSelect.emit();
    this.host.dispatchEvent(
      new CustomEvent("uiDropdownClose", { bubbles: true, composed: true }),
    );
  };

  render() {
    return (
      <Host>
        <button
          type="button"
          class="item"
          role="menuitem"
          disabled={this.disabled}
          onClick={this.onClick}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
