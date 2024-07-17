import typography from '@tailwindcss/typography';
import type { CSSRuleObject, PresetsConfig } from 'tailwindcss/types/config';

type Keys =
  | 'background'
  | 'foreground'
  | 'muted'
  | 'muted-foreground'
  | 'popover'
  | 'popover-foreground'
  | 'card'
  | 'card-foreground'
  | 'border'
  | 'primary'
  | 'primary-foreground'
  | 'secondary'
  | 'secondary-foreground'
  | 'accent'
  | 'accent-foreground'
  | 'ring';

type Theme = Record<Keys, string>;

export interface Preset {
  light: Theme;
  dark: Theme;
  css?: CSSRuleObject;
}
export function createPreset(): PresetsConfig {
  return {
    darkMode: 'class',
    plugins: [typography],
  };
}

