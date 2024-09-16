import { ShadcnVariables } from "@/contexts/ThemeContext";
import { extractHSLValues } from "./getHSLValues";

export function generateCssVariables({
  light,
  dark,
}: {
  light: ShadcnVariables;
  dark: ShadcnVariables;
}) {
  return `@layer base {
  :root {
    --background: ${extractHSLValues(light.background.color)};
    --foreground: ${extractHSLValues(light.foreground.color)};

    --primary: ${extractHSLValues(light.primary.color)};
    --primary-foreground: ${extractHSLValues(light.primaryForeground.color)};

    --card: ${extractHSLValues(light.card.color)};
    --card-foreground: ${extractHSLValues(light.cardForeground.color)};

    --popover: ${extractHSLValues(light.popover.color)};
    --popover-foreground: ${extractHSLValues(light.popoverForeground.color)};

    --secondary: ${extractHSLValues(light.secondary.color)};
    --secondary-foreground: ${extractHSLValues(light.secondaryForeground.color)};

    --muted: ${extractHSLValues(light.muted.color)};
    --muted-foreground: ${extractHSLValues(light.mutedForeground.color)};

    --accent: ${extractHSLValues(light.accent.color)};
    --accent-foreground: ${extractHSLValues(light.accentForeground.color)};

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: ${extractHSLValues(light.border.color)};
    --input: ${extractHSLValues(light.input.color)};
    --ring: ${extractHSLValues(light.ring.color)};
    
    --radius: 0.5rem;
  }

  .dark {
    --background: ${extractHSLValues(dark.background.color)};
    --foreground: ${extractHSLValues(dark.foreground.color)};

    --primary: ${extractHSLValues(dark.primary.color)};
    --primary-foreground: ${extractHSLValues(dark.primaryForeground.color)};

    --card: ${extractHSLValues(dark.card.color)};
    --card-foreground: ${extractHSLValues(dark.cardForeground.color)};

    --popover: ${extractHSLValues(dark.popover.color)};
    --popover-foreground: ${extractHSLValues(dark.popoverForeground.color)};

    --secondary: ${extractHSLValues(dark.secondary.color)};
    --secondary-foreground: ${extractHSLValues(dark.secondaryForeground.color)};

    --muted: ${extractHSLValues(dark.muted.color)};
    --muted-foreground: ${extractHSLValues(dark.mutedForeground.color)};

    --accent: ${extractHSLValues(dark.accent.color)};
    --accent-foreground: ${extractHSLValues(dark.accentForeground.color)};

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: ${extractHSLValues(dark.border.color)};
    --input: ${extractHSLValues(dark.input.color)};
    --ring: ${extractHSLValues(dark.ring.color)};
  }
}
`;
}
