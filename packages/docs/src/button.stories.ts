import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Ações/Button",
  render: (args) =>
    html`<ui-button variant=${args.variant} size=${args.size} ?loading=${args.loading}
      >${args.label}</ui-button
    >`,
  args: { variant: "default", size: "md", label: "Começar", loading: false },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "default", "subtle", "outline", "ghost", "destructive", "link"],
    },
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Solid: Story = { args: { variant: "solid", label: "Publicar" } };
export const Carregando: Story = { args: { variant: "solid", label: "Salvando", loading: true } };

export const Variantes: Story = {
  render: () =>
    html`<div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center">
      ${["solid", "default", "subtle", "outline", "ghost", "destructive", "link"].map(
        (v) => html`<ui-button variant=${v}>${v}</ui-button>`,
      )}
    </div>`,
};
