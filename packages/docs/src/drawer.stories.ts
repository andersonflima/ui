import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = { title: "Overlays/Drawer" };

export default meta;
type Story = StoryObj;

export const Direita: Story = {
  render: () => html`
    <ui-button variant="solid" @click=${() => (document.getElementById("drw-r") as any)?.show()}>
      Abrir à direita
    </ui-button>
    <ui-drawer id="drw-r" side="right">
      <h2 slot="title">Painel lateral</h2>
      <p slot="description">Conteúdo do drawer ancorado à direita.</p>
      <div style="margin-top:1rem;display:flex;gap:.5rem;justify-content:flex-end">
        <ui-button @click=${() => (document.getElementById("drw-r") as any)?.close()}>
          Fechar
        </ui-button>
      </div>
    </ui-drawer>
  `,
};

export const Inferior: Story = {
  render: () => html`
    <ui-button variant="solid" @click=${() => (document.getElementById("drw-b") as any)?.show()}>
      Abrir embaixo
    </ui-button>
    <ui-drawer id="drw-b" side="bottom">
      <h2 slot="title">Painel inferior</h2>
      <p slot="description">Conteúdo do drawer ancorado na parte inferior.</p>
      <div style="margin-top:1rem;display:flex;gap:.5rem;justify-content:flex-end">
        <ui-button @click=${() => (document.getElementById("drw-b") as any)?.close()}>
          Fechar
        </ui-button>
      </div>
    </ui-drawer>
  `,
};
