"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/utils/cn";

/**
 * TooltipProvider component.
 * Provides context for all tooltip components.
 * 
 * @component
 * @example
 * <TooltipProvider>
 *   <Tooltip>
 *     <TooltipTrigger asChild>
 *       <button>Hover or focus me</button>
 *     </TooltipTrigger>
 *     <TooltipContent>
 *       Tooltip content here
 *     </TooltipContent>
 *   </Tooltip>
 * </TooltipProvider>
 */
const TooltipProvider = TooltipPrimitive.Provider;

/**
 * Tooltip component.
 * The root component for the tooltip.
 * 
 * @component
 * @example
 * <Tooltip>
 *   <TooltipTrigger asChild>
 *     <button>Hover or focus me</button>
 *   </TooltipTrigger>
 *   <TooltipContent>
 *     Tooltip content here
 *   </TooltipContent>
 * </Tooltip>
 */
const Tooltip = TooltipPrimitive.Root;

/**
 * TooltipTrigger component.
 * The element that triggers the display of the tooltip.
 * 
 * @component
 * @example
 * <TooltipTrigger asChild>
 *   <button>Hover or focus me</button>
 * </TooltipTrigger>
 */
const TooltipTrigger = TooltipPrimitive.Trigger;

/**
 * TooltipContent component.
 * The content of the tooltip that appears when the trigger is activated.
 * 
 * @component
 * @param {string} className - Additional classes to style the tooltip content.
 * @param {number} sideOffset - Offset from the trigger element.
 * @param {React.Ref} ref - Forwarded ref to the content element.
 * @param {React.ReactNode} props.children - Children to be rendered inside the tooltip.
 * @example
 * <TooltipContent>
 *   Tooltip content here
 * </TooltipContent>
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 5, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    className={cn(
      "h-fit data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-primary-foreground select-none rounded-[4px] bg-primary px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",
      className
    )}
    sideOffset={sideOffset}
    {...props}
  >
    {props.children}
    <TooltipPrimitive.Arrow className="fill-primary" />
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
