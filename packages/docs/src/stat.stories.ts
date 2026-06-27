import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/Stat",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-stat
      label=${args.label}
      value=${args.value}
      delta=${args.delta}
      trend=${args.trend}
    ></ui-stat>`,
  args: {
    label: "Receita",
    value: "R$ 48.2k",
    delta: "+12%",
    trend: "up",
  },
  argTypes: {
    trend: { control: "inline-radio", options: ["up", "down", "neutral"] },
  },
};

export default meta;
type Story = StoryObj;

export const Alta: Story = {};

export const Queda: Story = {
  args: {
    label: "Cancelamentos",
    value: "1.024",
    delta: "-8%",
    trend: "down",
  },
};

export const Conjunto: Story = {
  render: () =>
    html`<div style="display:flex;gap:1rem;flex-wrap:wrap">
      <ui-stat label="Receita" value="R$ 48.2k" delta="+12%" trend="up"></ui-stat>
      <ui-stat label="Churn" value="2.1%" delta="-3%" trend="down"></ui-stat>
      <ui-stat label="Usuários" value="8.430" trend="neutral"></ui-stat>
    </div>`,
};
