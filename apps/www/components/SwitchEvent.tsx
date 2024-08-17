"use client";

import React, { useState } from "react";
import { Switch } from "ruru-ui/components/switch";

const SwiychEvent = (): React.ReactNode => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center space-x-2">
        <Switch onCheckedChange={(e) => setValue(e)} id="toggle-animation" />
        <label htmlFor="toggle value"> toggle value </label>
      </div>
      <p>{String(value)}</p>
    </div>
  );
};

export default SwiychEvent;
