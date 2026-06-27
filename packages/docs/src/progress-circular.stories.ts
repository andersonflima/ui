import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/ProgressCircular",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-progress-circular
      value=${args.value}
      ?show-value=${args.showValue}
      ?indeterminate=${args.indeterminate}
    ></ui-progress-circular>`,
  args: { value: 68, showValue: true, indeterminate: false },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    showValue: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Indeterminado: Story = {
  args: { indeterminate: true, showValue: false },
};
