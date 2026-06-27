import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Navegação/Pagination",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-pagination
      total=${args.total}
      current=${args.current}
      siblings=${args.siblings}
    ></ui-pagination>`,
  args: { total: 10, current: 4, siblings: 1 },
  argTypes: {
    total: { control: { type: "number", min: 1 } },
    current: { control: { type: "number", min: 1 } },
    siblings: { control: { type: "number", min: 0, max: 3 } },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const PrimeiraPagina: Story = { args: { total: 10, current: 1 } };

export const MuitasPaginas: Story = { args: { total: 24, current: 12, siblings: 2 } };
