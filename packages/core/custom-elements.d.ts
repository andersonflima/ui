// Tipos do entrypoint `@andespindola/ui-core/dist/components`.
// O `dist-custom-elements` do Stencil 4 não reexporta o namespace `Components`, mas os
// wrappers gerados pelo @stencil/react-output-target 1.x importam
// `import type { Components } from "@andespindola/ui-core/dist/components"`.
export * from "./dist/components/index";
export type { Components, JSX } from "./dist/types/components";
