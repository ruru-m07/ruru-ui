import { cn } from "@/utils/cn";
import React from "react";

type SpinnerProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Additional class names for the spinner.
   * @type {string}
   * @default undefined
   *
   * @example
   * ```tsx
   * <Spinner className="text-blue-500" />
   * ```
   */
  className?: string;
};

/**
 * A spinner component to indicate loading state.
 * Displays a rotating spinner with configurable class names.
 *
 * @param {string} className - Additional class names for the spinner.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref.
 *
 * @example
 * ```tsx
 * <Spinner className="text-blue-500" />
 * ```
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, ...props }, ref) => {
    const computeDelay = (i: number): string => `${-1.2 + i * 0.1}s`;
    const computeRotation = (i: number): string => `${i * 30}deg`;

    return (
      <div
        className={cn("size-5", className)}
        role="status"
        aria-label="Loading"
        ref={ref}
        {...props}
      >
        <div className="relative left-1/2 top-1/2 size-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-[-10%] top-[-3.9%] h-[8%] w-[24%] animate-spinner bg-foreground"
              style={{
                animationDelay: computeDelay(i),
                transform: `rotate(${computeRotation(i)}) translate(146%)`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };
