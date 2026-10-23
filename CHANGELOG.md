# Changelog

Este arquivo cobre as duas linhas de produto do repositório. O formato segue
[Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e as versões seguem
[SemVer](https://semver.org/lang/pt-BR/).

- **Cross-framework**: `@andespindola/ui-core`, `@andespindola/ui-react` e
  `@andespindola/ui-angular`, sempre na mesma versão. Tags `cross-framework-vX.Y.Z`.
- **Legado**: `@andespindola/ui` (pacote React da raiz). Tags `vX.Y.Z`.

## Cross-framework

### [Não publicado]

#### Adicionado

- Testes de spec (Stencil) para `ui-button`, `ui-badge`, `ui-alert`, `ui-switch`,
  `ui-checkbox`, `ui-progress` e `ui-input`.
- Teste de fumaça dos wrappers React (renderização, props e eventos `on*`).
- `@andespindola/ui-core` exporta `./dist/components` com os tipos `Components`/`JSX`,
  usados pelos wrappers React gerados.
- Campos `repository` (com `directory`), `homepage`, `bugs` e `engines` nos três pacotes.

#### Alterado

- `@andespindola/ui-react` passa a usar `@stencil/react-output-target` 1.x. Remove do
  pacote publicado a cadeia vulnerável `ts-morph` 22 → `@ts-morph/common` → `fast-glob`
  → `micromatch` → `braces`. Os tipos de eventos dos wrappers ficam mais precisos
  (`Ui*CustomEvent`) e os tipos `Ui*Events` passam a ser exportados.
- Requer publicar `ui-core` e `ui-react` juntos: os tipos do novo `ui-react` importam
  `@andespindola/ui-core/dist/components`.

### [0.4.1] - 2026-06-27

- Corrigido: alinhamento vertical do `ui-button` (host `inline-flex`; o tamanho `sm`
  ficava 8px acima).

### [0.4.0] - 2026-06-27

- Adicionado: Command palette (`ui-command`, ⌘K), `ui-carousel`, `ui-timeline` e
  presets de tema.

### [0.3.0] - 2026-06-27

- Adicionado: `ui-table`, `ui-navbar`, `ui-combobox`, `ui-date-picker`,
  `ui-progress-circular`, `ui-rating` e `ui-file-upload`.
- Corrigido: variante `ghost` do botão.

### [0.2.0] - 2026-06-27

- Adicionado: primitivas de layout, novos componentes e extensões.

### [0.1.1] - 2026-06-27

- Corrigido: polish e contraste de vários Web Components (tooltip, card, progress etc.).

### [0.1.0] - 2026-06-27

- Primeira versão: monorepo Stencil com `ui-core`, `ui-react` e `ui-angular`
  (33 componentes).

## Legado (`@andespindola/ui`)

### [0.1.1] - 2026-06-27

- Adicionado: componentes de loading (`Progress`, `Button` com `loading`,
  `LoadingOverlay`).
- Build: banner `"use client"` no bundle, para o App Router do Next.js.

### [0.1.0] - 2026-06-27

- Primeira versão pública: componentes React acessíveis (Radix UI) e animados
  (Framer Motion), com temas light/dark.

## Infraestrutura do repositório (não publicado)

- CI (`.github/workflows/ci.yml`) com lint, typecheck, testes, builds e `npm audit` de
  produção em todo PR e em pushes para `develop`/`main`.
- Workflow de publicação por tag `cross-framework-v*` com trusted publishing do npm.
- ESLint (flat config, typescript-eslint) para o monorepo.
- Site de documentação migrado para Astro 7 e Starlight 0.42.
- `chromaui/action` fixado em `v18`.
