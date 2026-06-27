import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./dialog";

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="solid">Abrir</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Título</DialogTitle>
          <DialogDescription>Descrição do modal.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button variant="solid">Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ComFormulario: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="solid">Editar perfil</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>
            Atualize suas informações e salve as alterações.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dialog-nome">Nome</label>
            <Input id="dialog-nome" placeholder="Seu nome" defaultValue="Anderson" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="dialog-email">E-mail</label>
            <Input
              id="dialog-email"
              type="email"
              placeholder="voce@exemplo.com"
              defaultValue="anderson@exemplo.com"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
          <Button variant="solid">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
