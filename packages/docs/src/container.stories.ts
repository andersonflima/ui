import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const block = (label: string) =>
  html`<div
    style="padding:1rem;border:1px dashed var(--ui-color-border,#d4d4d8);border-radius:.5rem;text-align:center"
  >
    ${label}
  </div>`;

const meta: Meta = {
  title: "Layout/Container",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-container size=${args.size} ?padded=${args.padded}>
      ${block(`size: ${args.size}`)}
    </ui-container>`,
  args: { size: "lg", padded: true },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "full"] },
    padded: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Pequeno: Story = { args: { size: "sm" } };
export const Medio: Story = { args: { size: "md" } };

export const Tamanhos: Story = {
  render: () =>
    html`<div style="display:flex;flex-direction:column;gap:1rem">
      ${["sm", "md", "lg"].map(
        (s) => html`<ui-container size=${s}>${block(`size: ${s}`)}</ui-container>`,
      )}
    </div>`,
};
