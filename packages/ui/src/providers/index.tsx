"use client";

import { useState, ReactNode, useEffect, createContext } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider } from "next-themes";

type ThemeMode = "light" | "dark";

export interface RootProviderProps {
  theme?: Partial<ThemeProviderProps> & {
    enabled?: boolean;
  };
  children: ReactNode;
}

export interface ThemeContextProps {
  colors: { [key: string]: string };
  themeMode: ThemeMode;
  setColors: (colors: { [key: string]: string }) => void;
  setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const RuruProvider = ({
  children,
  theme: { enabled = true, ...theme } = {},
}: RootProviderProps) => {
  const [colors, setColors] = useState<{ [key: string]: string }>({});
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  useEffect(() => {
    // Load initial settings from localStorage or other sources if needed
    const savedColors = localStorage.getItem("colors");
    const savedThemeMode = localStorage.getItem("themeMode") as ThemeMode;

    if (savedColors) setColors(JSON.parse(savedColors));
    if (savedThemeMode) setThemeMode(savedThemeMode);
  }, []);

  useEffect(() => {
    // Save settings to localStorage or other sources if needed
    localStorage.setItem("colors", JSON.stringify(colors));
    localStorage.setItem("themeMode", themeMode);
  }, [colors, themeMode]);

  const contextValue = {
    colors,
    themeMode,
    setColors,
    setThemeMode,
  };

  if (enabled) {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        {...theme}
      >
        <ThemeContext.Provider value={contextValue}>
          <DirectionProvider dir="ltr">{children}</DirectionProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <DirectionProvider dir="ltr">{children}</DirectionProvider>
    </ThemeContext.Provider>
  );
};

export { useTheme } from "../contexts/theme";
