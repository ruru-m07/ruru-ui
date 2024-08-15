"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
/**
 * Props for the Input component.
 */
export interface TextAreaProps
  extends Omit<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    "children" | "prefix" | "suffix"
  > {
  /**
   * Additional class names to apply to the outer container.
   *
   * @default ""
   * @type {string}
   *
   * @example
   * ```tsx
   * <Input className="w-full" />
   * ```
   */
  className?: string;
  /**
   * Label for the input element.
   *
   * @default undefined
   * @type {string}
   *
   * @example
   * ```tsx
   * <Input label="Email" />
   * ```
   */
  label?: string;
  /**
   * error - Error message to display below the input.
   *
   * @default ""
   * @type {string}
   *
   * @example
   * ```tsx
   * <Input error={"error massage"} />
   * ```
   */
  error?: string;
}
/**
 * Input component with optional prefix and suffix.
 *
 * @param className - Additional class names for the container.
 * @param label - Label for the input element.
 * @param error - Error message to display below the input.
 * @param props - Other props to be applied to the input element.
 * @param ref - Ref to the input element.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        {label && (
          <label
            className={`text-sm ${error ? "text-[#ff6166]" : "text-muted-foreground"} `}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "flex w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:border-primary/75 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-50",
            `${error ? "outline-none ring-2 ring-[#ffe6e6] dark:ring-[#561a1e] border-[#ff6166] focus-visible:dark:ring-primary/35 dark:hover:ring-[#832126] hover:ring-[#f8b9b9]" : ""}`,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <div
            className="flex items-center text-sm text-[#ff6166] mt-1"
            role="alert"
          >
            <svg
              data-testid="geist-icon"
              height="16"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width="16"
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.30761 1.5L1.5 5.30761L1.5 10.6924L5.30761 14.5H10.6924L14.5 10.6924V5.30761L10.6924 1.5H5.30761ZM5.10051 0C4.83529 0 4.58094 0.105357 4.3934 0.292893L0.292893 4.3934C0.105357 4.58094 0 4.83529 0 5.10051V10.8995C0 11.1647 0.105357 11.4191 0.292894 11.6066L4.3934 15.7071C4.58094 15.8946 4.83529 16 5.10051 16H10.8995C11.1647 16 11.4191 15.8946 11.6066 15.7071L15.7071 11.6066C15.8946 11.4191 16 11.1647 16 10.8995V5.10051C16 4.83529 15.8946 4.58093 15.7071 4.3934L11.6066 0.292893C11.4191 0.105357 11.1647 0 10.8995 0H5.10051ZM8.75 3.75V4.5V8L8.75 8.75H7.25V8V4.5V3.75H8.75ZM8 12C8.55229 12 9 11.5523 9 11C9 10.4477 8.55229 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z"
                fill="currentColor"
              ></path>
            </svg>
            <label className="ml-1" htmlFor="error">
              {error}
            </label>
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
