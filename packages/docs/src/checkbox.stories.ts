import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/Checkbox",
  render: (args) =>
    html`<ui-checkbox ?checked=${args.checked} ?disabled=${args.disabled}></ui-checkbox>`,
  args: { checked: false, disabled: false },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Marcado: Story = { args: { checked: true } };
export const Desabilitado: Story = { args: { disabled: true } };
