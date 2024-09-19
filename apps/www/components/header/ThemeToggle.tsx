import { useThemeContext } from "@/contexts/ThemeContext";
import { cn } from "@/utils/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button, buttonVariants } from "ruru-ui/components/button";
import { Switch } from "ruru-ui/components/switch";
import { useTheme } from "ruru-ui/theme";

export default function ThemeToggle() {
  const { setMode, mode } = useThemeContext();
  const { setTheme } = useTheme();

  const handleThemeChange = () => {
    mode === "light"
      ? (setMode("dark"), setTheme("dark"))
      : (setMode("light"), setTheme("light"));
  };

  return (
    <div>
      <Button
        variant="secondary"
        size={"small"}
        className={"w-9 px-0 flex items-center"}
        onClick={() => handleThemeChange()}
      >
        <SunIcon
          className={cn(
            "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ",
            { "-rotate-90": mode === "dark" },
            { "scale-0": mode === "dark" },
          )}
          size={16}
          strokeWidth={1.5}
        />
        <MoonIcon
          className={cn(
            "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
            { "rotate-0": mode === "dark" },
            { "scale-100": mode === "dark" },
          )}
          size={16}
          strokeWidth={1.5}
        />
      </Button>
    </div>
  );
}
