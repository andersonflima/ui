import type { Meta, StoryObj } from "@storybook/react";
import { ScrollProgress } from "./scroll-progress";

const meta = {
  title: "Animação/ScrollProgress",
  component: ScrollProgress,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ScrollProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <ScrollProgress />
      <div style={{ height: "200vh" }} className="p-8 text-[var(--ui-foreground)]">
        Role a página para ver a barra de progresso no topo.
      </div>
    </>
  ),
};
