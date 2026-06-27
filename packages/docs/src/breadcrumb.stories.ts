import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Navegação/Breadcrumb",
  tags: ["autodocs"],
  render: () =>
    html`<ui-breadcrumb>
      <ui-breadcrumb-item href="#">Início</ui-breadcrumb-item>
      <ui-breadcrumb-item href="#">Produtos</ui-breadcrumb-item>
      <ui-breadcrumb-item ?current=${true}>Detalhes</ui-breadcrumb-item>
    </ui-breadcrumb>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const NivelProfundo: Story = {
  render: () =>
    html`<ui-breadcrumb>
      <ui-breadcrumb-item href="#">Início</ui-breadcrumb-item>
      <ui-breadcrumb-item href="#">Configurações</ui-breadcrumb-item>
      <ui-breadcrumb-item href="#">Equipe</ui-breadcrumb-item>
      <ui-breadcrumb-item ?current=${true}>Permissões</ui-breadcrumb-item>
    </ui-breadcrumb>`,
};
