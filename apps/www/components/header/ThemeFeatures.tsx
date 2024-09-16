import { Upload } from "lucide-react";
import useThemeExport from "@/hooks/useThemeExport";
import { Button } from "ruru-ui/components/button";

export default function ThemeFeatures() {
  const { exportTheme } = useThemeExport();

  return (
    <Button onClick={exportTheme} size={"small"} variant={"secondary"}>
      <Upload size={16} strokeWidth={1.5} />
      <span className="sr-only">Theme features</span>
    </Button>
  );
}
