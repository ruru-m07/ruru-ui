"use client";

import { RuruThemeProviderProps } from "@/interface/RuruThemeProviderProps";
import { ThemeProvider } from "next-themes";
import React from "react";

/**
 * A wrapper component to provide theme context using `next-themes`.
 *
 * @param {React.ReactNode} children - The child elements to render within the theme provider.
 * @param {string} [attribute="class"] - The attribute to use for the theme.
 * @param {string} [defaultTheme="system"] - The default theme to apply.
 * @param {boolean} [enableSystem=true] - Whether to enable the system theme detection.
 * @param {boolean} [disableTransitionOnChange=true] - Whether to disable transitions when changing themes.
 *
 * @example
 * ```tsx
 * <RuruThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
 *   <YourComponent />
 * </RuruThemeProvider>
 * ```
 */
export const RuruThemeProvider: React.FC<RuruThemeProviderProps> = ({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
}) => {
  return (
    <ThemeProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </ThemeProvider>
  );
};
