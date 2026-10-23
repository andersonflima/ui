import { newSpecPage } from "@stencil/core/testing";
import { UiBadge } from "../ui-badge";

describe("ui-badge", () => {
  it("renderiza a variante padrão sem dot nem botão de remover", async () => {
    const page = await newSpecPage({
      components: [UiBadge],
      html: `<ui-badge>Novo</ui-badge>`,
    });
    const shadow = page.root!.shadowRoot!;
    expect(shadow.querySelector(".badge.variant-default")).not.toBeNull();
    expect(shadow.querySelector(".dot")).toBeNull();
    expect(shadow.querySelector("button.remove")).toBeNull();
  });

  it("removable emite uiRemove ao clicar no botão", async () => {
    const page = await newSpecPage({
      components: [UiBadge],
      html: `<ui-badge variant="success" dot removable>Ativo</ui-badge>`,
    });
    const shadow = page.root!.shadowRoot!;
    expect(shadow.querySelector(".badge.variant-success")).not.toBeNull();
    expect(shadow.querySelector(".dot")).not.toBeNull();
    const onRemove = jest.fn();
    page.root!.addEventListener("uiRemove", onRemove);
    const remove = shadow.querySelector<HTMLButtonElement>("button.remove")!;
    expect(remove.getAttribute("aria-label")).toBe("Remover");
    remove.click();
    await page.waitForChanges();
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
