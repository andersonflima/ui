import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://andersonflima.github.io",
  base: "/ui",
  integrations: [
    starlight({
      title: "@andespindola/ui",
      description:
        "Design system cross-framework (React, Next e Angular) a partir de uma fonte única de Web Components.",
      customCss: ["@andespindola/ui-core/styles.css", "./src/styles/custom.css"],
      components: {
        Head: "./src/components/Head.astro",
      },
      social: {
        github: "https://github.com/andersonflima/ui",
      },
      sidebar: [
        {
          label: "Começar",
          items: [
            { label: "Instalação", slug: "instalacao" },
            { label: "Temas", slug: "temas" },
          ],
        },
        {
          label: "Componentes",
          autogenerate: { directory: "componentes" },
        },
      ],
    }),
  ],
});
