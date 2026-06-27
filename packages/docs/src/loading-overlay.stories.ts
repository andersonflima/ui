import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = { title: "Feedback/LoadingOverlay" };

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div
      style="position:relative;width:18rem;height:10rem;border:1px solid var(--ui-border);border-radius:var(--ui-radius)"
    >
      <ui-loading-overlay ?visible=${true} label="Carregando…"></ui-loading-overlay>
    </div>
  `,
};
