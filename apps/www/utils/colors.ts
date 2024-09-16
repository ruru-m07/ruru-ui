import Color from "color";
import { ContrastInfo } from "@/contexts/ThemeContext";

export function isHexColor(color: string): boolean {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}

export function getContrastInfo({
  backgroundColor,
  foregroundColor,
}: {
  backgroundColor: string;
  foregroundColor: string;
}): ContrastInfo {
  const contrast = Color({ hex: backgroundColor }).contrast(
    Color({ hex: foregroundColor }),
  );

  if (contrast < 3) {
    return { level: "low", contrast };
  } else if (contrast >= 3 && contrast < 4.5) {
    return { level: "medium", contrast };
  } else if (contrast >= 4.5 && contrast < 7) {
    return { level: "good", contrast };
  } else {
    return { level: "excellent", contrast };
  }
}
