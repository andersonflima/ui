import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      // O export map do @lit/react serve a build "node" (NODE_MODE, sem
      // useLayoutEffect: props/eventos não chegam ao elemento) quando resolvido
      // pelo Node. Os testes rodam em jsdom, então usam a build de browser.
      "@lit/react": resolve(__dirname, "node_modules/@lit/react/index.js"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: false,
    include: ["src/**/*.test.{ts,tsx}", "packages/react/test/**/*.test.{ts,tsx}"],
    server: {
      deps: {
        // Inline para que o alias acima valha também dentro do runtime dos wrappers.
        inline: ["@stencil/react-output-target", "@lit/react"],
      },
    },
  },
});
