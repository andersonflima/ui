# andersonflima/ui

Design system com a identidade visual do portfólio
[andersonespindola.com](https://andersonespindola.com). O repositório é um monorepo
npm workspaces com duas linhas de produto:

| Pacote | Status | Descrição |
| --- | --- | --- |
| [`@andespindola/ui-core`](packages/core/README.md) | **atual** | Web Components (Stencil), base agnóstica de framework |
| [`@andespindola/ui-react`](packages/react/README.md) | **atual** | Wrappers React / Next.js gerados a partir do core |
| [`@andespindola/ui-angular`](packages/angular/README.md) | **atual** | Wrappers Angular gerados a partir do core |
| `@andespindola/ui` (raiz) | **legado** | Componentes React (Radix + Framer Motion), mantido só para correções |

Para projetos novos use `@andespindola/ui-core` com o wrapper do seu framework
(`@andespindola/ui-react` ou `@andespindola/ui-angular`). A documentação com exemplos
ao vivo fica em <https://andersonflima.github.io/ui/> (pacote privado `packages/site`) e o
catálogo visual (Storybook) dos Web Components em `packages/docs`.

```bash
npm install @andespindola/ui-react @andespindola/ui-core
```

```tsx
import "@andespindola/ui-core/styles.css";
import { UiButton } from "@andespindola/ui-react";

export const App = () => <UiButton variant="solid">Começar</UiButton>;
```

## Estrutura

```
packages/core     @andespindola/ui-core     Web Components (Stencil), fonte única
packages/react    @andespindola/ui-react    wrappers gerados pelo build do core
packages/angular  @andespindola/ui-angular  wrappers gerados pelo build do core
packages/docs     (privado) Storybook dos Web Components, publicado no Chromatic
packages/site     (privado) site de documentação (Astro + Starlight), GitHub Pages
src/              @andespindola/ui (legado) componentes React
```

## Desenvolvimento

Requer Node 22 (o mesmo do CI).

```bash
npm install
npm run lint                               # ESLint em todo o monorepo
npm run typecheck                          # tipos do pacote legado
npm run build -w @andespindola/ui-core     # gera também os wrappers React/Angular
npm test -w @andespindola/ui-core          # testes de spec dos Web Components
npm run test:run                           # Vitest: pacote legado + wrappers React
npm run build -w @andespindola/ui-react
npm run build -w @andespindola/ui-angular
npm run build -w @andespindola/ui-site     # site de documentação
```

O workflow `CI` (`.github/workflows/ci.yml`) roda esses passos em todo PR e em pushes
para `develop` e `main`.

## Versionamento e releases

Há dois esquemas de tag, um por linha de produto:

- `cross-framework-vX.Y.Z`: `@andespindola/ui-core`, `@andespindola/ui-react` e
  `@andespindola/ui-angular`, sempre na mesma versão. Enviar a tag dispara
  `.github/workflows/publish.yml`, que testa, builda e publica os três pacotes no npm via
  trusted publishing (OIDC, com proveniência).
- `vX.Y.Z`: pacote legado `@andespindola/ui` (publicação manual com `npm publish` na raiz).

As mudanças de cada versão ficam no [CHANGELOG](CHANGELOG.md).

## Pacote legado `@andespindola/ui`

Componentes React e design tokens com a identidade visual do portfólio —
acessíveis (base Radix UI), animados (Framer Motion) e prontos para temas **light** e
**dark**. Segue publicado, mas novas funcionalidades entram só nos pacotes
cross-framework acima.

### Instalação

```bash
npm install @andespindola/ui
```

Peer deps: `react >=18` e `react-dom >=18`.

### Uso

Importe o CSS uma vez na raiz da aplicação e envolva a árvore com o `ThemeProvider`:

```tsx
import "@andespindola/ui/styles.css";
import { ThemeProvider, Button, ThemeToggle } from "@andespindola/ui";

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <main className="ui-surface min-h-screen">
        <Button variant="solid">Começar</Button>
        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}
```

> Sem necessidade de configurar Tailwind no projeto consumidor — o CSS já vem compilado.

### Temas

O tema é controlado por uma classe (`.dark`) no elemento raiz, alternada pelo
`ThemeProvider`. Todos os componentes consomem **design tokens** via CSS variables
(`--ui-*`), então light/dark funcionam sem alteração de markup. Os tokens podem ser
sobrescritos pelo consumidor para customizar a identidade:

```css
:root {
  --ui-accent: #26d0ce;
  --ui-radius: 1rem;
}
```

Para usar só os tokens (sem componentes): `import "@andespindola/ui/theme.css"`.

### Componentes

- **Ações**: `Button`
- **Layout**: `Card`, `Section`, `Separator`
- **Formulários**: `Input`, `Textarea`, `Label`, `Field`, `Select`, `Checkbox`,
  `RadioGroup`, `Switch`, `Slider`
- **Overlays**: `Dialog` (modal), `Drawer`, `Tooltip`, `Popover`, `DropdownMenu`
- **Feedback**: `Toast`, `Badge`, `Avatar`, `Spinner`, `Skeleton`
- **Disclosure / navegação**: `Tabs`, `Accordion`
- **Animação**: `Reveal`, `MagneticLink`, `ScrollProgress` + presets em `motion`
- **Tema**: `ThemeProvider`, `useTheme`, `ThemeToggle`

### Storybook do pacote legado

```bash
npm run storybook         # dev server em http://localhost:6006
npm run build-storybook   # build estático em storybook-static/
```

## Licença

MIT © Anderson Espindola
