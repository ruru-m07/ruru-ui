/* eslint-disable react-hooks/exhaustive-deps */
import {
  ContrastInfo,
  ShadcnVariables,
  useThemeContext,
} from "@/contexts/ThemeContext";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColorPicker, useColor } from "react-color-palette";
import { useEffect } from "react";
import { Button } from "ruru-ui/components/button";
import { Lock, Unlock } from "lucide-react";
import AccessibilityIndicatorIcon from "@/icon/accesibility-indicator-icon";

function SmallColorBlockRounded({ hex }: { hex: string }) {
  return (
    <div className="w-4 h-4 rounded border" style={{ background: hex }}></div>
  );
}

function CssVariablesContainer({
  variable,
  hex,
  changeCssVariables,
  theme,
  contrastInfo,
  isLocked,
}: {
  variable: keyof ShadcnVariables;
  hex: string;
  isLocked: boolean | undefined;
  changeCssVariables: (
    cssVariable: keyof ShadcnVariables,
    hex: string,
    theme: "dark" | "light",
    lock?: boolean | undefined,
  ) => void;
  theme: "dark" | "light";
  contrastInfo?: ContrastInfo;
}) {
  const [color, setColor] = useColor(hex);

  useEffect(() => {
    changeCssVariables(variable, color.hex, theme);
  }, [color]);

  return (
    <div className="relative pt-4 flex items-center justify-between">
      <div className="flex items-center rounded space-x-2">
        <Popover>
          <PopoverTrigger>
            <SmallColorBlockRounded hex={hex} />
          </PopoverTrigger>
          <PopoverContent>
            <ColorPicker
              color={color}
              hideInput={["hsv"]}
              hideAlpha
              onChange={setColor}
            />
          </PopoverContent>
        </Popover>
        <p className="text-xs max-w-[150px] truncate capitalize">{variable}</p>
      </div>
      <div className="flex items-center">
        {!!contrastInfo && (
          <AccessibilityIndicatorIcon contrastInfo={contrastInfo} />
        )}
        <Button
          variant={"secondary"}
          className="w-fit p-1 h-fit bg-transparent"
          size={"small"}
          onClick={() => {
            changeCssVariables(variable, hex, theme, !isLocked);
          }}
        >
          {isLocked ? (
            <Lock className="text-secondary-foreground" height={12} />
          ) : (
            <Unlock className="text-secondary-foreground/40" height={12} />
          )}
        </Button>
      </div>
    </div>
  );
}

export default function ThemeVariablesSettingSidebar() {
  const {
    cssVariables: {
      shadcn: { light, dark },
    },
    setCssVariables,
    mode,
  } = useThemeContext();

  const backgroundMix = mode === "light" ? "black" : "white";
  const changeCssVariables = (
    cssVariable: keyof ShadcnVariables,
    hex: string,
    theme: "dark" | "light",
    lock: boolean | undefined = undefined,
  ) => {
    const isLightTheme = theme === "light";

    const themeUpdate = {
      shadcn: {
        dark: isLightTheme
          ? { ...dark }
          : {
              ...dark,
              [cssVariable]: {
                color: hex,
                isLocked:
                  lock !== undefined ? lock : dark[cssVariable].isLocked,
              },
            },
        light: isLightTheme
          ? {
              ...light,
              [cssVariable]: {
                color: hex,
                isLocked:
                  lock !== undefined ? lock : light[cssVariable].isLocked,
              },
            }
          : { ...light },
      },
    };
    setCssVariables(themeUpdate);
  };
  return (
    <div
      style={{
        background: `color-mix(in srgb, hsl(var(--background)) 97%, ${backgroundMix})`,
      }}
      className="w-fit h-fit p-4 relative border rounded-md"
    >
      <h3 className="mb-4">
        {mode === "dark" ? "Dark variables" : "Light variables"}
      </h3>
      <div className="h-fit space-y-2">
        {mode === "light" &&
          Object.keys(light).map((e) => (
            <CssVariablesContainer
              key={`light-${e}`}
              variable={e as keyof ShadcnVariables}
              hex={light[e as keyof ShadcnVariables].color}
              changeCssVariables={changeCssVariables}
              theme="light"
              isLocked={light[e as keyof ShadcnVariables].isLocked}
              contrastInfo={light[e as keyof ShadcnVariables].contrastChecker}
            />
          ))}

        {mode === "dark" &&
          Object.keys(dark).map((e) => (
            <CssVariablesContainer
              key={`dark-${e}`}
              variable={e as keyof ShadcnVariables}
              hex={dark[e as keyof ShadcnVariables].color}
              changeCssVariables={changeCssVariables}
              theme="dark"
              isLocked={dark[e as keyof ShadcnVariables].isLocked}
              contrastInfo={dark[e as keyof ShadcnVariables].contrastChecker}
            />
          ))}
      </div>
    </div>
  );
}
