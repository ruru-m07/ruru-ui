import { type ReactNode } from "react";
/**
 * Properties for the `RuruThemeProvider` component.
 *
 * @interface RuruThemeProviderProps
 * @property {ReactNode} children - The child elements to render within the theme provider.
 * @property {string} [attribute="class"] - The attribute to use for applying the theme (e.g., "class", "data-theme").
 * @property {string} [defaultTheme="system"] - The default theme to apply if no theme is specified.
 * @property {boolean} [enableSystem=true] - Whether to enable system theme detection.
 * @property {boolean} [disableTransitionOnChange=true] - Whether to disable transitions when changing themes.
 *
 * @example
 * ```tsx
 * <RuruThemeProvider
 *   attribute="data-theme"
 *   defaultTheme="dark"
 *   enableSystem={false}
 *   disableTransitionOnChange={true}
 * >
 *   <YourComponent />
 * </RuruThemeProvider>
 * ```
 */
export interface RuruThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}
