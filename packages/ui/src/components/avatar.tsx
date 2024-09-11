import * as React from "react";
import { cn } from "@/utils/cn";
/**
 * Props for the Avatar component.
 */
type AvatarProps = Omit<
  React.ComponentPropsWithoutRef<"img">,
  "src" | "alt"
> & {
  /**
   * Additional class name
   * @default ""
   * @type string
   * @example
   *
   * ```tsx
   * <Avatar className="text-primary-foreground" />
   * ```
   *
   */
  className?: string;
  /**
   * Size of the avatar
   * @default 30
   * @type number
   * @example
   *
   * ```tsx
   * <Avatar size={40} />
   * ```
   *
   */
  size?: number;
  /**
   * Placeholder for the avatar
   * @type string
   * @example
   *
   * ```tsx
   * <Avatar placeholder="John Doe" />
   * ```
   *
   */
  placeholder?: string;
  /**
   * Source of the avatar
   * @type string
   * @example
   *
   *
   * ```tsx
   * <Avatar src="https://example.com/avatar.png" />
   * ```
   *
   */
  src: string;
};
/**
 * Avatar component
 * @param {AvatarProps} props
 * @returns {ReactElement}
 */
const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = 30, src, placeholder, ...props }, ref) => {
    return (
      <img
        className={cn(`rounded-full border`, className)}
        aria-label="avatar"
        ref={ref}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        src={src}
        alt={placeholder}
        {...props}
      />
    );
  },
);
Avatar.displayName = "Avatar";
/**
 * Props for the AvatarGroup component.
 */
type AvatarGroupProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /**
   * Additional class name
   * @default ""
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarGroup className="text-primary-foreground" />
   * ```
   *
   */
  className?: string;
  /**
   * Array of members
   * @type Array<{ src: string; alt: string }>
   * @example
   *
   * ```tsx
   * <AvatarGroup members={[{ src: "https://example.com/avatar.png", alt: "John Doe" }]} />
   * ```
   *
   */
  members: { src: string; alt: string }[];
  /**
   * Size of the avatar
   * @default 30
   * @type number
   * @example
   *
   * ```tsx
   * <AvatarGroup size={40} />
   * ```
   *
   */
  size?: number;
  /**
   * Limit of the avatars
   * @type number
   * @example
   *
   * ```tsx
   * <AvatarGroup limit={5} />
   * ```
   *
   */
  limit?: number;
  /**
   * Additional class name for the avatar
   *
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarGroup aClassName="text-primary-foreground" />
   * ```
   */
  aClassName?: string;
  /**
   * Additional class name for the last count
   *
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarGroup lnClassName="text-primary-foreground" />
   * ```
   */
  lnClassName?: string;
};
/**
 * AvatarGroup component
 * @param {AvatarGroupProps} props
 * @returns {ReactElement}
 */
const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { className, aClassName, lnClassName, size = 30, members, limit, ...props },
    ref,
  ) => {
    const displayedMembers =
      limit && members.length > limit ? members.slice(0, limit - 1) : members;
    const extraMembersCount =
      limit && members.length > limit ? members.length - limit + 1 : 0;

    return (
      <div className={cn(`flex`, className)} ref={ref} {...props}>
        {displayedMembers.map((member, index) => (
          <Avatar
            key={index}
            className={cn(`-ml-2 border`, aClassName)}
            size={size}
            src={member.src}
            placeholder={member.alt}
          />
        ))}
        {extraMembersCount > 0 && (
          <div
            className={cn(
              `lastcount -ml-2 flex items-center justify-center rounded-full border bg-muted`,
              lnClassName,
            )}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            +{extraMembersCount}
          </div>
        )}
      </div>
    );
  },
);
AvatarGroup.displayName = "AvatarGroup";
/**
 * Props for the AvatarWithBadge component.
 */
type AvatarWithBadgeProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /**
   * Additional class name
   *
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarWithBadge className="text-primary-foreground" />
   * ```
   *
   */
  className?: string;
  /**
   * Size of the avatar
   *
   * @type number
   * @default 30
   * @example
   *
   * ```tsx
   * <AvatarWithBadge size={40} />
   * ```
   *
   */
  size?: number;
  /**
   * Source of the avatar
   *
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarWithBadge src="https://example.com/avatar.png" />
   * ```
   *
   */
  src: string;
  /**
   * Placeholder for the avatar
   *
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarWithBadge placeholder="John Doe" />
   * ```
   *
   */
  placeholder?: string;
  /**
   * Source of the badge
   *
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarWithBadge badgeSrc="https://example.com/badge.png" />
   * ```
   *
   */
  badgeSrc: string;
  /**
   * Additional class name for the avatar
   *
   * @type string
   * @example
   *
   * ```tsx
   * <AvatarWithBadge iClassName="text-primary-foreground" />
   * ```
   */
  iClassName?: string;
  /**
   * Additional class name for the badge
   *
   * @type string
   *
   * @example
   *
   * ```tsx
   * <AvatarWithBadge sClassName="text-primary-foreground" />
   * ```
   */
  sClassName?: string;
};
/**
 * AvatarWithBadge component
 *
 * @param {AvatarWithBadgeProps} props
 * @returns {ReactElement}
 */
const AvatarWithBadge = React.forwardRef<HTMLDivElement, AvatarWithBadgeProps>(
  (
    {
      className,
      sClassName,
      iClassName,
      size = 30,
      src,
      placeholder,
      badgeSrc,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn("relative inline-block", className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        ref={ref}
        {...props}
      >
        <img
          className={cn("rounded-full border", iClassName)}
          style={{
            width: "100%",
            height: "100%",
          }}
          src={src}
          alt={placeholder}
        />
        <img
          className={cn(
            "absolute bottom-0 left-0 rounded-full border",
            sClassName,
          )}
          style={{
            width: `${size / 3}px`,
            height: `${size / 3}px`,
          }}
          src={badgeSrc}
          alt="badge"
        />
      </div>
    );
  },
);
AvatarWithBadge.displayName = "AvatarWithBadge";

export { Avatar, AvatarGroup, AvatarWithBadge };
