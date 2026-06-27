# @andespindola/ui-angular

Wrappers **Angular** (componentes standalone) para os Web Components do design system
[`@andespindola/ui-core`](https://www.npmjs.com/package/@andespindola/ui-core).

## Instalação

```bash
npm install @andespindola/ui-angular @andespindola/ui-core
```

Peer deps: `@angular/core >=16`, `@angular/common >=16`.

## Uso

Importe o CSS de tokens uma vez (ex.: em `styles.css` do app):

```css
@import "@andespindola/ui-core/styles.css";
```

Os componentes são **standalone** — importe direto:

```ts
import { Component } from "@angular/core";
import { UiButton, UiCard, UiSwitch } from "@andespindola/ui-angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [UiButton, UiCard, UiSwitch],
  template: `
    <ui-card>
      <ui-button variant="solid">Começar</ui-button>
      <ui-switch checked="true"></ui-switch>
    </ui-card>
  `,
})
export class AppComponent {}
```

> Os Web Components são registrados automaticamente ao importar o pacote (guardado para SSR).

## Componentes (lote inicial)

`UiButton`, `UiCard`, `UiBadge`, `UiInput`, `UiSwitch`, `UiDialog`.

## Licença

MIT © Anderson Espindola
