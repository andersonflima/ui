import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/Rating",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-rating
      value=${args.value}
      ?readonly=${args.readonly}
    ></ui-rating>`,
  args: { value: 3, readonly: false },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 5 } },
    readonly: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const SomenteLeitura: Story = { args: { readonly: true } };
