import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./section";

const meta = {
  title: "Layout/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "Design System",
    title: "Seção de exemplo",
    description:
      "Bloco de layout de página com cabeçalho opcional, espaçamento consistente e largura máxima controlada.",
    children: (
      <p className="mt-8 text-[var(--ui-text-muted)]">
        Conteúdo da seção renderizado abaixo do cabeçalho.
      </p>
    ),
  },
};
