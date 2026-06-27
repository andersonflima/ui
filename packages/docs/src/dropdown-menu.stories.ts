import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = { title: "Overlays/DropdownMenu" };

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ui-dropdown-menu>
      <ui-button slot="trigger">Menu</ui-button>
      <ui-dropdown-item>Editar</ui-dropdown-item>
      <ui-dropdown-item>Duplicar</ui-dropdown-item>
      <ui-dropdown-item disabled>Arquivar</ui-dropdown-item>
    </ui-dropdown-menu>
  `,
};
