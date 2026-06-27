import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/Badge",
  render: (args) => html`<ui-badge variant=${args.variant}>${args.label}</ui-badge>`,
  args: { variant: "default", label: "novo" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "outline", "success", "warning", "danger", "info"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variantes: Story = {
  render: () =>
    html`<div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center">
      ${["default", "solid", "outline", "success", "warning", "danger", "info"].map(
        (v) => html`<ui-badge variant=${v}>${v}</ui-badge>`,
      )}
    </div>`,
};
