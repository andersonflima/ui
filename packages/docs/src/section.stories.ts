import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Layout/Section",
  parameters: { layout: "fullscreen" },
  render: (args) =>
    html`<ui-section
      eyebrow=${args.eyebrow}
      heading=${args.heading}
      description=${args.description}
      >${args.content}</ui-section
    >`,
  args: {
    eyebrow: "Design System",
    heading: "Seção de exemplo",
    description: "Um subtítulo.",
    content: "Conteúdo",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const SemEyebrow: Story = {
  args: { eyebrow: "", heading: "Apenas título", description: "Sem texto acima." },
};
