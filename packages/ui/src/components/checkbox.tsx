"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useRuru } from "@/provider";

type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  indeterminate?: boolean;
};
/**
 * Checkbox component
 *
 * @param {React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>} props
 * @param {boolean} [props.indeterminate=false] - Indeterminate state of the checkbox
 * @returns {React.ReactElement} - The checkbox component
 * @example
 *
 * ```tsx
 * <Checkbox indeterminate />
 * ```
 *
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, indeterminate = false, ...props }, ref) => {
  const { animation } = useRuru();

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        `peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
          indeterminate
            ? "disabled:cursor-default"
            : "disabled:cursor-not-allowed"
        } disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground`,
        className,
      )}
      disabled={indeterminate}
      {...props}
    >
      {indeterminate ? (
        animation ? (
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </motion.svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        )
      ) : (
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
          asChild={animation}
        >
          {animation ? (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </motion.svg>
          ) : (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          )}
        </CheckboxPrimitive.Indicator>
      )}
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
