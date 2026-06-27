import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/button";
import { ToastProvider, useToast } from "./toast";

function Demo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast({ title: "Salvo", description: "Tudo certo." })}>
        Mostrar toast
      </Button>
      <Button
        variant="solid"
        onClick={() =>
          toast({
            variant: "success",
            title: "Concluído",
            description: "Operação realizada com sucesso.",
          })
        }
      >
        Sucesso
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            variant: "danger",
            title: "Erro",
            description: "Algo deu errado, tente novamente.",
          })
        }
      >
        Erro
      </Button>
    </div>
  );
}

const meta = {
  title: "Feedback/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  ),
};
