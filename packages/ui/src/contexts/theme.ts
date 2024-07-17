"use client";

import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../providers";

export const useTheme: () => ThemeContextProps = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a Ruru Provider");
  }
  return context;
};
