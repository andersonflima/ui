import * as React from "react";

export type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";

type ThemeContextValue = {
  /** Preferência escolhida (pode ser "system"). */
  theme: ThemePreference;
  /** Tema efetivamente aplicado ("light" ou "dark"). */
  resolvedTheme: Theme;
  setTheme: (theme: ThemePreference) => void;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const isBrowser = typeof window !== "undefined";

function systemTheme(): Theme {
  if (!isBrowser) return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolve(theme: ThemePreference): Theme {
  return theme === "system" ? systemTheme() : theme;
}

export type ThemeProviderProps = {
  children: React.ReactNode;
  /** Preferência inicial. Default: "system". */
  defaultTheme?: ThemePreference;
  /** Chave de persistência no localStorage. Default: "ui-theme". */
  storageKey?: string;
  /** Classe aplicada no elemento raiz para o tema escuro. Default: "dark". */
  darkClass?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  darkClass = "dark",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<ThemePreference>(() => {
    if (!isBrowser) return defaultTheme;
    return (window.localStorage.getItem(storageKey) as ThemePreference | null) ?? defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>(() => resolve(theme));

  const applyTheme = React.useCallback(
    (next: ThemePreference) => {
      const effective = resolve(next);
      setResolvedTheme(effective);
      if (isBrowser) {
        const root = document.documentElement;
        root.classList.toggle(darkClass, effective === "dark");
        root.style.colorScheme = effective;
      }
    },
    [darkClass],
  );

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  React.useEffect(() => {
    if (!isBrowser || theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => applyTheme("system");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [theme, applyTheme]);

  const setTheme = React.useCallback(
    (next: ThemePreference) => {
      if (isBrowser) window.localStorage.setItem(storageKey, next);
      setThemeState(next);
    },
    [storageKey],
  );

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
    [theme, resolvedTheme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de <ThemeProvider>.");
  }
  return context;
}
