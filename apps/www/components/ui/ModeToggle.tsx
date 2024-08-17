"use client";

import * as React from "react";
import { useTheme } from "ruru-ui/theme";

import { Button } from "ruru-ui/components/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex my-10 space-x-5">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("system")}>system</Button>
    </div>
  );
}
