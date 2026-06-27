import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Garante isolamento entre testes (desmonta o DOM renderizado após cada um).
afterEach(() => {
  cleanup();
});
