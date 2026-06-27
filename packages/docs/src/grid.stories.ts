import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const cards = (count: number) =>
  Array.from(
    { length: count },
    (_, i) => html`<ui-card>
      <h3 slot="title">Item ${i + 1}</h3>
      <p slot="description">Conteúdo da célula.</p>
    </ui-card>`,
  );

const meta: Meta = {
  title: "Layout/Grid",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-grid .columns=${args.columns} gap=${args.gap}>${cards(6)}</ui-grid>`,
  args: { columns: 3, gap: "md" },
  argTypes: {
    columns: { control: { type: "number", min: 1, max: 12 } },
    gap: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
  },
};

export default meta;
type Story = StoryObj;

export const TresColunas: Story = {};

export const QuatroColunas: Story = { args: { columns: 4 } };

export const Responsivo: Story = {
  render: () =>
    html`<ui-grid min-item-width="8rem" gap="md">${cards(8)}</ui-grid>`,
};
