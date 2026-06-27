import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = { title: "Feedback/Toast" };

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ui-toaster id="tst-1"></ui-toaster>
    <ui-button
      variant="solid"
      @click=${() =>
        (document.getElementById("tst-1") as any)?.toast({
          heading: "Salvo",
          description: "Tudo certo.",
          variant: "success",
        })}
    >
      Mostrar toast
    </ui-button>
  `,
};

export const Variantes: Story = {
  render: () => html`
    <ui-toaster id="tst-2"></ui-toaster>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap">
      <ui-button
        variant="solid"
        @click=${() =>
          (document.getElementById("tst-2") as any)?.toast({
            heading: "Salvo",
            description: "Tudo certo.",
            variant: "success",
          })}
      >
        Sucesso
      </ui-button>
      <ui-button
        variant="destructive"
        @click=${() =>
          (document.getElementById("tst-2") as any)?.toast({
            heading: "Erro",
            description: "Algo deu errado.",
            variant: "danger",
          })}
      >
        Erro
      </ui-button>
    </div>
  `,
};
