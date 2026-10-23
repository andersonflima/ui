import { newSpecPage } from "@stencil/core/testing";
import { UiInput } from "../ui-input";

describe("ui-input", () => {
  it("repassa props ao <input> nativo", async () => {
    const page = await newSpecPage({
      components: [UiInput],
      html: `<ui-input type="email" name="email" placeholder="voce@exemplo.com" invalid></ui-input>`,
    });
    const input = page.root!.shadowRoot!.querySelector("input")!;
    expect(input.getAttribute("type")).toBe("email");
    expect(input.getAttribute("name")).toBe("email");
    expect(input.getAttribute("placeholder")).toBe("voce@exemplo.com");
    expect(input.getAttribute("aria-invalid")).toBe("true");
  });

  it("emite uiInput ao digitar e atualiza value", async () => {
    const page = await newSpecPage({
      components: [UiInput],
      html: `<ui-input></ui-input>`,
    });
    const onInput = jest.fn();
    page.root!.addEventListener("uiInput", onInput);
    const input = page.root!.shadowRoot!.querySelector("input")!;
    input.value = "abc";
    input.dispatchEvent(new Event("input"));
    await page.waitForChanges();
    expect(page.root!.value).toBe("abc");
    expect(onInput.mock.calls[0][0].detail).toBe("abc");
  });

  it("clearable mostra o botão Limpar só com valor e limpa ao clicar", async () => {
    const page = await newSpecPage({
      components: [UiInput],
      html: `<ui-input clearable></ui-input>`,
    });
    expect(page.root!.shadowRoot!.querySelector("button.clear")).toBeNull();
    page.root!.value = "texto";
    await page.waitForChanges();
    const onChange = jest.fn();
    page.root!.addEventListener("uiChange", onChange);
    page.root!.shadowRoot!.querySelector<HTMLButtonElement>("button.clear")!.click();
    await page.waitForChanges();
    expect(page.root!.value).toBe("");
    expect(onChange.mock.calls[0][0].detail).toBe("");
    expect(page.root!.shadowRoot!.querySelector("button.clear")).toBeNull();
  });
});
