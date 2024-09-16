import React from "react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import AnimationToggle from "@/components/animationToggle";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ModeToggle />
      <AnimationToggle />
      {children}
    </div>
  );
};

export default Layout;
