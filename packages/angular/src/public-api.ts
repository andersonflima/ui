import { defineCustomElements } from "@andespindola/ui-core/loader";

// Registra os Web Components no navegador (guardado para SSR/Angular Universal).
if (typeof window !== "undefined") {
  defineCustomElements();
}

// Componentes standalone (Angular 16+). Importe diretamente no `imports` do seu
// componente/standalone ou NgModule. Ex.: imports: [UiButton, UiCard]
export * from "./lib/stencil-generated/components";
export { DIRECTIVES } from "./lib/stencil-generated";
