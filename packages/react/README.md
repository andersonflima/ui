# @andespindola/ui-react

Wrappers **React** (e **Next.js**) para os Web Components do design system
[`@andespindola/ui-core`](https://www.npmjs.com/package/@andespindola/ui-core).

## Instalação

```bash
npm install @andespindola/ui-react @andespindola/ui-core
```

Peer deps: `react >=18`, `react-dom >=18`.

## Uso

```tsx
import "@andespindola/ui-core/styles.css";
import { UiButton, UiCard, UiSwitch } from "@andespindola/ui-react";

export function App() {
  return (
    <UiCard>
      <UiButton variant="solid">Começar</UiButton>
      <UiSwitch checked />
    </UiCard>
  );
}
```

> Os proxies já marcam os componentes como Client Components (`"use client"`), compatível
> com o App Router do Next.js.

## Componentes (lote inicial)

`UiButton`, `UiCard`, `UiBadge`, `UiInput`, `UiSwitch`, `UiDialog`.

## Licença

MIT © Anderson Espindola
