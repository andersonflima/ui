import type { Preview } from "@storybook/web-components";
import { withThemeByClassName } from "@storybook/addon-themes";
import { html } from "lit";

// Registra os Web Components (via defineCustomElement individual — aplica os estilos
// do shadow; o barrel auto-define não aplica) e carrega os tokens light/dark.
import "../src/register";
import "@andespindola/ui-core/styles.css";

// Fonte Inter (mesma identidade do portfólio) + gradiente de fundo no canvas inteiro.
if (typeof document !== "undefined") {
  const fonts = document.createElement("link");
  fonts.rel = "stylesheet";
  fonts.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
  document.head.appendChild(fonts);

  const surface = document.createElement("style");
  surface.textContent = `
    html, body, #storybook-root, .sb-show-main {
      min-height: 100%;
      background: var(--ui-page-gradient);
      background-attachment: fixed;
      color: var(--ui-foreground);
      font-family: var(--ui-font-sans);
    }
  `;
  document.head.appendChild(surface);
}

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: "centered",
    options: {
      storySort: { method: "alphabetical" },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "dark",
    }),
    (story) =>
      html`<div
        style="display:flex;align-items:center;justify-content:center;min-height:50vh;width:100%;padding:3rem;box-sizing:border-box"
      >
        ${story()}
      </div>`,
  ],
};

export default preview;
