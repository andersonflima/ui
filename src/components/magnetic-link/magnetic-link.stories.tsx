import type { Meta, StoryObj } from "@storybook/react";
import { MagneticLink } from "./magnetic-link";

const meta = {
  title: "Animação/MagneticLink",
  component: MagneticLink,
  tags: ["autodocs"],
  args: { href: "#", children: null },
} satisfies Meta<typeof MagneticLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MagneticLink
      href="#"
      className="rounded-full border border-[var(--ui-border)] bg-[var(--ui-chip)] px-6 py-3 text-sm font-medium text-[var(--ui-foreground)]"
    >
      Passe o mouse
    </MagneticLink>
  ),
};
