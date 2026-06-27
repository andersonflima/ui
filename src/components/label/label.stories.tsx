import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input/input";
import { Label } from "./label";

const meta = {
  title: "Formulários/Label",
  component: Label,
  tags: ["autodocs"],
  args: { children: "E-mail" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" placeholder="voce@exemplo.com" />
    </div>
  ),
};
