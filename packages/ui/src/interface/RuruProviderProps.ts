import { ReactNode } from "react";

/**
 * Properties for the `RuruProvider` component.
 *
 * @interface RuruProviderProps
 * @property {ReactNode} children - The child elements to render within the provider.
 * @property {boolean} [togleThemeAnimation=false] - Whether to enable or disable theme transition animations.
 *
 * @example
 * ```tsx
 * <RuruProvider togleThemeAnimation={true}>
 *   <YourComponent />
 * </RuruProvider>
 * ```
 */
export interface RuruProviderProps {
  children: ReactNode;
  togleThemeAnimation?: boolean;
}
