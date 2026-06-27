import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Layout/Card",
  render: () =>
    html`<ui-card>
      <h3 slot="title">Plano Pro</h3>
      <p slot="description">Tudo que você precisa para começar.</p>
      <ui-button variant="solid">Assinar</ui-button>
    </ui-card>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
