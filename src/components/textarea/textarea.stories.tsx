import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
  title: "Formulários/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { placeholder: "Escreva uma mensagem..." },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Desabilitado: Story = {
  args: { disabled: true, defaultValue: "Conteúdo bloqueado para edição." },
};
