import {
  Component,
  State,
  Event,
  EventEmitter,
  h,
  Host,
} from "@stencil/core";

const STORAGE_KEY = "ui-theme";

@Component({
  tag: "ui-theme-toggle",
  styleUrl: "ui-theme-toggle.css",
  shadow: true,
})
export class UiThemeToggle {
  /** Indica se o tema escuro está ativo. */
  @State() isDark = false;

  /** Emitido quando o tema é alterado. */
  @Event() uiThemeChange!: EventEmitter<"light" | "dark">;

  connectedCallback() {
    this.isDark = this.resolveInitialTheme();
    this.applyTheme();
  }

  private resolveInitialTheme(): boolean {
    if (typeof window === "undefined") return false;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "dark") return true;
      if (stored === "light") return false;
    } catch {
      // localStorage indisponível: usa preferência do sistema.
    }
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  private applyTheme() {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", this.isDark);
  }

  private toggle = () => {
    this.isDark = !this.isDark;
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(
          STORAGE_KEY,
          this.isDark ? "dark" : "light",
        );
      } catch {
        // Persistência indisponível: segue apenas em memória.
      }
    }
    this.applyTheme();
    this.uiThemeChange.emit(this.isDark ? "dark" : "light");
  };

  private renderIcon() {
    if (this.isDark) {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      );
    }
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="12" y1="2" x2="12" y2="4"></line>
        <line x1="12" y1="20" x2="12" y2="22"></line>
        <line x1="2" y1="12" x2="4" y2="12"></line>
        <line x1="20" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
      </svg>
    );
  }

  render() {
    return (
      <Host>
        <button
          class="toggle"
          type="button"
          aria-label={this.isDark ? "Ativar tema claro" : "Ativar tema escuro"}
          aria-pressed={this.isDark ? "true" : "false"}
          onClick={this.toggle}
        >
          {this.renderIcon()}
        </button>
      </Host>
    );
  }
}
