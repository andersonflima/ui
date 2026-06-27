import type { Meta, StoryObj } from "@storybook/react";
import { LoadingOverlay } from "./loading-overlay";
import { Card, CardContent, CardHeader, CardTitle } from "../card/card";

const meta = {
  title: "Feedback/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
  args: { visible: true, label: "Carregando…" },
} satisfies Meta<typeof LoadingOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SobreUmCard: Story = {
  render: (args) => (
    <Card className="relative w-80">
      <CardHeader>
        <CardTitle>Relatório mensal</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[var(--ui-text-muted)]">
          Conteúdo bloqueado enquanto os dados carregam.
        </p>
      </CardContent>
      <LoadingOverlay {...args} />
    </Card>
  ),
};
