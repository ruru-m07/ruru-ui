"use client";

import React from "react";
import { Switch } from "ruru-ui/components/switch";
import { useRuru } from "ruru-ui/provider";

const AnimationToggle = () => {
  const { setAnimation } = useRuru();
  return (
    <div className="flex items-center space-x-2">
      <Switch
        defaultChecked
        onCheckedChange={(e) => setAnimation(e)}
        id="toggle-animation"
      />
      <label htmlFor="toggle-animation"> toggle animation </label>
    </div>
  );
};

export default AnimationToggle;
