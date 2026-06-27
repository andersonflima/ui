import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Disclosure/Accordion",
  render: () =>
    html`<ui-accordion>
      <ui-accordion-item heading="Seção 1" ?open=${true}>Conteúdo 1</ui-accordion-item>
      <ui-accordion-item heading="Seção 2">Conteúdo 2</ui-accordion-item>
    </ui-accordion>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const TodasFechadas: Story = {
  render: () =>
    html`<ui-accordion>
      <ui-accordion-item heading="Seção 1">Conteúdo 1</ui-accordion-item>
      <ui-accordion-item heading="Seção 2">Conteúdo 2</ui-accordion-item>
      <ui-accordion-item heading="Seção 3">Conteúdo 3</ui-accordion-item>
    </ui-accordion>`,
};
