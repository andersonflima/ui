# @andespindola/ui-core

Web Components (design system) com a identidade visual do portfólio
[andersonespindola.com](https://andersonespindola.com). Base **agnóstica de framework** —
funciona em qualquer app (vanilla, React, Angular, Vue, etc.). Para React/Next e Angular,
prefira os wrappers dedicados (`@andespindola/ui-react`, `@andespindola/ui-angular`).

## Instalação

```bash
npm install @andespindola/ui-core
```

## Uso (vanilla / qualquer framework)

```ts
import { defineCustomElements } from "@andespindola/ui-core/loader";
import "@andespindola/ui-core/styles.css"; // tokens + tema light/dark

defineCustomElements();
```

```html
<ui-button variant="solid">Começar</ui-button>
<ui-switch checked></ui-switch>
```

## Tema

Os tokens vêm em CSS variables (`--ui-*`) e penetram o shadow DOM. Tema escuro via classe
`.dark` no elemento raiz:

```html
<html class="dark">
  …
</html>
```

## Componentes (lote inicial)

`ui-button`, `ui-card`, `ui-badge`, `ui-input`, `ui-switch`, `ui-dialog`.

## Licença

MIT © Anderson Espindola
