import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label/label";
import { Switch } from "./switch";

const meta = {
  title: "Formulários/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Ligado: Story = { args: { defaultChecked: true } };

export const Desabilitado: Story = { args: { disabled: true } };

export const ComLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notificacoes" defaultChecked />
      <Label htmlFor="notificacoes">Receber notificações</Label>
    </div>
  ),
};
