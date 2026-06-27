import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const options = [
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Vue", value: "vue" },
];

const meta: Meta = {
  title: "Formulários/Select",
  render: (args) =>
    html`<ui-select
      .options=${options}
      placeholder=${args.placeholder}
      ?disabled=${args.disabled}
    ></ui-select>`,
  args: { placeholder: "Escolha", disabled: false },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
