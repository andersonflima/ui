import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Formulários/Field",
  render: (args) =>
    html`<ui-field
      label=${args.label}
      description=${args.description}
      error=${args.error}
      ?required=${args.required}
    >
      <ui-input placeholder="voce@exemplo.com"></ui-input>
    </ui-field>`,
  args: {
    label: "E-mail",
    description: "Usaremos para enviar notificações.",
    error: "",
    required: false,
  },
  argTypes: {
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const ComDescricao: Story = {};

export const Obrigatorio: Story = {
  args: { label: "Nome completo", description: "Como aparece no documento.", required: true },
};

export const ComErro: Story = {
  args: { label: "E-mail", error: "Campo obrigatório", required: true },
};

export const Label: Story = {
  render: () => html`<ui-label>Aceito os termos de uso</ui-label>`,
};
