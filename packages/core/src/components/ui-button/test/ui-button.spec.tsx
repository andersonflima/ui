import { newSpecPage } from "@stencil/core/testing";
import { UiButton } from "../ui-button";

describe("ui-button", () => {
  it("renderiza um <button> nativo com variante e tamanho padrão", async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button>Salvar</ui-button>`,
    });
    const button = page.root!.shadowRoot!.querySelector("button")!;
    expect(button).not.toBeNull();
    expect(button.getAttribute("type")).toBe("button");
    expect(button.classList.contains("variant-default")).toBe(true);
    expect(button.classList.contains("size-md")).toBe(true);
    expect(button.hasAttribute("disabled")).toBe(false);
    expect(page.root!.textContent).toBe("Salvar");
  });

  it("aplica variant, size e type informados", async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button variant="destructive" size="lg" type="submit">Excluir</ui-button>`,
    });
    const button = page.root!.shadowRoot!.querySelector("button")!;
    expect(button.classList.contains("variant-destructive")).toBe(true);
    expect(button.classList.contains("size-lg")).toBe(true);
    expect(button.getAttribute("type")).toBe("submit");
  });

  it("loading desabilita, marca aria-busy e exibe spinner", async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button loading>Enviando</ui-button>`,
    });
    const button = page.root!.shadowRoot!.querySelector("button")!;
    expect(button.hasAttribute("disabled")).toBe(true);
    expect(button.getAttribute("aria-busy")).toBe("true");
    expect(page.root!.shadowRoot!.querySelector(".spinner")).not.toBeNull();
  });

  it("reflete a prop full como atributo", async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button>Ok</ui-button>`,
    });
    page.root!.full = true;
    await page.waitForChanges();
    expect(page.root!.hasAttribute("full")).toBe(true);
  });
});
