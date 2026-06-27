import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/Input",
  render: (args) =>
    html`<ui-input
      value=${args.value}
      placeholder=${args.placeholder}
      type=${args.type}
      name=${args.name}
      ?disabled=${args.disabled}
      ?invalid=${args.invalid}
    ></ui-input>`,
  args: {
    value: "",
    placeholder: "voce@exemplo.com",
    type: "text",
    name: "email",
    disabled: false,
    invalid: false,
  },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "tel", "url"] },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Invalido: Story = { args: { invalid: true, value: "valor-invalido" } };
export const Desabilitado: Story = { args: { disabled: true, value: "Indisponível" } };
