import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/85 text-primary-foreground shadow hover:shadow-md",
        secondary:
          "bg-primary-foreground dark:hover:bg-[#202020]  hover:bg-[#f3f3f3] border-[1.5px] border-input",
        tertiary: "dark:hover:bg-[#202020] hover:bg-[#f3f3f3] text-primary",
        error: "bg-destructive hover:bg-destructive/75",
        warning: "bg-warning hover:bg-[#d27504] text-primary-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        small: "h-8 rounded-md px-3 text-xs",
        large: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "prefix" | "suffix"
    >,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, prefix, suffix, disabled = false, loading, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <div className={disabled ? "cursor-not-allowed" : undefined}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }), disabled && "dark:bg-[#202020] bg-[#f3f3f3]")}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {loading && (
            <Spinner className="mr-2" />
          )}
          {prefix && (
            <span className="mr-2 flex items-center justify-center">
              {prefix}
            </span>
          )}
          {props.children}
          {suffix && (
            <span className="ml-2 flex items-center justify-center">
              {suffix}
            </span>
          )}
        </Comp>
      </div>
    );
  }
);
Button.displayName = "Button";
