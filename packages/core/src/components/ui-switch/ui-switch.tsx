import { Component, Prop, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
  tag: "ui-switch",
  styleUrl: "ui-switch.css",
  shadow: true,
})
export class UiSwitch {
  /** Estado ligado/desligado. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Desabilita o controle. */
  @Prop() disabled = false;

  /** Emitido quando o estado muda. */
  @Event() uiChange!: EventEmitter<boolean>;

  private toggle = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.uiChange.emit(this.checked);
  };

  private onKeyDown = (event: KeyboardEvent) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      this.toggle();
    }
  };

  render() {
    return (
      <Host>
        <button
          class="switch"
          type="button"
          role="switch"
          aria-checked={this.checked ? "true" : "false"}
          disabled={this.disabled}
          onClick={this.toggle}
          onKeyDown={this.onKeyDown}
        >
          <span class="thumb"></span>
        </button>
      </Host>
    );
  }
}
