import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: { value: 60, className: "w-72" },
  argTypes: { value: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinada: Story = {};

export const Indeterminada: Story = {
  args: { indeterminate: true, value: null },
};

export const Niveis: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={85} />
      <Progress indeterminate />
    </div>
  ),
};
