import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./drawer";

const meta = {
  title: "Overlays/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Direita: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="solid">Abrir à direita</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Painel lateral</DrawerTitle>
          <DrawerDescription>Conteúdo deslizante a partir da direita.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Fechar</Button>
          </DrawerClose>
          <Button variant="solid">Confirmar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Inferior: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="solid">Abrir embaixo</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Painel inferior</DrawerTitle>
          <DrawerDescription>Conteúdo deslizante a partir da base.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Fechar</Button>
          </DrawerClose>
          <Button variant="solid">Confirmar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
