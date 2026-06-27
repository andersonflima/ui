import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/Progress",
  render: (args) =>
    html`<ui-progress value=${args.value} ?indeterminate=${args.indeterminate}></ui-progress>`,
  args: { value: 60, indeterminate: false },
};

export default meta;
type Story = StoryObj;

export const Determinada: Story = {
  render: () => html`<ui-progress value=${60}></ui-progress>`,
};

export const Indeterminada: Story = {
  render: () => html`<ui-progress ?indeterminate=${true}></ui-progress>`,
};

export const Niveis: Story = {
  render: () =>
    html`<div style="display:flex;flex-direction:column;gap:1rem;width:20rem">
      ${[0, 25, 50, 75, 100].map((v) => html`<ui-progress value=${v}></ui-progress>`)}
    </div>`,
};
