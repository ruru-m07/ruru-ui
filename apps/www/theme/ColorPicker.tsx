/* eslint-disable react-hooks/exhaustive-deps */
import { useThemeContext } from "@/contexts/ThemeContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColorPicker, useColor } from "react-color-palette";
import { useEffect } from "react";
import { Button } from "ruru-ui/components/button";

export default function ColorPickerOption() {
  const { hex, setHex } = useThemeContext();
  const [color, setColor] = useColor(hex);

  useEffect(() => {
    setHex(color.hex);
  }, [color]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"}>
          Pick your color
          <div
            style={{ background: hex }}
            className="w-4 h-4 rounded ml-2"
          ></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <ColorPicker
          color={color}
          hideInput={["hsv"]}
          hideAlpha
          onChange={setColor}
        />
      </PopoverContent>
    </Popover>
  );
}
