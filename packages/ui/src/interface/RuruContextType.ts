/**
 * Context type for managing color state in the Ruru context.
 *
 * @interface RuruContextType
 * @property {boolean} disableAnimation - The current color.
 * @property {boolean} Animation - The current color.
 * @property {(Animation: boolean) => void} setAnimation - Function to set the color.
 *
 */
export interface RuruContextType {
  disableAnimation: boolean;
  animation: boolean;
  setAnimation: (Animation: boolean) => void;
}
