import Color from "color";

type MixColor = "black" | "white";
export const errorColor = "transparent";

export const getColorsList = (
  colorsAmount: number,
  colorsShiftAmount: number,
  mixColor: MixColor,
  hueAngle: number,
  saturation: number,
  hexColor: string,
) => {
  const colorsList = [];
  const givenColor = hexColor;

  let step;
  for (step = 0; step < colorsAmount; step++) {
    colorsList.push(
      Color(givenColor)
        .rotate(((step + 1) / colorsAmount) * -hueAngle)
        .saturate(((step + 1) / colorsAmount) * (saturation / 100))
        .mix(
          Color(mixColor),
          ((colorsShiftAmount / 100) * (step + 1)) / colorsAmount,
        )
        .hex(),
    );
  }

  return mixColor === "black" ? colorsList.reverse() : colorsList;
};
