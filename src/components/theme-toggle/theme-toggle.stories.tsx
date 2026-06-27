import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./theme-toggle";
import { ThemeProvider } from "../../providers/theme-provider";

const meta = {
  title: "Tema/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  ),
};
