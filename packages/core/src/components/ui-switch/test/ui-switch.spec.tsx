import { newSpecPage } from "@stencil/core/testing";
import { UiSwitch } from "../ui-switch";

describe("ui-switch", () => {
  it("alterna com clique, reflete checked e emite uiChange", async () => {
    const page = await newSpecPage({
      components: [UiSwitch],
      html: `<ui-switch></ui-switch>`,
    });
    const button = page.root!.shadowRoot!.querySelector<HTMLButtonElement>('[role="switch"]')!;
    expect(button.getAttribute("aria-checked")).toBe("false");
    const onChange = jest.fn();
    page.root!.addEventListener("uiChange", onChange);
    button.click();
    await page.waitForChanges();
    expect(button.getAttribute("aria-checked")).toBe("true");
    expect(page.root!.hasAttribute("checked")).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].detail).toBe(true);
  });

  it("alterna com as teclas Espaço e Enter", async () => {
    const page = await newSpecPage({
      components: [UiSwitch],
      html: `<ui-switch></ui-switch>`,
    });
    const button = page.root!.shadowRoot!.querySelector('[role="switch"]')!;
    button.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
    await page.waitForChanges();
    expect(page.root!.checked).toBe(true);
    button.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    await page.waitForChanges();
    expect(page.root!.checked).toBe(false);
  });

  it("disabled não alterna nem emite", async () => {
    const page = await newSpecPage({
      components: [UiSwitch],
      html: `<ui-switch disabled></ui-switch>`,
    });
    const onChange = jest.fn();
    page.root!.addEventListener("uiChange", onChange);
    const button = page.root!.shadowRoot!.querySelector('[role="switch"]')!;
    button.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
    await page.waitForChanges();
    expect(page.root!.checked).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
  });
});
