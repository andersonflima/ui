import { newSpecPage } from "@stencil/core/testing";
import { UiProgress } from "../ui-progress";

describe("ui-progress", () => {
  it("sem value fica indeterminado e sem aria-valuenow", async () => {
    const page = await newSpecPage({
      components: [UiProgress],
      html: `<ui-progress></ui-progress>`,
    });
    expect(page.root!.getAttribute("role")).toBe("progressbar");
    expect(page.root!.hasAttribute("aria-valuenow")).toBe(false);
    expect(page.root!.shadowRoot!.querySelector(".indicator.indeterminate")).not.toBeNull();
  });

  it("com value calcula a largura e expõe os atributos ARIA", async () => {
    const page = await newSpecPage({
      components: [UiProgress],
      html: `<ui-progress value="25" max="50"></ui-progress>`,
    });
    expect(page.root!.getAttribute("aria-valuenow")).toBe("25");
    expect(page.root!.getAttribute("aria-valuemin")).toBe("0");
    expect(page.root!.getAttribute("aria-valuemax")).toBe("50");
    const indicator = page.root!.shadowRoot!.querySelector<HTMLElement>(".indicator")!;
    expect(indicator.classList.contains("indeterminate")).toBe(false);
    expect(indicator.style.width).toBe("50%");
  });

  it("limita o valor ao intervalo [0, max]", async () => {
    const page = await newSpecPage({
      components: [UiProgress],
      html: `<ui-progress value="250"></ui-progress>`,
    });
    const indicator = page.root!.shadowRoot!.querySelector<HTMLElement>(".indicator")!;
    expect(indicator.style.width).toBe("100%");
  });
});
