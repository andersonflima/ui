import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Tema/ThemeToggle",
};

export default meta;
type Story = StoryObj;

// Alterna a classe `dark` no documentElement, interagindo com o
// toggle de tema global do Storybook.
export const Default: Story = {
  render: () => html`<ui-theme-toggle></ui-theme-toggle>`,
};
