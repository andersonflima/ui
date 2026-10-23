import { newSpecPage } from "@stencil/core/testing";
import { UiCheckbox } from "../ui-checkbox";

describe("ui-checkbox", () => {
  it("expõe role=checkbox e alterna aria-checked ao clicar", async () => {
    const page = await newSpecPage({
      components: [UiCheckbox],
      html: `<ui-checkbox name="aceite" value="sim"></ui-checkbox>`,
    });
    const box = page.root!.shadowRoot!.querySelector<HTMLButtonElement>('[role="checkbox"]')!;
    expect(box.getAttribute("aria-checked")).toBe("false");
    const onChange = jest.fn();
    page.root!.addEventListener("uiChange", onChange);
    box.click();
    await page.waitForChanges();
    expect(box.getAttribute("aria-checked")).toBe("true");
    expect(page.root!.hasAttribute("checked")).toBe(true);
    expect(onChange.mock.calls[0][0].detail).toBe(true);
  });

  it("checked inicial é respeitado e disabled bloqueia a troca", async () => {
    const page = await newSpecPage({
      components: [UiCheckbox],
      html: `<ui-checkbox checked disabled></ui-checkbox>`,
    });
    const box = page.root!.shadowRoot!.querySelector('[role="checkbox"]')!;
    expect(box.getAttribute("aria-checked")).toBe("true");
    expect(box.hasAttribute("disabled")).toBe(true);
    box.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    await page.waitForChanges();
    expect(page.root!.checked).toBe(true);
  });
});
