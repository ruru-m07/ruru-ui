import { RuruVariables, ThemeVariables } from "@/contexts/ThemeContext";
import Color from "color";
import { getContrastInfo } from "./colors";

const setColorBasedOnIsLocked = (
  newColor: string,
  theme: "light" | "dark",
  variable: keyof RuruVariables,
  RuruVariables?: ThemeVariables["cssVariables"],
): string => {
  if (!!RuruVariables) {
    return RuruVariables?.ruru[theme][variable].isLocked
      ? RuruVariables?.ruru[theme][variable].color || "transparent"
      : newColor;
  }
  return newColor;
};

export function generateColorAttributes({
  hex,
  darkColors,
  lightColors,
  RuruVariables,
}: {
  hex: string;
  darkColors: string[];
  lightColors: string[];
  RuruVariables?: ThemeVariables["cssVariables"];
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.background.isLocked,
      },
      foreground: {
        color: setColorBasedOnIsLocked(
          lightForeground,
          "light",
          "foreground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.foreground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.primary.isLocked,
      },
      primaryForeground: {
        color: setColorBasedOnIsLocked(
          primaryForeground,
          "light",
          "primaryForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.primaryForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.card.isLocked,
      },
      cardForeground: {
        color: setColorBasedOnIsLocked(
          lightCardForeground,
          "light",
          "cardForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.cardForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.popover.isLocked,
      },
      popoverForeground: {
        color: setColorBasedOnIsLocked(
          lightPopoverForeground,
          "light",
          "popoverForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.popoverForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.secondary.isLocked,
      },
      secondaryForeground: {
        color: setColorBasedOnIsLocked(
          lightSecondaryForeground,
          "light",
          "secondaryForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.secondaryForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.muted.isLocked,
      },
      mutedForeground: {
        color: setColorBasedOnIsLocked(
          lightMutedForeground,
          "light",
          "mutedForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.mutedForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.accent.isLocked,
      },
      accentForeground: {
        color: setColorBasedOnIsLocked(
          lightAccentForeground,
          "light",
          "accentForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.accentForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.border.isLocked,
      },
      input: {
        color: setColorBasedOnIsLocked(
          lightInput,
          "light",
          "input",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.light.input.isLocked,
      },
      ring: {
        color: setColorBasedOnIsLocked(hex, "light", "ring", RuruVariables),
        isLocked: RuruVariables?.ruru.light.ring.isLocked,
      },
    },
    dark: {
      background: {
        color: setColorBasedOnIsLocked(
          darkBackground,
          "dark",
          "background",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.background.isLocked,
      },
      foreground: {
        color: setColorBasedOnIsLocked(
          darkForeground,
          "dark",
          "foreground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.foreground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.primary.isLocked,
      },
      primaryForeground: {
        color: setColorBasedOnIsLocked(
          primaryForeground,
          "dark",
          "primaryForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.primaryForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.card.isLocked,
      },
      cardForeground: {
        color: setColorBasedOnIsLocked(
          darkCardForeground,
          "dark",
          "cardForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.cardForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.popover.isLocked,
      },
      popoverForeground: {
        color: setColorBasedOnIsLocked(
          darkPopoverForeground,
          "dark",
          "popoverForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.popoverForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.secondary.isLocked,
      },
      secondaryForeground: {
        color: setColorBasedOnIsLocked(
          Color("white").hex(),
          "dark",
          "secondaryForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.secondaryForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.muted.isLocked,
      },
      mutedForeground: {
        color: setColorBasedOnIsLocked(
          darkMutedForeground,
          "dark",
          "mutedForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.mutedForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.accent.isLocked,
      },
      accentForeground: {
        color: setColorBasedOnIsLocked(
          darkAccentForeground,
          "dark",
          "accentForeground",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.accentForeground.isLocked,
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
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.border.isLocked,
      },
      input: {
        color: setColorBasedOnIsLocked(
          darkInput,
          "dark",
          "input",
          RuruVariables,
        ),
        isLocked: RuruVariables?.ruru.dark.input.isLocked,
      },
      ring: {
        color: setColorBasedOnIsLocked(hex, "dark", "ring", RuruVariables),
        isLocked: RuruVariables?.ruru.dark.ring.isLocked,
      },
    },
  };
}
