import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const periodos = [
  { label: "Dia", value: "dia" },
  { label: "Semana", value: "sem" },
  { label: "Mês", value: "mes" },
];

const meta: Meta = {
  title: "Formulários/Segmented",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-segmented .items=${args.items} value=${args.value}></ui-segmented>`,
  args: { items: periodos, value: "dia" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Semana: Story = { args: { value: "sem" } };

export const Visualizacao: Story = {
  args: {
    items: [
      { label: "Lista", value: "lista" },
      { label: "Grade", value: "grade" },
    ],
    value: "grade",
  },
};
