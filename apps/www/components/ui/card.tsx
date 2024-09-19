import { cn } from "ruru-ui/utils";
import React from "react";

export default function Card({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "rounded-md space-x-3 w-[100%] py-4 flex items-center justify-around my-2 border-[1.5px] border-input ",
        className,
      )}
    >
      {children}
    </div>
  );
}
