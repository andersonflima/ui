import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const options = [
  { label: "Opção A", value: "a" },
  { label: "Opção B", value: "b" },
  { label: "Opção C", value: "c" },
];

const meta: Meta = {
  title: "Formulários/RadioGroup",
  render: (args) =>
    html`<ui-radio-group
      .options=${options}
      value=${args.value}
      ?disabled=${args.disabled}
    ></ui-radio-group>`,
  args: { value: "a", disabled: false },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
