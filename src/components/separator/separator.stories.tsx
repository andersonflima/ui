import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta = {
  title: "Disclosure/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm">Seção superior</p>
      <Separator className="my-4" />
      <p className="text-sm">Seção inferior</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Início</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Meio</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Fim</span>
    </div>
  ),
};
