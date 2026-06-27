import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta = {
  title: "Formulários/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-64">
        <SelectValue placeholder="Selecione uma linguagem" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Linguagens</SelectLabel>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="rust">Rust</SelectItem>
          <SelectItem value="go">Go</SelectItem>
          <SelectItem value="haskell">Haskell</SelectItem>
          <SelectItem value="elixir">Elixir</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
