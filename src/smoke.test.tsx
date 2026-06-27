import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Checkbox,
  Field,
  Input,
  Switch,
  ThemeProvider,
  ThemeToggle,
} from "./index";

function renderWithTheme(ui: React.ReactNode) {
  return render(<ThemeProvider defaultTheme="dark">{ui}</ThemeProvider>);
}

describe("smoke", () => {
  it("renderiza componentes básicos dentro do ThemeProvider", () => {
    renderWithTheme(
      <Card>
        <CardContent>
          <Button>Ação</Button>
          <Badge variant="solid">novo</Badge>
          <Field label="Email" htmlFor="email">
            <Input id="email" placeholder="voce@exemplo.com" />
          </Field>
          <Checkbox aria-label="aceito" />
          <Switch aria-label="ativar" />
          <ThemeToggle />
        </CardContent>
      </Card>,
    );

    expect(screen.getByRole("button", { name: "Ação" })).toBeInTheDocument();
    expect(screen.getByText("novo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("voce@exemplo.com")).toBeInTheDocument();
  });

  it("aplica a classe dark no elemento raiz", () => {
    renderWithTheme(<Button>x</Button>);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
