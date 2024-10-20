"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

interface SwitchProps extends React.ComponentPropsWithoutRef<"button"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}

/**
 * Switch component
 *
 * @param {string} className - Additional class names for the switch.
 * @param {boolean} checked - Whether the switch is checked.
 * @param {(checked: boolean) => void} onCheckedChange - Callback when the switch is checked or unchecked.
 * @param {boolean} defaultChecked - Whether the switch is checked by default.
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref.
 *
 * @example
 *
 * ```tsx
 * <Switch />
 * ```
 */
const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    { className, checked, onCheckedChange, defaultChecked = false, ...props },
    ref,
  ) => {
    const [isCheckedInternal, setIsCheckedInternal] =
      React.useState(defaultChecked);

    const isControlled = checked !== undefined;
    const isCheckedValue = isControlled ? checked : isCheckedInternal;

    const handleClick = () => {
      const newChecked = !isCheckedValue;
      if (!isControlled) {
        setIsCheckedInternal(newChecked);
      }
      if (onCheckedChange) {
        onCheckedChange(newChecked);
      }
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isCheckedValue}
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          isCheckedValue ? "bg-primary" : "bg-accent",
          className,
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
            isCheckedValue ? "translate-x-4" : "translate-x-0",
          )}
        />
      </button>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
