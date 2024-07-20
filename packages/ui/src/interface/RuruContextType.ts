/**
 * Context type for managing color state in the Ruru context.
 *
 * @interface RuruContextType
 * @property {string} color - The current color value.
 * @property {(color: string) => void} setColor - Function to update the color value.
 *
 * @example
 * ```typescript
 * const { color, setColor } = useRuru();
 * setColor("red");
 * ```
 */
export interface RuruContextType {
  color: string;
  setColor: (color: string) => void;
}
