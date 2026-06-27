import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Navegação/Navbar",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  render: () =>
    html`<ui-navbar>
      <span slot="brand">◆ Marca</span>
      <ui-button variant="ghost" size="sm">Docs</ui-button>
      <ui-button slot="actions" variant="solid" size="sm">Entrar</ui-button>
    </ui-navbar>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
