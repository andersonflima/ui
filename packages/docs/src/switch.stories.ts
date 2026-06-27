import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/Switch",
  render: (args) =>
    html`<ui-switch ?checked=${args.checked} ?disabled=${args.disabled}></ui-switch>`,
  args: { checked: false, disabled: false },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Ligado: Story = { args: { checked: true } };
export const Desabilitado: Story = { args: { disabled: true } };
