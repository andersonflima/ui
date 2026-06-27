import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Dados/Timeline",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ui-timeline>
      <ui-timeline-item heading="Projeto criado" time="08:00" variant="accent">
        Repositório inicializado e estrutura definida.
      </ui-timeline-item>
      <ui-timeline-item heading="Build aprovado" time="10:30" variant="success">
        Pipeline de CI concluído com sucesso.
      </ui-timeline-item>
      <ui-timeline-item heading="Aviso de cobertura" time="11:15" variant="warning">
        Cobertura de testes abaixo do limite recomendado.
      </ui-timeline-item>
      <ui-timeline-item heading="Deploy falhou" time="12:00" variant="danger">
        Erro ao publicar a versão em produção.
      </ui-timeline-item>
    </ui-timeline>
  `,
};
