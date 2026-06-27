import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar, AvatarFallback } from "./components/avatar/avatar";
import { Badge } from "./components/badge/badge";
import { Checkbox } from "./components/checkbox/checkbox";
import { Spinner } from "./components/spinner/spinner";
import { Switch } from "./components/switch/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tabs/tabs";

describe("componentes — render e roles acessíveis", () => {
  it("Badge renderiza o conteúdo", () => {
    render(<Badge variant="success">ativo</Badge>);
    expect(screen.getByText("ativo")).toBeInTheDocument();
  });

  it("Avatar mostra o fallback", () => {
    render(
      <Avatar>
        <AvatarFallback>AE</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("AE")).toBeInTheDocument();
  });

  it("Checkbox expõe role checkbox", () => {
    render(<Checkbox aria-label="aceito os termos" />);
    expect(screen.getByRole("checkbox", { name: "aceito os termos" })).toBeInTheDocument();
  });

  it("Switch expõe role switch", () => {
    render(<Switch aria-label="notificações" />);
    expect(screen.getByRole("switch", { name: "notificações" })).toBeInTheDocument();
  });

  it("Spinner expõe role status", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("Tabs renderiza abas com role tab e mostra a aba ativa", () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">Aba A</TabsTrigger>
          <TabsTrigger value="b">Aba B</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Conteúdo A</TabsContent>
        <TabsContent value="b">Conteúdo B</TabsContent>
      </Tabs>,
    );
    expect(screen.getAllByRole("tab")).toHaveLength(2);
    expect(screen.getByText("Conteúdo A")).toBeInTheDocument();
  });
});
