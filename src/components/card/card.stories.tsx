import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "../button/button";

const meta = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Plano Pro</CardTitle>
        <CardDescription>Tudo que você precisa para escalar.</CardDescription>
      </CardHeader>
      <CardContent>
        Recursos avançados, suporte prioritário e integrações ilimitadas em um
        único lugar.
      </CardContent>
      <CardFooter>
        <Button variant="solid">Assinar agora</Button>
      </CardFooter>
    </Card>
  ),
};
