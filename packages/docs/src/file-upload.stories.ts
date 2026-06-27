import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/FileUpload",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-file-upload
      label=${args.label}
      ?multiple=${args.multiple}
    ></ui-file-upload>`,
  args: { label: "Arraste arquivos ou clique", multiple: true },
  argTypes: {
    label: { control: "text" },
    multiple: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
