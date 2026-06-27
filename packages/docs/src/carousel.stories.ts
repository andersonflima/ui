import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Dados/Carousel",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const slides = [1, 2, 3].map(
  (n) => html`
    <div
      style="height:120px;display:flex;align-items:center;justify-content:center;background:var(--ui-chip);font-size:1.5rem"
    >
      Slide ${n}
    </div>
  `,
);

export const Default: Story = {
  render: () => html`<ui-carousel style="width:340px">${slides}</ui-carousel>`,
};

export const Loop: Story = {
  render: () =>
    html`<ui-carousel style="width:340px" ?loop=${true}>${slides}</ui-carousel>`,
};
