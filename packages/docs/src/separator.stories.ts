import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Layout/Separator",
  render: (args) => html`<ui-separator orientation=${args.orientation}></ui-separator>`,
  args: { orientation: "horizontal" },
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () =>
    html`<div style="width:18rem">
      <p>Acima</p>
      <ui-separator orientation="horizontal"></ui-separator>
      <p>Abaixo</p>
    </div>`,
};

export const Vertical: Story = {
  render: () =>
    html`<div style="display:flex;align-items:center;gap:1rem;height:3rem">
      <span>Esquerda</span>
      <ui-separator orientation="vertical"></ui-separator>
      <span>Direita</span>
    </div>`,
};
