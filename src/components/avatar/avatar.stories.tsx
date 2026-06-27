import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta = {
  title: "Feedback/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComImagem: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/80" alt="Anderson Espindola" />
      <AvatarFallback>AE</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AE</AvatarFallback>
    </Avatar>
  ),
};
