import type { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import { angularOutputTarget } from "@stencil/angular-output-target";

export const config: Config = {
  namespace: "uikit",
  globalStyle: "src/global/app.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
      externalRuntime: false,
    },
    { type: "docs-readme" },
    reactOutputTarget({
      outDir: "../react/src",
    }),
    angularOutputTarget({
      componentCorePackage: "@andespindola/ui-core",
      directivesProxyFile: "../angular/src/lib/stencil-generated/components.ts",
      directivesArrayFile: "../angular/src/lib/stencil-generated/index.ts",
      outputType: "component",
    }),
  ],
  testing: {
    browserHeadless: true,
  },
};
