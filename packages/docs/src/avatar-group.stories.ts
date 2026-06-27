import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Feedback/AvatarGroup",
  tags: ["autodocs"],
  render: () =>
    html`<ui-avatar-group>
      <ui-avatar fallback="AE" status="online"></ui-avatar>
      <ui-avatar fallback="BL"></ui-avatar>
      <ui-avatar fallback="CM"></ui-avatar>
    </ui-avatar-group>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Quatro: Story = {
  render: () =>
    html`<ui-avatar-group>
      <ui-avatar fallback="AE" status="online"></ui-avatar>
      <ui-avatar fallback="BL" status="busy"></ui-avatar>
      <ui-avatar fallback="CM"></ui-avatar>
      <ui-avatar fallback="DF"></ui-avatar>
    </ui-avatar-group>`,
};
