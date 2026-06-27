import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/Spinner",
  render: (args) => html`<ui-spinner size=${args.size}></ui-spinner>`,
  args: { size: "md" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Tamanhos: Story = {
  render: () =>
    html`<div style="display:flex;gap:1rem;align-items:center">
      ${["sm", "md", "lg"].map((s) => html`<ui-spinner size=${s}></ui-spinner>`)}
    </div>`,
};
