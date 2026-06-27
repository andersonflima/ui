import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const badges = html`
  <ui-badge variant="success">Ativo</ui-badge>
  <ui-badge variant="info">Novo</ui-badge>
  <ui-badge variant="warning">Pendente</ui-badge>
`;

const meta: Meta = {
  title: "Layout/Stack",
  tags: ["autodocs"],
  render: (args) =>
    html`<ui-stack direction=${args.direction} gap=${args.gap} ?wrap=${args.wrap}>
      ${badges}
    </ui-stack>`,
  args: { direction: "horizontal", gap: "md", wrap: false },
  argTypes: {
    direction: { control: "inline-radio", options: ["horizontal", "vertical"] },
    gap: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    wrap: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: { direction: "vertical", align: "start" },
  render: (args) =>
    html`<ui-stack direction=${args.direction} gap=${args.gap} align="start">
      ${badges}
    </ui-stack>`,
};

export const EspacamentoLargo: Story = { args: { gap: "xl" } };
