import { resolve } from "node:path";
import { copyFile } from "node:fs/promises";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// Copia os tokens isolados (theme.css) para o dist, permitindo importar só o tema.
function copyThemeCss() {
  return {
    name: "copy-theme-css",
    async closeBundle() {
      await copyFile(
        resolve(__dirname, "src/styles/theme.css"),
        resolve(__dirname, "dist/theme.css"),
      );
    },
  };
}

export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({ include: ["src"], exclude: ["**/*.test.*", "**/*.stories.*"], rollupTypes: true }),
    copyThemeCss(),
  ],
  build: {
    target: "es2020",
    sourcemap: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format: string) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      // Externaliza qualquer dependência (react, radix, framer-motion, etc.).
      external: (id: string) =>
        !id.startsWith(".") && !id.startsWith("/") && !id.startsWith("@/"),
      output: {
        assetFileNames: "style.css",
      },
    },
  },
});
