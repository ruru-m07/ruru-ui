import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Wrapper(
  props: HTMLAttributes<HTMLDivElement>,
): React.ReactElement {
  return (
    <div
      {...props}
      className={cn(
        "rounded-xl bg-primary-foreground/30 p-4 prose-no-margin border min-h-96 flex items-center justify-center",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
