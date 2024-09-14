import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const variants = {
  gray: "bg-[#8f8f8f] text-white",
  "gray-subtle": "bg-[#1f1f1f] text-white",
  blue: "bg-[#0072f5] text-white",
  "blue-subtle": "bg-[#10233d] text-[#52a8ff]",
  purple: "bg-[#8e4ec6] text-white",
  "purple-subtle": "bg-[#2e1938] text-[#bf7af0]",
  amber: "bg-[#ffb224] text-black",
  "amber-subtle": "bg-[#331b00] text-[#f2a20d]",
  red: "bg-[#e5484d] text-white",
  "red-subtle": "bg-[#3c1618] text-[#ff6166]",
  pink: "bg-[#ea3e83] text-white",
  "pink-subtle": "bg-[#4f1c31] text-[#f75f8f]",
  green: "bg-[#45a557] text-white",
  "green-subtle": "bg-[#0f2e18] text-[#62c073]",
  teal: "bg-[#12a594] text-white",
  "teal-subtle": "bg-[#083a33] text-[#0ac7b4]",
  inverted: "bg-black text-white dark:bg-white dark:text-black",
};

const sizes = {
  sm: "text-xs px-1.5 py-[1.5px]",
  md: "text-sm px-2.5 py-[2px]",
  lg: "text-lg px-3 py-[2.5px]",
};

const badgeVariants = cva(
  "w-fit h-fit inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize",
  {
    variants: {
      variant: {
        ...variants,
      },
      size: {
        ...sizes,
      },
    },
    defaultVariants: {
      variant: "gray",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * The content to be displayed inside the badge.
   *
   * @type {React.ReactNode}
   * @required
   * @example
   * ```tsx
   * <Badge variant="primary" size="sm">New</Badge>
   * ```
   */
  children: React.ReactNode;
  /**
   * The variant of the badge (e.g., "gray", "red", etc...).
   *
   * @type {keyof typeof variants}
   * @default "gray"
   * @example
   * ```tsx
   * <Badge variant="gray"> Gray </Badge>
   * ```
   */
  variant: keyof typeof variants;
  /**
   * The size of the badge (e.g., "sm", "md", "lg").
   *
   * @type {string}
   * @default "md"
   * @example
   * ```tsx
   * <Badge size={"sm"} > sm </Badge>
   * ```
   */
  size?: "sm" | "md" | "lg";
  /**
   * An optional icon to display before the badge content.
   *
   * @type {string}
   * @default "md"
   * @example
   * ```tsx
   * <Badge icon={<CubeIcon />} variant="primary" size="sm">New</Badge>
   * ```
   */
  icon?: React.ReactNode;
}
/**
 * A badge component used to display a small notification or status indicator.
 *
 * @component
 * @example
 * ```tsx
 * <Badge variant="primary" size="sm">New</Badge>
 * ```
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the badge.
 * @param {string} [props.className] - Additional CSS class names to apply to the badge.
 * @param {string} [props.variant] - The variant of the badge (e.g., "gray", "red", etc...).
 * @param {string} [props.size="md"] - The size of the badge (e.g., "sm", "md", "lg").
 * @param {React.ReactNode} [props.icon] - An optional icon to display before the badge content.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes to apply to the badge.
 * @returns {React.ReactElement} The rendered badge component.
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant,
  size = "md",
  icon,
  ...props
}: BadgeProps): React.ReactElement => {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  );
};

export { Badge, badgeVariants };
