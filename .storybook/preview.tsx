/// <reference path="../src/vite-env.d.ts" />
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: { disable: true },
    layout: "centered",
  },
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "dark",
    }),
    (Story) => (
      <div
        style={{
          minHeight: "60vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--ui-background)",
          color: "var(--ui-foreground)",
          padding: "2.5rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
