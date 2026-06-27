import type { Meta, StoryObj } from "@storybook/react";
import { Reveal } from "./reveal";

const meta = {
  title: "Animação/Reveal",
  component: Reveal,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {[0, 1, 2].map((i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="ui-glass rounded-[var(--ui-radius-xl)] p-6 text-[var(--ui-foreground)]">
            Item animado {i + 1}
          </div>
        </Reveal>
      ))}
    </div>
  ),
};
