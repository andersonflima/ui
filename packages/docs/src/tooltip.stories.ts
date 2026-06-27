import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = { title: "Overlays/Tooltip" };

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="padding:3rem;display:flex;justify-content:center">
      <ui-tooltip content="Dica útil">
        <ui-button>Passe o mouse</ui-button>
      </ui-tooltip>
    </div>
  `,
};

export const Posicoes: Story = {
  render: () => html`
    <div style="padding:3rem;display:flex;gap:1.5rem;flex-wrap:wrap;justify-content:center">
      ${["top", "right", "bottom", "left"].map(
        (p) => html`
          <ui-tooltip content=${`Posição ${p}`} placement=${p}>
            <ui-button variant="outline">${p}</ui-button>
          </ui-tooltip>
        `,
      )}
    </div>
  `,
};
