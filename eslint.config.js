// @ts-check
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // Artefatos de build e arquivos gerados pelo Stencil (React/Angular/types).
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/storybook-static/**",
      "**/.astro/**",
      "**/.stencil/**",
      "**/www/**",
      "packages/core/loader/**",
      "packages/core/src/components.d.ts",
      "packages/react/src/**",
      "packages/angular/src/lib/stencil-generated/**",
      "packages/angular/dist/**",
      "coverage/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    // Pacote React legado (@andespindola/ui).
    files: ["src/**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: { ...reactHooks.configs.recommended.rules },
  },
  {
    // Web Components Stencil: o JSX usa a factory `h`, que o ESLint não enxerga
    // como uso da importação.
    files: ["packages/core/src/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^(_|h$)" },
      ],
    },
  },
  {
    files: ["packages/core/src/**/*.spec.{ts,tsx}"],
    languageOptions: { globals: { ...globals.jest } },
  },
  {
    files: ["**/*.{js,cjs,mjs}", "*.config.ts", "**/*.config.{ts,mjs}"],
    languageOptions: { globals: { ...globals.node } },
  },
);
