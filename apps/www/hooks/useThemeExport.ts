import { useThemeContext } from "@/contexts/ThemeContext";

export default function useThemeExport() {
  const {
    setCssVariables,
    setDarkThemeSettings,
    setHex,
    setLightThemeSettings,
    setMainColor,
    setRGB,
    setMode,
    setTheme,
    ...variables
  } = useThemeContext();

  const exportTheme = () => {
    const jsonData = variables;
    const jsonString = JSON.stringify(jsonData);

    const blob = new Blob([jsonString], { type: "application/json" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "theme.json";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return { exportTheme };
}
