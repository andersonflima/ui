import { newSpecPage } from "@stencil/core/testing";
import { UiAlert } from "../ui-alert";

describe("ui-alert", () => {
  it("renderiza role=alert com título e variante", async () => {
    const page = await newSpecPage({
      components: [UiAlert],
      html: `<ui-alert variant="warning" heading="Atenção">Verifique os dados.</ui-alert>`,
    });
    const shadow = page.root!.shadowRoot!;
    const alert = shadow.querySelector('[role="alert"]')!;
    expect(alert).not.toBeNull();
    expect(alert.classList.contains("variant-warning")).toBe(true);
    expect(shadow.querySelector(".heading")!.textContent).toBe("Atenção");
    expect(shadow.querySelector("button.close")).toBeNull();
  });

  it("dismissible fecha o alerta e emite uiClose", async () => {
    const page = await newSpecPage({
      components: [UiAlert],
      html: `<ui-alert dismissible>Mensagem</ui-alert>`,
    });
    const onClose = jest.fn();
    page.root!.addEventListener("uiClose", onClose);
    page.root!.shadowRoot!.querySelector<HTMLButtonElement>("button.close")!.click();
    await page.waitForChanges();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(page.root!.shadowRoot!.querySelector('[role="alert"]')).toBeNull();
  });
});
