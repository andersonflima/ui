import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Animação/Reveal",
};

export default meta;
type Story = StoryObj;

// A animação dispara ao entrar no viewport (IntersectionObserver).
// Cada item revela com um atraso crescente (delay = i * 100ms).
export const Default: Story = {
  render: () =>
    html`<div style="display:flex;flex-direction:column;gap:1rem">
      ${[0, 1, 2].map(
        (i) => html`<ui-reveal delay=${i * 100}>
          <ui-card>
            <h3 style="margin:0 0 .5rem">Item ${i + 1}</h3>
            <p style="margin:0">Conteúdo revelado ao entrar no viewport.</p>
          </ui-card>
        </ui-reveal>`,
      )}
    </div>`,
};
