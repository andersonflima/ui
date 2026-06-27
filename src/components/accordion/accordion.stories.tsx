import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

const meta = {
  title: "Disclosure/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: { type: "single", children: null },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>O que é o design system?</AccordionTrigger>
        <AccordionContent>
          Um conjunto coeso de componentes reutilizáveis e acessíveis.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>É acessível?</AccordionTrigger>
        <AccordionContent>Sim, segue as práticas de acessibilidade do Radix.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Posso personalizar o tema?</AccordionTrigger>
        <AccordionContent>Sim, via variáveis CSS de design tokens.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
