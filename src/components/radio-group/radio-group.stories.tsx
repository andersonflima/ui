import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label/label";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const meta = {
  title: "Formulários/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="mensal">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="plano-mensal" value="mensal" />
        <Label htmlFor="plano-mensal">Mensal</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="plano-anual" value="anual" />
        <Label htmlFor="plano-anual">Anual</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="plano-vitalicio" value="vitalicio" />
        <Label htmlFor="plano-vitalicio">Vitalício</Label>
      </div>
    </RadioGroup>
  ),
};
