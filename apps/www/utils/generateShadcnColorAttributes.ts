import { ShadcnVariables, ThemeVariables } from "@/contexts/ThemeContext";
import Color from "color";
import { getContrastInfo } from "./colors";

const setColorBasedOnIsLocked = (
  newColor: string,
  theme: "light" | "dark",
  variable: keyof ShadcnVariables,
  shadcnVariables?: ThemeVariables["cssVariables"],
): string => {
  if (!!shadcnVariables) {
    return shadcnVariables?.shadcn[theme][variable].isLocked
      ? shadcnVariables?.shadcn[theme][variable].color || "transparent"
      : newColor;
  }
  return newColor;
};

export function generateShadcnColorAttributes({
  hex,
  darkColors,
  lightColors,
  shadcnVariables,
}: {
  hex: string;
  darkColors: string[];
  lightColors: string[];
  shadcnVariables?: ThemeVariables["cssVariables"];
}) {
  // const primary = hex;
  // const primaryForeground = Color({ hex: primary }).isDark()
  //   ? Color(hex).mix(Color("white"), 0.9).hex()
  //   : Color(hex).mix(Color("black"), 0.9).hex();

  // const lightBackground = lightColors[lightColors.length - 1];
  // const lightForeground = Color(hex).mix(Color("black"), 0.9).hex();
  // const lightCard = Color(hex).mix(Color("white"), 0.95).hex();
  // const lightCardForeground = Color(hex).mix(Color("black"), 0.9).hex();
  // const lightPopover = Color("white").hex();
  // const lightPopoverForeground = Color(hex).mix(Color("black"), 0.9).hex();
  // const lightSecondary = Color(hex).mix(Color("white"), 0.85).hex();
  // const lightSecondaryForeground = darkColors[0];
  // const lightMuted = Color(hex).mix(Color("white"), 0.9).hex();
  // const lightMutedForeground = Color("white").hsl().darken(0.6).hex();
  // // const lightMutedForeground = Color("white").mix(Color(hex), 0.20).hex();
  // const lightAccent = Color(hex).mix(Color("white"), 0.9).hex();
  // const lightAccentForeground = Color(hex).mix(Color("black"), 0.85).hex();
  // const lightInput = Color(hex)
  //   .mix(Color("black"), 0.5)
  //   .mix(Color("white"), 0.75)
  //   .hex();

  // const darkBackground = Color(hex).mix(Color("#0a0a0a"), 1).hex();
  // const darkForeground = Color(hex).mix(Color("white"), 0.85).hex();
  // const darkCard = Color(hex).mix(Color("black"), 0.95).hex();
  // const darkCardForeground = Color(hex).mix(Color("white"), 0.85).hex();
  // const darkPopover = darkColors[0];
  // const darkPopoverForeground = Color(hex).mix(Color("white"), 0.85).hex();
  // const darkSecondary = Color(hex).mix(Color("red"), 0.9).darken(0.6).hex();
  // const darkSecondaryForeground = Color("white").hex();
  // const darkMuted = Color(darkColors[0]).mix(Color("white"), 0.1).hex();
  // const darkMutedForeground = Color(darkColors[0])
  //   .mix(Color("white"), 0.5)
  //   .hex();
  // const darkAccent = Color("black").mix(Color(hex), 0.15).hex();
  // const darkAccentForeground = Color(hex).mix(Color("white"), 0.85).hex();
  // const darkInput = Color(hex)
  //   .mix(Color("white"), 0.6)
  //   .mix(Color("black"), 0.75)
  //   .hex();

  const primary = hex;
  const primaryForeground = Color({ hex: primary }).isDark()
    ? Color(hex).mix(Color("white"), 0.9).hex()
    : Color(hex).mix(Color("black"), 0.9).hex();

  const lightBackground = lightColors[lightColors.length - 1];
  const lightForeground = Color(hex).mix(Color("black"), 0.9).hex();
  const lightCard = Color(hex).mix(Color("white"), 0.95).hex();
  const lightCardForeground = Color(hex).mix(Color("black"), 0.9).hex();
  const lightPopover = Color("white").hex();
  const lightPopoverForeground = Color(hex).mix(Color("black"), 0.9).hex();
  const lightSecondary = Color(hex).mix(Color("white"), 0.85).hex();
  const lightSecondaryForeground = darkColors[0];
  const lightMuted = Color(hex).mix(Color("white"), 0.9).hex();
  const lightMutedForeground = Color("white").hsl().darken(0.6).hex();
  const lightAccent = Color(hex).mix(Color("white"), 0.9).hex();
  const lightAccentForeground = Color(hex).mix(Color("black"), 0.85).hex();
  const lightInput = Color(hex)
    .mix(Color("black"), 0.5)
    .mix(Color("white"), 0.75)
    .hex();

  const darkBackground = darkColors[0];
  const darkForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkCard = Color(hex).mix(Color("#0a0a0a"), 0.96).hex();
  const darkCardForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkPopover = darkColors[0];
  const darkPopoverForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkSecondary = Color("black").mix(Color(hex), 0.9).hex();
  const darkSecondaryForeground = Color("white").hex();
  const darkMuted = Color(darkColors[0]).mix(Color("white"), 0.1).hex();
  const darkMutedForeground = Color(darkColors[0])
    .mix(Color("white"), 0.5)
    .hex();
  const darkAccent = Color("black").mix(Color(hex), 0.35).hex();
  const darkAccentForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkInput = Color(hex)
    .mix(Color("white"), 0.6)
    .mix(Color("black"), 0.75)
    .hex();

  return {
    light: {
      background: {
        color: setColorBasedOnIsLocked(
          lightBackground,
          "light",
          "background",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.background.isLocked,
      },
      foreground: {
        color: setColorBasedOnIsLocked(
          lightForeground,
          "light",
          "foreground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.foreground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: lightBackground,
          foregroundColor: lightForeground,
        }),
      },
      primary: {
        color: setColorBasedOnIsLocked(
          primary,
          "light",
          "primary",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.primary.isLocked,
      },
      primaryForeground: {
        color: setColorBasedOnIsLocked(
          primaryForeground,
          "light",
          "primaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.primaryForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: primary,
          foregroundColor: primaryForeground,
        }),
      },
      card: {
        color: setColorBasedOnIsLocked(
          lightCard,
          "light",
          "card",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.card.isLocked,
      },
      cardForeground: {
        color: setColorBasedOnIsLocked(
          lightCardForeground,
          "light",
          "cardForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.cardForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: lightCard,
          foregroundColor: lightCardForeground,
        }),
      },
      popover: {
        color: setColorBasedOnIsLocked(
          lightPopover,
          "light",
          "popover",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.popover.isLocked,
      },
      popoverForeground: {
        color: setColorBasedOnIsLocked(
          lightPopoverForeground,
          "light",
          "popoverForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.popoverForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: lightPopover,
          foregroundColor: lightPopoverForeground,
        }),
      },
      secondary: {
        color: setColorBasedOnIsLocked(
          lightSecondary,
          "light",
          "secondary",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.secondary.isLocked,
      },
      secondaryForeground: {
        color: setColorBasedOnIsLocked(
          lightSecondaryForeground,
          "light",
          "secondaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.secondaryForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: lightSecondary,
          foregroundColor: lightSecondaryForeground,
        }),
      },
      muted: {
        color: setColorBasedOnIsLocked(
          lightMuted,
          "light",
          "muted",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.muted.isLocked,
      },
      mutedForeground: {
        color: setColorBasedOnIsLocked(
          lightMutedForeground,
          "light",
          "mutedForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.mutedForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: lightMuted,
          foregroundColor: lightMutedForeground,
        }),
      },
      accent: {
        color: setColorBasedOnIsLocked(
          lightAccent,
          "light",
          "accent",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.accent.isLocked,
      },
      accentForeground: {
        color: setColorBasedOnIsLocked(
          lightAccentForeground,
          "light",
          "accentForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.accentForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: lightAccent,
          foregroundColor: lightAccentForeground,
        }),
      },
      border: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.8).hex(),
          "light",
          "border",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.border.isLocked,
      },
      input: {
        color: setColorBasedOnIsLocked(
          lightInput,
          "light",
          "input",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.input.isLocked,
      },
      ring: {
        color: setColorBasedOnIsLocked(hex, "light", "ring", shadcnVariables),
        isLocked: shadcnVariables?.shadcn.light.ring.isLocked,
      },
    },
    dark: {
      background: {
        color: setColorBasedOnIsLocked(
          darkBackground,
          "dark",
          "background",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.background.isLocked,
      },
      foreground: {
        color: setColorBasedOnIsLocked(
          darkForeground,
          "dark",
          "foreground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.foreground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: darkBackground,
          foregroundColor: darkForeground,
        }),
      },
      primary: {
        color: setColorBasedOnIsLocked(
          primary,
          "dark",
          "primary",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.primary.isLocked,
      },
      primaryForeground: {
        color: setColorBasedOnIsLocked(
          primaryForeground,
          "dark",
          "primaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.primaryForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: primary,
          foregroundColor: primaryForeground,
        }),
      },
      card: {
        color: setColorBasedOnIsLocked(
          darkCard,
          "light",
          "card",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.card.isLocked,
      },
      cardForeground: {
        color: setColorBasedOnIsLocked(
          darkCardForeground,
          "dark",
          "cardForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.cardForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: darkCard,
          foregroundColor: darkCardForeground,
        }),
      },
      popover: {
        color: setColorBasedOnIsLocked(
          darkPopover,
          "dark",
          "popover",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.popover.isLocked,
      },
      popoverForeground: {
        color: setColorBasedOnIsLocked(
          darkPopoverForeground,
          "dark",
          "popoverForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.popoverForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: darkPopover,
          foregroundColor: darkPopoverForeground,
        }),
      },
      secondary: {
        color: setColorBasedOnIsLocked(
          Color("black").mix(Color(hex), 0.35).hex(),
          "dark",
          "secondary",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.secondary.isLocked,
      },
      secondaryForeground: {
        color: setColorBasedOnIsLocked(
          Color("white").hex(),
          "dark",
          "secondaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.secondaryForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: darkSecondary,
          foregroundColor: darkSecondaryForeground,
        }),
      },
      muted: {
        color: setColorBasedOnIsLocked(
          darkMuted,
          "dark",
          "muted",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.muted.isLocked,
      },
      mutedForeground: {
        color: setColorBasedOnIsLocked(
          darkMutedForeground,
          "dark",
          "mutedForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.mutedForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: darkMuted,
          foregroundColor: darkMutedForeground,
        }),
      },
      accent: {
        color: setColorBasedOnIsLocked(
          darkAccent,
          "dark",
          "accent",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.accent.isLocked,
      },
      accentForeground: {
        color: setColorBasedOnIsLocked(
          darkAccentForeground,
          "dark",
          "accentForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.accentForeground.isLocked,
        contrastChecker: getContrastInfo({
          backgroundColor: darkAccent,
          foregroundColor: darkAccentForeground,
        }),
      },
      border: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("black"), 0.8).hex(),
          "dark",
          "border",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.border.isLocked,
      },
      input: {
        color: setColorBasedOnIsLocked(
          darkInput,
          "dark",
          "input",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.input.isLocked,
      },
      ring: {
        color: setColorBasedOnIsLocked(hex, "dark", "ring", shadcnVariables),
        isLocked: shadcnVariables?.shadcn.dark.ring.isLocked,
      },
    },
  };
}
