import "./styles/index.css";

// Utilitários
export { cn } from "./lib/cn";
export * from "./lib/motion";

// Providers / tema
export {
  ThemeProvider,
  useTheme,
  type Theme,
  type ThemePreference,
  type ThemeProviderProps,
} from "./providers/theme-provider";

// Componentes
export { Button, buttonVariants, type ButtonProps } from "./components/button/button";
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/card/card";
export { ThemeToggle, type ThemeToggleProps } from "./components/theme-toggle/theme-toggle";
