import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/DatePicker",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-date-picker value=${args.value}></ui-date-picker>`,
  args: { value: "" },
  argTypes: {
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const ComValor: Story = { args: { value: "2026-06-27" } };
