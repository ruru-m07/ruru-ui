"use client";

import type {
  TabsContentProps,
  TabsProps as BaseProps,
} from "@radix-ui/react-tabs";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import React, {
  useMemo,
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useRuru } from "@/provider";

const TabsPrimitiveRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>((props, ref) => {
  return (
    <TabsPrimitive.Root
      ref={ref}
      {...props}
      className={cn("flex flex-col overflow-hidden", props.className)}
    />
  );
});

TabsPrimitiveRoot.displayName = "TabsPrimitiveRoot";

const AnimatedTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ children, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorProps, setIndicatorProps] = useState({
    width: 0,
    left: 0,
  });

  const listRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!listRef.current) return;

    const activeTab = listRef.current.querySelector(
      '[data-state="active"]',
    ) as HTMLButtonElement | null;

    if (activeTab) {
      setIndicatorProps({
        width: activeTab.offsetWidth,
        left: activeTab.offsetLeft,
      });
    }
  }, [activeIndex, children]);

  return (
    <TabsPrimitive.List
      ref={(node) => {
        listRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      {...props}
      className={cn(
        "relative flex flex-row items-end gap-4 overflow-x-auto px-4 border-b",
        props.className,
      )}
    >
      {children}
      <motion.div
        className="absolute bottom-0 h-[2px] bg-primary"
        animate={{ width: indicatorProps.width, left: indicatorProps.left }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </TabsPrimitive.List>
  );
});
AnimatedTabsList.displayName = "AnimatedTabsList";

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>((props, ref) => (
  <TabsPrimitive.List
    ref={ref}
    {...props}
    className={cn(
      "flex flex-row items-end gap-4 overflow-x-auto px-4 border-b",
      props.className,
    )}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((props, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    {...props}
    className={cn(
      "whitespace-nowrap border-b border-transparent py-2 text-sm font-medium transition-colors hover:text-primary disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-primary text-muted-foreground mx-1 data-[state=active]:border-primary",
      props.className,
    )}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>((props, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    {...props}
    className={cn("p-4", props.className)}
  />
));
TabsContent.displayName = "TabsContent";

type ChangeListener = (v: string) => void;
const listeners = new Map<string, ChangeListener[]>();

function addChangeListener(id: string, listener: ChangeListener): void {
  const list = listeners.get(id) ?? [];
  list.push(listener);
  listeners.set(id, list);
}

function removeChangeListener(id: string, listener: ChangeListener): void {
  const list = listeners.get(id) ?? [];
  listeners.set(
    id,
    list.filter((item) => item !== listener),
  );
}

function update(id: string, v: string, persist: boolean): void {
  listeners.get(id)?.forEach((item) => {
    item(v);
  });

  if (persist) localStorage.setItem(id, v);
  else sessionStorage.setItem(id, v);
}

export interface TabsProps extends BaseProps {
  /**
   * Identifier for Sharing value of tabs
   * @default undefined
   */
  groupId?: string;
  /**
   * Enable persistent
   * @default false
   */
  persist?: boolean;
  /**
   * @default 0
   */
  defaultIndex?: number;
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * Tabs items
   * @default []
   */
  items?: string[];
}

export function Tabs({
  groupId,
  items = [],
  persist = false,
  defaultIndex = 0,
  disabled = false,
  ...props
}: TabsProps): React.ReactElement {
  const { animation } = useRuru();
  const values = useMemo(() => items.map((item) => toValue(item)), [items]);
  const [value, setValue] = useState(values[defaultIndex]);

  useLayoutEffect(() => {
    if (!groupId) return;

    const onUpdate: ChangeListener = (v) => {
      if (values.includes(v)) setValue(v);
    };

    const previous = persist
      ? localStorage.getItem(groupId)
      : sessionStorage.getItem(groupId);

    if (previous) onUpdate(previous);
    addChangeListener(groupId, onUpdate);
    return () => {
      removeChangeListener(groupId, onUpdate);
    };
  }, [groupId, persist, values]);

  const onValueChange = useCallback(
    (v: string) => {
      if (groupId) {
        update(groupId, v, persist);
      } else {
        setValue(v);
      }
    },
    [groupId, persist],
  );

  return (
    <TabsPrimitiveRoot
      value={value}
      onValueChange={onValueChange}
      {...props}
      className={cn("my-4", props.className)}
    >
      {animation ? (
        <AnimatedTabsList>
          {values.map((v, i) => (
            <TabsTrigger
              className="relative "
              disabled={disabled}
              key={v}
              value={v}
            >
              {items[i]}
            </TabsTrigger>
          ))}
        </AnimatedTabsList>
      ) : (
        <TabsList>
          {values.map((v, i) => (
            <TabsTrigger disabled={disabled} key={v} value={v}>
              {items[i]}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
      {props.children}
    </TabsPrimitiveRoot>
  );
}

function toValue(v: string): string {
  return v.toLowerCase().replace(/\s/, "-");
}

export function Tab({
  value,
  className,
  ...props
}: TabsContentProps): React.ReactElement {
  return (
    <TabsContent
      value={toValue(value)}
      className={cn(
        "prose-no-margin [&>figure:only-child]:-m-4 [&>figure:only-child]:rounded-none [&>figure:only-child]:border-none",
        className,
      )}
      {...props}
    />
  );
}

export { TabsList, TabsTrigger, TabsContent };
