"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Color from "color";
import { getColorsList } from "@/utils/getColorsList";
import { generateShadcnColorAttributes } from "@/utils/generateShadcnColorAttributes";
import { getContrastInfo } from "@/utils/colors";

export type ContrastLevels = "low" | "medium" | "good" | "excellent";
export type ContrastInfo = {
  level: ContrastLevels;
  contrast: number;
};

export interface ColorState {
  color: string;
  isLocked?: boolean;
  contrastChecker?: ContrastInfo;
}
export interface ShadcnVariables {
  background: ColorState;
  foreground: ColorState;
  primary: ColorState;
  primaryForeground: ColorState;
  card: ColorState;
  cardForeground: ColorState;
  popover: ColorState;
  popoverForeground: ColorState;
  secondary: ColorState;
  secondaryForeground: ColorState;
  muted: ColorState;
  mutedForeground: ColorState;
  accent: ColorState;
  accentForeground: ColorState;
  border: ColorState;
  input: ColorState;
  ring: ColorState;
}

export type ThemeVariables = {
  mainColor: number;
  hex: string;
  r: number;
  g: number;
  b: number;
  darkColorsAmount: number;
  darkness: number;
  darkColorsHueAngle: number;
  darkColorsSaturation: number;
  lightColorsAmount: number;
  lightness: number;
  lightColorsHueAngle: number;
  lightColorsSaturation: number;
  darkColors: string[];
  lightColors: string[];
  cssVariables: {
    shadcn: {
      light: ShadcnVariables;
      dark: ShadcnVariables;
    };
  };
  mode: "dark" | "light";
};

export type ThemeContextType = ThemeVariables & {
  setMainColor: (color: number) => void;
  setRGB: (r: number, g: number, b: number) => void;
  setHex: (hex: string) => void;
  setDarkThemeSettings: (
    darkThemeSettings: Pick<
      ThemeVariables,
      | "darkColorsAmount"
      | "darkColorsHueAngle"
      | "darkness"
      | "darkColorsSaturation"
    >,
  ) => void;
  setLightThemeSettings: (
    lightThemeSettings: Pick<
      ThemeVariables,
      | "lightColorsAmount"
      | "lightColorsHueAngle"
      | "lightness"
      | "lightColorsSaturation"
    >,
  ) => void;
  setMode: (mode: "dark" | "light") => void;
  setCssVariables: (cssVariables: ThemeVariables["cssVariables"]) => void;
  setTheme: (theme: ThemeVariables) => void;
};

const DEFAULT_COLOR = Color("#fafafa").rgbNumber();

function getThemeVariablesDefaultValues(): ThemeVariables {
  const color = Color(DEFAULT_COLOR);
  const darkColors = getColorsList(5, 100, "black", 0, 0, color.hex()).map(
    (color) => Color(color).hex(),
  );
  const lightColors = getColorsList(5, 100, "white", 0, 0, color.hex()).map(
    (color) => Color(color).hex(),
  );

  const hex = color.hex();
  return {
    mainColor: DEFAULT_COLOR,
    mode: "dark",
    hex,
    r: color.red(),
    g: color.green(),
    b: color.blue(),
    darkColorsAmount: 5,
    darkness: 100,
    darkColorsHueAngle: 0,
    darkColorsSaturation: 0,
    lightColorsAmount: 5,
    lightness: 100,
    lightColorsHueAngle: 0,
    lightColorsSaturation: 0,
    darkColors,
    lightColors,
    cssVariables: {
      shadcn: generateShadcnColorAttributes({ hex, darkColors, lightColors }),
    },
  };
}

const ThemeContext = createContext<ThemeContextType>({
  ...getThemeVariablesDefaultValues(),
  setMainColor: () => {},
  setRGB: () => {},
  setHex: () => {},
  setDarkThemeSettings: () => {},
  setLightThemeSettings: () => {},
  setMode: () => {},
  setCssVariables: () => {},
  setTheme: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [variables, setVariables] = useState<ThemeVariables>(() =>
    getThemeVariablesDefaultValues(),
  );

  useEffect(() => {
    const { hex, lightColors, darkColors, cssVariables } = variables;

    setVariables({
      ...variables,
      cssVariables: {
        shadcn: generateShadcnColorAttributes({
          hex,
          darkColors,
          lightColors,
          shadcnVariables: cssVariables,
        }),
      },
    });
  }, [variables.hex, variables.lightColors, variables.darkColors]);

  function updatePaletteThemes(mainColor: string = variables.hex) {
    return {
      lightColors: getColorsList(
        variables.lightColorsAmount,
        variables.lightness,
        "white",
        variables.lightColorsHueAngle,
        variables.lightColorsSaturation,
        mainColor,
      ),
      darkColors: getColorsList(
        variables.darkColorsAmount,
        variables.darkness,
        "black",
        variables.darkColorsHueAngle,
        variables.darkColorsSaturation,
        mainColor,
      ),
    };
  }

  function setTheme(theme: ThemeVariables) {
    setVariables(theme);
  }

  function setMainColor(color: number) {
    const obj = Color(color);

    setVariables({
      ...variables,
      mainColor: color,
      hex: obj.hex(),
      r: obj.red(),
      g: obj.green(),
      b: obj.blue(),
      ...updatePaletteThemes(obj.hex()),
    });
  }

  function setRGB(r: number, g: number, b: number) {
    const obj = Color({ r, g, b });

    setVariables({
      ...variables,
      mainColor: obj.rgbNumber(),
      hex: obj.hex(),
      r,
      g,
      b,
      ...updatePaletteThemes(obj.hex()),
    });
  }

  function setHex(hex: string) {
    const obj = Color(hex);

    setVariables({
      ...variables,
      mainColor: obj.rgbNumber(),
      hex,
      r: obj.red(),
      g: obj.green(),
      b: obj.blue(),
      ...updatePaletteThemes(hex),
    });
  }

  function setDarkThemeSettings(
    darkThemeSettings: Pick<
      ThemeVariables,
      | "darkColorsAmount"
      | "darkColorsHueAngle"
      | "darkness"
      | "darkColorsSaturation"
    >,
  ) {
    const {
      darkColorsAmount,
      darkColorsHueAngle,
      darkColorsSaturation,
      darkness,
    } = darkThemeSettings;

    setVariables({
      ...variables,
      darkColorsAmount,
      darkColorsHueAngle,
      darkColorsSaturation,
      darkness,
      darkColors: getColorsList(
        darkColorsAmount,
        darkness,
        "black",
        darkColorsHueAngle,
        darkColorsSaturation,
        variables.hex,
      ),
    });
  }
  function setLightThemeSettings(
    lightThemeSettings: Pick<
      ThemeVariables,
      | "lightColorsAmount"
      | "lightColorsHueAngle"
      | "lightness"
      | "lightColorsSaturation"
    >,
  ) {
    const {
      lightColorsAmount,
      lightColorsHueAngle,
      lightColorsSaturation,
      lightness,
    } = lightThemeSettings;

    setVariables({
      ...variables,
      lightColorsAmount,
      lightColorsHueAngle,
      lightColorsSaturation,
      lightness,
      lightColors: getColorsList(
        lightColorsAmount,
        lightness,
        "white",
        lightColorsHueAngle,
        lightColorsSaturation,
        variables.hex,
      ),
    });
  }

  function setMode(mode: "dark" | "light") {
    setVariables({ ...variables, mode });
  }

  function setCssVariables(cssVariables: ThemeVariables["cssVariables"]) {
    cssVariables.shadcn.light = {
      ...cssVariables.shadcn.light,
      foreground: {
        ...cssVariables.shadcn.light.foreground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.light.background.color,
          foregroundColor: cssVariables.shadcn.light.foreground.color,
        }),
      },
      primaryForeground: {
        ...cssVariables.shadcn.light.primaryForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.light.primary.color,
          foregroundColor: cssVariables.shadcn.light.primaryForeground.color,
        }),
      },
      cardForeground: {
        ...cssVariables.shadcn.light.cardForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.light.card.color,
          foregroundColor: cssVariables.shadcn.light.cardForeground.color,
        }),
      },
      popoverForeground: {
        ...cssVariables.shadcn.light.popoverForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.light.popover.color,
          foregroundColor: cssVariables.shadcn.light.popoverForeground.color,
        }),
      },
      secondaryForeground: {
        ...cssVariables.shadcn.light.secondaryForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.light.secondary.color,
          foregroundColor: cssVariables.shadcn.light.secondaryForeground.color,
        }),
      },
      mutedForeground: {
        ...cssVariables.shadcn.light.mutedForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.light.muted.color,
          foregroundColor: cssVariables.shadcn.light.mutedForeground.color,
        }),
      },
      accentForeground: {
        ...cssVariables.shadcn.light.accentForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.light.accent.color,
          foregroundColor: cssVariables.shadcn.light.accentForeground.color,
        }),
      },
    };

    cssVariables.shadcn.dark = {
      ...cssVariables.shadcn.dark,
      foreground: {
        ...cssVariables.shadcn.dark.foreground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.dark.background.color,
          foregroundColor: cssVariables.shadcn.dark.foreground.color,
        }),
      },
      primaryForeground: {
        ...cssVariables.shadcn.dark.primaryForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.dark.primary.color,
          foregroundColor: cssVariables.shadcn.dark.primaryForeground.color,
        }),
      },
      cardForeground: {
        ...cssVariables.shadcn.dark.cardForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.dark.card.color,
          foregroundColor: cssVariables.shadcn.dark.cardForeground.color,
        }),
      },
      popoverForeground: {
        ...cssVariables.shadcn.dark.popoverForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.dark.popover.color,
          foregroundColor: cssVariables.shadcn.dark.popoverForeground.color,
        }),
      },
      secondaryForeground: {
        ...cssVariables.shadcn.dark.secondaryForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.dark.secondary.color,
          foregroundColor: cssVariables.shadcn.dark.secondaryForeground.color,
        }),
      },
      mutedForeground: {
        ...cssVariables.shadcn.dark.mutedForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.dark.muted.color,
          foregroundColor: cssVariables.shadcn.dark.mutedForeground.color,
        }),
      },
      accentForeground: {
        ...cssVariables.shadcn.dark.accentForeground,
        contrastChecker: getContrastInfo({
          backgroundColor: cssVariables.shadcn.dark.accent.color,
          foregroundColor: cssVariables.shadcn.dark.accentForeground.color,
        }),
      },
    };
    setVariables({ ...variables, cssVariables });
  }

  return (
    <ThemeContext.Provider
      value={{
        ...variables,
        setMainColor,
        setRGB,
        setHex,
        setDarkThemeSettings,
        setLightThemeSettings,
        setMode,
        setCssVariables,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeContextDebugger() {
  const { setMainColor, setRGB, setHex, ...vars } = useThemeContext();

  return (
    <div className={"fixed bottom-0 max-h-[400px] overflow-auto right-0 p-4"}>
      <pre>{JSON.stringify(vars, null, 2)}</pre>
    </div>
  );
}
