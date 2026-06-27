# @andespindola/ui

Componentes React e design tokens com a identidade visual do portfólio
[andersonespindola.com](https://andersonespindola.com) — acessíveis (base Radix UI),
animados (Framer Motion) e prontos para temas **light** e **dark**.

## Instalação

```bash
npm install @andespindola/ui
```

Peer deps: `react >=18` e `react-dom >=18`.

## Uso

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

## Temas

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

## Componentes

- **Ações**: `Button`
- **Layout**: `Card`, `Section`, `Separator`
- **Formulários**: `Input`, `Textarea`, `Label`, `Field`, `Select`, `Checkbox`,
  `RadioGroup`, `Switch`, `Slider`
- **Overlays**: `Dialog` (modal), `Drawer`, `Tooltip`, `Popover`, `DropdownMenu`
- **Feedback**: `Toast`, `Badge`, `Avatar`, `Spinner`, `Skeleton`
- **Disclosure / navegação**: `Tabs`, `Accordion`
- **Animação**: `Reveal`, `MagneticLink`, `ScrollProgress` + presets em `motion`
- **Tema**: `ThemeProvider`, `useTheme`, `ThemeToggle`

## Documentação (Storybook)

Catálogo visual interativo de todos os componentes, com toggle de tema
**light/dark** e checagem de acessibilidade (addon a11y):

```bash
npm run storybook         # dev server em http://localhost:6006
npm run build-storybook   # build estático em storybook-static/
```

## Desenvolvimento

```bash
npm install
npm run build       # gera dist/ (ESM + CJS + types + style.css)
npm run test:run    # testes
npm run typecheck
npm run storybook   # catálogo de componentes
```

## Licença

MIT © Anderson Espindola
