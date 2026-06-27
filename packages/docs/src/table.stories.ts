import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const columns = [
  { key: "nome", label: "Nome" },
  { key: "fw", label: "Framework" },
  { key: "v", label: "Versão", align: "right" },
];

const rows = [
  { nome: "Botão", fw: "core", v: "0.3" },
  { nome: "Tabela", fw: "core", v: "0.3" },
];

const meta: Meta = {
  title: "Dados/Table",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-table
      .columns=${columns}
      .rows=${rows}
      ?striped=${args.striped}
    ></ui-table>`,
  args: { striped: true },
  argTypes: {
    striped: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const SemListras: Story = { args: { striped: false } };
