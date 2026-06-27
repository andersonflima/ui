import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/Skeleton",
  render: () =>
    html`<div style="display:flex;flex-direction:column;gap:.75rem;width:18rem">
      <ui-skeleton style="height:3rem;width:3rem;border-radius:9999px"></ui-skeleton>
      <ui-skeleton style="height:1rem;width:100%"></ui-skeleton>
      <ui-skeleton style="height:1rem;width:80%"></ui-skeleton>
      <ui-skeleton style="height:1rem;width:60%"></ui-skeleton>
    </div>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
