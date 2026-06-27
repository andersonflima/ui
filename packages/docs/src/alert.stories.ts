import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/Alert",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-alert
      variant=${args.variant}
      heading=${args.heading}
      ?dismissible=${args.dismissible}
      >${args.content}</ui-alert
    >`,
  args: {
    variant: "info",
    heading: "Atenção",
    dismissible: false,
    content: "Esta é uma mensagem informativa para o usuário.",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
    },
    dismissible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Info: Story = {};

export const Sucesso: Story = {
  args: {
    variant: "success",
    heading: "Tudo certo",
    content: "Suas alterações foram salvas com sucesso.",
  },
};

export const Aviso: Story = {
  args: {
    variant: "warning",
    heading: "Verifique os dados",
    content: "Alguns campos precisam de revisão antes de continuar.",
  },
};

export const Erro: Story = {
  args: {
    variant: "danger",
    heading: "Falha ao salvar",
    content: "Não foi possível concluir a operação. Tente novamente.",
  },
};

export const Dispensavel: Story = {
  args: {
    variant: "info",
    heading: "Novidade",
    dismissible: true,
    content: "Você pode fechar este alerta no botão à direita.",
  },
};
