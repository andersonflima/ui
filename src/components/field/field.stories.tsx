import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input/input";
import { Field } from "./field";

const meta = {
  title: "Formulários/Field",
  component: Field,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComLabelEDescricao: Story = {
  render: () => (
    <Field
      className="w-72"
      label="E-mail"
      description="Usaremos para enviar notificações."
      htmlFor="field-email"
    >
      <Input id="field-email" placeholder="voce@exemplo.com" />
    </Field>
  ),
};

export const Obrigatorio: Story = {
  render: () => (
    <Field className="w-72" label="Nome" required htmlFor="field-nome">
      <Input id="field-nome" placeholder="Seu nome" />
    </Field>
  ),
};

export const ComErro: Story = {
  render: () => (
    <Field
      className="w-72"
      label="E-mail"
      error="Informe um e-mail válido."
      htmlFor="field-erro"
    >
      <Input id="field-erro" aria-invalid defaultValue="inválido" />
    </Field>
  ),
};
