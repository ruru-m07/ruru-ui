import { ChangeEvent } from "react";
import useThemeImport from "@/hooks/useThemeImport";
import { Button } from "ruru-ui/components/button";
import { Input } from "ruru-ui/components/input";
import { Download } from "lucide-react";

export default function ThemeImport() {
  const { submit } = useThemeImport();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    submit(file, e);
  };

  return (
    <div className="flex items-center">
      <Button variant={"secondary"} size={"small"}>
        <label htmlFor="theme-file">
          <Download size={16} strokeWidth={1.5} />
        </label>
        <Input
          onChange={onChange}
          id="theme-file"
          type="file"
          className="invisible w-0 h-0 p-0 m-0"
          placeholder="Import theme"
        />
      </Button>
    </div>
  );
}
