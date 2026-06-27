import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Passe o mouse</Button>
        </TooltipTrigger>
        <TooltipContent>Dica</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
