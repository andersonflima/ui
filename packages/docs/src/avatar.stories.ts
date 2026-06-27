import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/Avatar",
  render: (args) =>
    html`<ui-avatar src=${args.src} alt=${args.alt} fallback=${args.fallback}></ui-avatar>`,
  args: { src: "https://i.pravatar.cc/80", alt: "user", fallback: "AE" },
};

export default meta;
type Story = StoryObj;

export const ComImagem: Story = {
  render: () => html`<ui-avatar src="https://i.pravatar.cc/80" alt="user"></ui-avatar>`,
};

export const Fallback: Story = {
  render: () => html`<ui-avatar fallback="AE"></ui-avatar>`,
};
