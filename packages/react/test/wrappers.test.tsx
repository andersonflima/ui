import { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, it, vi } from "vitest";
import { UiButton, UiSwitch } from "../src";

describe("@andespindola/ui-react (wrappers gerados)", () => {
  it("renderiza o custom element e registra a tag", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    await act(async () => {
      createRoot(container).render(<UiButton variant="solid">Salvar</UiButton>);
    });
    const el = container.querySelector("ui-button")!;
    expect(el).not.toBeNull();
    expect(customElements.get("ui-button")).toBeDefined();
    expect(el.textContent).toBe("Salvar");
    expect((el as HTMLElement & { variant: string }).variant).toBe("solid");
  });

  it("mapeia eventos customizados para props on*", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const onUiChange = vi.fn();
    await act(async () => {
      createRoot(container).render(<UiSwitch onUiChange={onUiChange} />);
    });
    const el = container.querySelector("ui-switch")!;
    el.dispatchEvent(new CustomEvent("uiChange", { detail: true }));
    expect(onUiChange).toHaveBeenCalledTimes(1);
    expect(onUiChange.mock.calls[0][0].detail).toBe(true);
  });
});
