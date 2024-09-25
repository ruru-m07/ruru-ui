"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/cn";

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, orientation, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(
      orientation === "horizontal" ? "flex flex-row" : "",
      className
    )}
    orientation={orientation}
    {...props}
  />
));

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "data-[orientation=vertical]:border-b",
      "data-[orientation=horizontal]:flex data-[orientation=horizontal]:border-r",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    hideChevron?: boolean;
    chevronPosition?: "left" | "right";
    chevronRotation?: "full" | "half";
  }
>(
  (
    {
      className,
      children,
      hideChevron = false,
      chevronPosition,
      chevronRotation = "full",
      ...props
    },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex !m-0 !text-current">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group/accordion flex flex-1 items-center justify-between gap-4 py-4 text-sm font-medium transition-all",
          chevronPosition === "left"
            ? "flex-row-reverse data-[orientation=horizontal]:flex-col-reverse"
            : "flex-row data-[orientation=horizontal]:flex-col",
          className
        )}
        {...props}
      >
        {children}
        {!hideChevron && (
          <ChevronDownIcon
            className={cn(
              "chevron h-4 w-4 shrink-0 text-current transition-transform duration-200",
              chevronRotation === "full"
                ? "rotate-0 group-data-[state=open]/accordion:rotate-180"
                : "-rotate-90 group-data-[state=open]/accordion:rotate-0"
            )}
          />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm",
      "data-[state=closed]:data-[orientation=vertical]:animate-accordion-up data-[state=open]:data-[orientation=vertical]:animate-accordion-down",
      "data-[state=closed]:data-[orientation=horizontal]:animate-accordion-left data-[state=open]:data-[orientation=horizontal]:animate-accordion-right"
    )}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export const AccordionsVariants = cva(cn("w-full rounded-lg"), {
  variants: {
    variant: {
      default: cn(),
      primary: cn(),
      none: cn("border-none rounded-none"),
    },
    theme: {
      default: cn("text-primary-foreground"),
      primary: "border",
      secondary: cn("border text-foreground"),
      tertiary: cn("border-none text-primary-foreground"),
    },
  },
  defaultVariants: {
    variant: "default",
    theme: "default",
  },
});

export const AccordionVariants = cva(
  cn(
    "w-full border-b last-of-type:border-none first-of-type:rounded-t-lg last-of-type:rounded-b-lg transition-colors"
  ),
  {
    variants: {
      variant: {
        default: cn(),
        primary: cn(),
        none: cn(
          "border-none rounded-none first-of-type:rounded-none last-of-type:rounded-none"
        ),
      },
      theme: {
        default: cn("bg-primary hover:bg-primary/85 text-primary-foreground"),
        primary: cn("bg-none text-foreground"),
        secondary: cn(
          "bg-secondary/55 hover:bg-secondary text-secondary-foreground"
        ),
        tertiary: cn("bg-none hover:bg-accent/75 border-none text-foreground"),
      },
    },
    defaultVariants: {
      variant: "default",
      theme: "default",
    },
  }
);

/**
 * Accordions are a collection of vertically stacked sections that expand and collapse on click.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>} props
 *
 * @prop {"default", "primary", "none"} variant - The variant of the accordion.
 * @prop {"default", "primary", "secondary", "tertiary"} theme - The theme of the accordion.
 * @prop {"single" | "multiple"} type - The type of the accordion.
 * @prop {React.ReactNode} children - The content of the accordion.
 * @prop {string} className - The class name of the accordion.
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref.
 *
 * @example
 * ```tsx
 * <Accordions variant="primary" theme="primary">
 *  <Accordion id="item-1" trigger="Item 1">
 *   Content 1
 *  </Accordion>
 * </Accordions>
 */
const Accordions = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    /**
     * The variant of the accordion.
     * @default "default"
     * @type {VariantProps<typeof AccordionsVariants>["variant"]}
     *
     * @example
     * ```tsx
     * <Accordions variant="primary">
     *  <Accordion id="item-1" trigger="Item 1">
     *   Content 1
     *  </Accordion>
     * </Accordions>
     * ```
     */
    variant?: VariantProps<typeof AccordionsVariants>["variant"];
    /**
     * The theme of the accordion.
     * @default "default"
     * @type {VariantProps<typeof AccordionsVariants>["theme"]}
     *
     * @example
     * ```tsx
     * <Accordions theme="primary">
     *  <Accordion id="item-1" trigger="Item 1">
     *   Content 1
     *  </Accordion>
     * </Accordions>
     */
    theme?: VariantProps<typeof AccordionsVariants>["theme"];
  }
>(
  (
    {
      className,
      type = "single",
      variant = "default",
      theme = "default",
      children,
      ...props
    },
    ref
  ) => {
    const newClildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // @ts-expect-error -- Unknown type
        return React.cloneElement(child, { variant, theme });
      }
      return child;
    });

    return (
      // @ts-expect-error -- Multiple types
      <AccordionRoot
        ref={ref}
        type={type}
        collapsible={type === "single" ? true : undefined}
        className={cn(AccordionsVariants({ variant, theme }), className)}
        data-variant={variant}
        data-theme={theme}
        {...props}
      >
        {newClildren}
      </AccordionRoot>
    );
  }
);
Accordions.displayName = "Accordions";

/**
 * An accordion is a vertically stacked section that expands and collapses on click.
 *
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>} props
 *
 * @prop {"default", "primary", "none"} variant - The variant of the accordion.
 * @prop {"default", "primary", "secondary", "tertiary"} theme - The theme of the accordion.
 * @prop {string} TClassName - The class name of the trigger.
 * @prop {string} CClassName - The class name of the content.
 * @prop {React.ReactNode} trigger - The trigger of the accordion.
 * @prop {string} id - The id of the accordion.
 * @prop {React.ReactNode} children - The content of the accordion.
 * @prop {string} className - The class name of the accordion.
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref.
 *
 * @example
 * ```tsx
 * <Accordion id="item-1" trigger="Item 1">
 *  Content 1
 * </Accordion>
 */
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  Omit<
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    "value"
  > & {
    variant?: VariantProps<typeof AccordionVariants>["variant"];
    theme?: VariantProps<typeof AccordionVariants>["theme"];
    /**
     * The class name of the trigger.
     * @type {string}
     */
    TClassName?: string;
    /**
     * The class name of the content.
     * @type {string}
     */
    CClassName?: string;
    /**
     * The trigger of the accordion.
     * @type {React.ReactNode}
     *
     * @example
     * ```tsx
     * <Accordion id="item-1" trigger="Item 1">
     *  Content 1
     * </Accordion>
     */
    trigger: React.ReactNode;
    /**
     * The id of the accordion.
     * @type {string}
     *
     * @example
     * ```tsx
     * <Accordion id="item-1" trigger="Item 1">
     *  Content 1
     * </Accordion>
     */
    id: string;
  }
>(
  (
    {
      className,
      variant = "default",
      theme = "default",
      TClassName,
      CClassName,
      trigger,
      id,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <AccordionItem
        ref={ref}
        className={cn(AccordionVariants({ variant, theme }), className)}
        value={id}
        data-variant={variant}
        data-theme={theme}
        {...props}
      >
        <AccordionTrigger
          className={cn("px-4 py-0", TClassName)}
          chevronPosition={
            ["primary"].includes(variant || "") ? "left" : "right"
          }
          chevronRotation={
            ["primary"].includes(variant || "") ? "half" : "full"
          }
          data-variant={variant}
          data-theme={theme}
        >
          {trigger}
        </AccordionTrigger>
        <AccordionContent
          className={cn("px-4", CClassName)}
          data-variant={variant}
          data-theme={theme}
          children={children}
        />
      </AccordionItem>
    );
  }
);
Accordion.displayName = "Accordion";

export {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordions,
  Accordion,
};
