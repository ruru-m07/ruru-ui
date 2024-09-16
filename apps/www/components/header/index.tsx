import ButtonShowCode from "./ButtonShowCode";
import ColorPickerOption from "@/theme/ColorPicker";
import ThemeToggle from "./ThemeToggle";
import ThemeFeatures from "./ThemeFeatures";
import ThemeImport from "./ThemeImport";

export default function Header() {
  return (
    <header
      className={`h-[80px] space-x-4 flex items-center justify-between w-full my-4 border rounded-md`}
    >
      <div className="flex items-center space-x-2 w-full pr-5">
        <div className="flex items-center w-full space-x-4 ml-4">
          <ColorPickerOption />
          <ButtonShowCode />
        </div>
        <div className="flex items-center justify-end w-full space-x-4">
          <ThemeToggle />
          <ThemeFeatures />
          <ThemeImport />
        </div>
      </div>
    </header>
  );
}
