"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  startTransition,
} from "react";

const STORAGE_KEY = "sc-theme";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

function persistTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  try {
    document.cookie = `${STORAGE_KEY}=${theme}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  } catch {
    /* ignore */
  }
}

function readPreferredTheme(fallback) {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  const fromDom = document.documentElement.getAttribute("data-theme");
  if (fromDom === "light" || fromDom === "dark") return fromDom;
  return fallback === "light" || fallback === "dark" ? fallback : "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
  document.body.style.colorScheme = theme;
}

export function ThemeProvider({ children, defaultTheme = "dark" }) {
  const initial =
    defaultTheme === "light" || defaultTheme === "dark" ? defaultTheme : "dark";
  const [theme, setThemeState] = useState(initial);

  useLayoutEffect(() => {
    const preferred = readPreferredTheme(initial);
    applyTheme(preferred);
    persistTheme(preferred);
    startTransition(() => {
      setThemeState(preferred);
    });
  }, [initial]);

  const setTheme = useCallback((next) => {
    const value = next === "light" ? "light" : "dark";
    setThemeState(value);
    applyTheme(value);
    persistTheme(value);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
