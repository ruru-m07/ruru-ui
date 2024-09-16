import Color from "color";

export function extractHSLValues(color: string) {
  const hue = {
    h: Color(color).hsl().hue().toFixed(2).toString(),
    s: Color(color).hsl().saturationl().toFixed(2).toString(),
    l: Color(color).hsl().lightness().toFixed(2).toString(),
  };

  return `${hue.h} ${hue.s}% ${hue.l}%`;
}
