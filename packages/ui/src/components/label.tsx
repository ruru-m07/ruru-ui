import { cn } from "@/utils/cn";
import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (props, ref) => (
    <label
      ref={ref}
      className={cn("text-sm text-muted-foreground", props.className)}
      {...props}
    >
      {props.children}
    </label>
  ),
);
Label.displayName = "Label";
