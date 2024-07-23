import React from "react";
import { cn } from "@/utils/cn";

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
  /**
   *  The size of the spinner. The spinner will be square with the given size. it shold be in px unit.
   * @type {number}
   * @default 20
   *
   * @example
   * ```tsx
   * <Spinner size={50} />
   * ```
   */
  size?: number;
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
 *
 * @example
 * ```tsx
 * <Spinner size={50} />
 * ```
 */
/**
 * A spinner component that indicates loading or processing.
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    /**
     * Computes the delay for each spinner element based on its index.
     * @param i - The index of the spinner element.
     * @returns The delay value in seconds.
     */
    const computeDelay = (i: number): string => `${-1.2 + i * 0.1}s`;

    /**
     * Computes the rotation value for each spinner element based on its index.
     * @param i - The index of the spinner element.
     * @returns The rotation value in degrees.
     */
    const computeRotation = (i: number): string => `${i * 30}deg`;

    return (
      <div
        className={cn(``, className)}
        role="status"
        aria-label="Loading"
        ref={ref}
        style={{
          width: `${size ? size : "20"}px`,
          height: `${size ? size : "20"}px`,
        }}
        {...props}
      >
        <div className="relative left-1/2 top-1/2 size-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-[-10%] top-[-3.9%] h-[8%] w-[24%] animate-spinner rounded-md bg-foreground"
              style={{
                animationDelay: computeDelay(i),
                transform: `rotate(${computeRotation(i)}) translate(146%)`,
              }}
            />
          ))}
        </div>
      </div>
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner };
