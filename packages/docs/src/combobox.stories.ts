import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const options = [
  { label: "React", value: "r" },
  { label: "Angular", value: "a" },
  { label: "Vue", value: "v" },
];

const meta: Meta = {
  title: "Formulários/Combobox",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-combobox
      .options=${options}
      placeholder=${args.placeholder}
    ></ui-combobox>`,
  args: { placeholder: "Busque" },
  argTypes: {
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
