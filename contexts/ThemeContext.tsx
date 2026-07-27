"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext =
  createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] =
    useState<Theme>("light");

  useEffect(() => {
    const saved =
      localStorage.getItem("theme") as Theme;

    if (saved) {
      setThemeState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [theme]);

  function setTheme(theme: Theme) {
    setThemeState(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context)
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );

  return context;
}