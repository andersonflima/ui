import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Overlays/Command",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const items = [
  { label: "Novo arquivo", value: "new", group: "Arquivo", hint: "⌘N" },
  { label: "Abrir...", value: "open", group: "Arquivo", hint: "⌘O" },
  { label: "Alternar tema", value: "theme", group: "Aparência" },
];

export const Default: Story = {
  render: () => html`
    <ui-button @click=${() => (document.getElementById("cmd1") as any)?.show()}>
      Abrir (⌘K)
    </ui-button>
    <ui-command id="cmd1" .items=${items}></ui-command>
  `,
};
