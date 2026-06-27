import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label/label";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Formulários/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Marcado: Story = { args: { defaultChecked: true } };

export const Desabilitado: Story = { args: { disabled: true } };

export const ComLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="termos" defaultChecked />
      <Label htmlFor="termos">Aceito os termos de uso</Label>
    </div>
  ),
};
