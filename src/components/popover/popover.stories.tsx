import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/button";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

const meta = {
  title: "Overlays/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Abrir popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Notificações</p>
          <p className="text-sm">Você tem 3 mensagens não lidas.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
