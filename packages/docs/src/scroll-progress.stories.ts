import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Animação/ScrollProgress",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

// A barra acompanha o progresso da rolagem do documento (0 a 1).
// O bloco alto abaixo cria área rolável para visualizar o efeito.
export const Default: Story = {
  render: () =>
    html`<ui-scroll-progress></ui-scroll-progress>
      <div style="height:200vh;padding:2rem">Role a página…</div>`,
};
