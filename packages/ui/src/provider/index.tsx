"use client";

import React, { createContext, useContext, useState } from "react";
import { type RuruContextType } from "@/interface/RuruContextType";
import { type RuruProviderProps } from "@/interface/RuruProviderProps";
import { RuruThemeProvider } from "./theme";

// Create the context with default values
const RuruContext = createContext<RuruContextType | undefined>(undefined);

export const RuruProvider: React.FC<RuruProviderProps> = ({
  children,
  togleThemeAnimation = false,
}) => {
  const [color, setColor] = useState<string>("blue"); // Default color value

  return (
    <RuruContext.Provider value={{ color, setColor }}>
      <RuruThemeProvider disableTransitionOnChange={!togleThemeAnimation}>
        <div className="bg-card">{children}</div>
      </RuruThemeProvider>
    </RuruContext.Provider>
  );
};

/**
 * Custom hook to use the Ruru context.
 *
 * @returns {RuruContextType} - The context value, including color and setColor.
 *
 * @throws {Error} - Throws an error if used outside of a RuruProvider.
 *
 * @example
 * ```tsx
 * const { color, setColor } = useRuru();
 * ```
 */
export const useRuru = (): RuruContextType => {
  const context = useContext(RuruContext);
  if (!context) {
    throw new Error("useRuru must be used within a RuruProvider");
  }
  return context;
};
