import { cn } from "@/utils/cn";
import React from "react";

/**
 * Props for the Label component.
 *
 * @typedef {Object} LabelProps
 * @property {React.ReactNode} [children] - The children of the Label component.
 * @property {string} [className] - Additional class names to apply to the label.
 * @property {string} [htmlFor] - The ID of the element that the label is associated with.
 * @property {React.LabelHTMLAttributes<HTMLLabelElement>} [props] - Additional HTML attributes for the label element.
 */
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The children of the Label component.
   *
   * @type {React.ReactNode}
   */
  children?: React.ReactNode;
}

/**
 * Represents the Label component.
 *
 * @param {LabelProps} props - The props for the Label component.
 * @returns {JSX.Element} - The Label component.
 */
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
