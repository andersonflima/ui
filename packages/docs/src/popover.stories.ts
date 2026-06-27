import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = { title: "Overlays/Popover" };

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ui-popover>
      <ui-button slot="trigger" variant="solid">Abrir</ui-button>
      <div style="display:grid;gap:.5rem">
        <strong>Título</strong>
        <span>Conteúdo do popover.</span>
      </div>
    </ui-popover>
  `,
};
