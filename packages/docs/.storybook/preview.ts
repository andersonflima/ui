import type { Preview } from "@storybook/web-components";
import { withThemeByClassName } from "@storybook/addon-themes";
import { html } from "lit";

// Registra (auto-define) todos os Web Components ui-* e carrega os tokens light/dark.
import "@andespindola/ui-core/dist/components/index.js";
import "@andespindola/ui-core/styles.css";

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: "centered",
  },
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "dark",
    }),
    (story) =>
      html`<div
        style="min-height:60vh;display:flex;align-items:center;justify-content:center;background:var(--ui-background);color:var(--ui-foreground);padding:2.5rem;font-family:var(--ui-font-sans)"
      >
        ${story()}
      </div>`,
  ],
};

export default preview;
