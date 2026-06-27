import { Component, State, Method, h, Host } from "@stencil/core";
import type { UiToastVariant } from "../ui-toast/ui-toast";

export interface UiToastOptions {
  heading?: string;
  description?: string;
  variant?: UiToastVariant;
  duration?: number;
}

interface UiToasterItem extends UiToastOptions {
  id: string;
}

@Component({
  tag: "ui-toaster",
  styleUrl: "ui-toaster.css",
  shadow: true,
})
export class UiToaster {
  @State() items: UiToasterItem[] = [];

  private counter = 0;

  /** Enfileira um novo toast imperativamente. */
  @Method() async toast(opts: UiToastOptions) {
    const id = `toast-${this.counter++}-${Math.random()
      .toString(36)
      .slice(2)}`;
    this.items = [...this.items, { ...opts, id }];
  }

  private remove(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  render() {
    return (
      <Host>
        <div class="container">
          {this.items.map((item) => (
            <ui-toast
              key={item.id}
              open
              heading={item.heading}
              description={item.description}
              variant={item.variant ?? "default"}
              duration={item.duration ?? 4000}
              onUiClose={() => this.remove(item.id)}
            ></ui-toast>
          ))}
        </div>
      </Host>
    );
  }
}
