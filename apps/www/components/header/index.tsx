import ButtonShowCode from "./ButtonShowCode";
import ColorPickerOption from "@/theme/ColorPicker";
import ThemeToggle from "./ThemeToggle";
import ThemeFeatures from "./ThemeFeatures";
import ThemeImport from "./ThemeImport";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "ruru-ui/components/tooltip";

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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent>
                Toggle between light and dark mode
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeFeatures />
              </TooltipTrigger>
              <TooltipContent>Export your theme as a JSON file</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeImport />
              </TooltipTrigger>
              <TooltipContent>Import a theme from a JSON file</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
