import { cn } from "@/utils/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const prefixRef = React.useRef<HTMLDivElement>(null);

    return (
      <div className="relative">
        {props.prefix && (
          <div
            ref={prefixRef}
            className={cn(
              "absolute top-0 left-0 h-full flex items-center justify-center pl-2 text-muted-foreground",
              `${true ? "rounded-l-md" : ""}`
            )}
          >
            {props.prefix}
            {true && <div className="h-[94%] w-px ml-2 bg-border " />}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            type === "search" &&
              "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
            type === "file" &&
              "p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground",
            "scale-75",
            className
          )}
          style={{
            paddingLeft: props.prefix ? `${0 + 12}px` : "0.75rem",
          }}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
