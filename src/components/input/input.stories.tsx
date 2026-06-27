import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Formulários/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "voce@exemplo.com" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ComValor: Story = { args: { defaultValue: "ana@exemplo.com" } };

export const Desabilitado: Story = {
  args: { disabled: true, defaultValue: "ana@exemplo.com" },
};

export const Invalido: Story = {
  args: { "aria-invalid": true, defaultValue: "inválido" },
};
