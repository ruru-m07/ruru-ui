import { ChangeEvent } from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

export default function useThemeImport() {
  const { setTheme } = useThemeContext();

  const submit = (file: File | null, e: ChangeEvent<HTMLInputElement>) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string);
          setTheme(json);
        } catch (error) {
          alert("Invalid format!. Check your JSON fiLE");
        } finally {
          e.target.value = "";
        }
      };

      reader.readAsText(file, "UTF-8");
    }
  };

  return { submit };
}
