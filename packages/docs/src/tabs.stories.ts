import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const items = [
  { label: "Conta", value: "a" },
  { label: "Senha", value: "b" },
];

const meta: Meta = {
  title: "Disclosure/Tabs",
  render: () =>
    html`<ui-tabs .items=${items} value="a">
      <div slot="a">Painel da conta</div>
      <div slot="b">Painel de senha</div>
    </ui-tabs>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const SegundaAtiva: Story = {
  render: () =>
    html`<ui-tabs .items=${items} value="b">
      <div slot="a">Painel da conta</div>
      <div slot="b">Painel de senha</div>
    </ui-tabs>`,
};
