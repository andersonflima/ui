import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Tema/Presets",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="display:flex;gap:.75rem;flex-wrap:wrap">
      ${["", "theme-violet", "theme-emerald", "theme-amber", "theme-rose", "theme-blue"].map(
        (t) => html`
          <div
            class="dark ${t}"
            style="display:flex;gap:.5rem;align-items:center;padding:.75rem;border-radius:12px"
          >
            <ui-button variant="solid" size="sm">${t.replace("theme-", "") || "cyan"}</ui-button>
            <ui-badge variant="solid">badge</ui-badge>
            <ui-switch checked></ui-switch>
          </div>
        `,
      )}
    </div>
  `,
};
