"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, Link1Icon } from "@radix-ui/react-icons";
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
  }
>(
  (
    { className, children, hideChevron = false, chevronPosition, ...props },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex !m-0">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-4 text-sm font-medium transition-all",
          !hideChevron ? "[&[data-state=open]>svg.chevron]:rotate-180" : "",
          chevronPosition === "left"
            ? "flex-row-reverse data-[orientation=horizontal]:flex-col-reverse"
            : "flex-row data-[orientation=horizontal]:flex-col",
          className
        )}
        {...props}
      >
        {children}
        {!hideChevron && (
          <ChevronDownIcon className="chevron h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
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

const AccordionVariants = {
  default: {
    accordions: cn(),
    accordion: cn("border-b last-of-type:border-none"),
  },
};

const Accordions = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: keyof typeof AccordionVariants;
  }
>(({ className, type = "single", variant, ...props }, ref) => (
  // @ts-expect-error -- Multiple types
  <AccordionRoot
    ref={ref}
    type={type}
    collapsible={type === "single" ? true : undefined}
    className={cn("w-full border rounded-lg", className)}
    data-variant={variant}
    {...props}
  />
));
Accordions.displayName = "Accordions";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  Omit<
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    "value"
  > & {
    TClassName?: string;
    CClassName?: string;
    trigger: React.ReactNode;
    id: string;
  }
>(
  (
    { className, TClassName, CClassName, trigger, id, children, ...props },
    ref
  ) => (
    <AccordionItem
      ref={ref}
      className={cn("border-b last-of-type:border-none", className)}
      value={id}
      {...props}
    >
      <AccordionTrigger
        className={cn("px-4", TClassName)}
        chevronPosition="left"
      >
        <Link1Icon className="size-4" />
        <span className="w-full text-left">{trigger}</span>
      </AccordionTrigger>
      <AccordionContent
        className={cn("px-4", CClassName)}
        children={children}
      />
    </AccordionItem>
  )
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
