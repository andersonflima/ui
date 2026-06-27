import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/Slider",
  render: (args) =>
    html`<ui-slider
      value=${args.value}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      ?disabled=${args.disabled}
    ></ui-slider>`,
  args: { value: 50, min: 0, max: 100, step: 1, disabled: false },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const ComStep: Story = { args: { value: 40, min: 0, max: 100, step: 10 } };
