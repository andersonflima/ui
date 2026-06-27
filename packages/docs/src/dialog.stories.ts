import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = { title: "Overlays/Dialog" };

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ui-button variant="solid" @click=${() => (document.getElementById("dlg-1") as any)?.show()}>
      Abrir diálogo
    </ui-button>
    <ui-dialog id="dlg-1">
      <h2 slot="title">Confirmar ação</h2>
      <p slot="description">Esta ação não pode ser desfeita. Deseja continuar?</p>
      <div style="margin-top:1rem;display:flex;gap:.5rem;justify-content:flex-end">
        <ui-button @click=${() => (document.getElementById("dlg-1") as any)?.close()}>
          Cancelar
        </ui-button>
        <ui-button
          variant="solid"
          @click=${() => (document.getElementById("dlg-1") as any)?.close()}
        >
          Confirmar
        </ui-button>
      </div>
    </ui-dialog>
  `,
};
