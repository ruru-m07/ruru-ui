"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { type RuruThemeProviderProps } from "@/interfaces/RuruThemeProviderProps";
/**
 * A wrapper component to provide theme context using `next-themes`.
 *
 * @param {RuruThemeProviderProps} props - The component properties.
 * @returns {React.ReactElement} - The theme provider component.
 * @example
 *
 * ```tsx
 * <RuruThemeProvider
 *  attribute="data-theme"
 *  defaultTheme="dark"
 *  enableSystem={false}
 *  disableTransitionOnChange={true}
 *  >
 *    <App />
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
      <div>{children}</div>
    </ThemeProvider>
  );
};

import { useTheme } from "next-themes";
export { useTheme };
