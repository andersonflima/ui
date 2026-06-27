import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/Textarea",
  render: (args) =>
    html`<ui-textarea
      value=${args.value}
      placeholder=${args.placeholder}
      rows=${args.rows}
      ?disabled=${args.disabled}
      ?invalid=${args.invalid}
    ></ui-textarea>`,
  args: {
    value: "",
    placeholder: "Escreva sua mensagem...",
    rows: 4,
    disabled: false,
    invalid: false,
  },
  argTypes: {
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    rows: { control: "number" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Desabilitado: Story = { args: { disabled: true, value: "Conteúdo indisponível" } };
