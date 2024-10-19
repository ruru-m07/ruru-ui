"use client";

import React, { ReactNode, CSSProperties, useEffect, useState } from "react";
import clsx from "clsx";

type Direction = "row" | "column";
type Align = "start" | "center" | "end" | "stretch" | "baseline";
type Justify =
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly";
type Wrap = "nowrap" | "wrap" | "wrap-reverse";
type Visibility = "visible" | "hidden" | "collapse";

type Spacing =
  | number
  | string
  | {
      l?: number | string;
      r?: number | string;
      t?: number | string;
      b?: number | string;
    };
type Responsive<T> = T | { sm?: T; md?: T; lg?: T; xl?: T };

/**
 * Properties for the `Stack` component, used to manage layout by defining direction, spacing, alignment, and more.
 */
interface StackProps {
  /**
   * The content elements to be rendered inside the Stack.
   *
   * @example
   * <Stack>
   *   <div>Child 1</div>
   *   <div>Child 2</div>
   * </Stack>
   */
  children?: ReactNode;

  /**
   * Defines the direction of the layout: "row" or "column". Supports responsive values.
   *
   * @example
   * <Stack direction={{ sm: "column", lg: "row" }}>
   *   <div>Item 1</div>
   *   <div>Item 2</div>
   * </Stack>
   */
  direction?: Responsive<Direction>;

  /**
   * Space between child elements. Accepts numeric values (in pixels) or responsive values.
   *
   * @example
   * <Stack gap={{ sm: 4, md: 8 }}>
   *   <div>Box 1</div>
   *   <div>Box 2</div>
   * </Stack>
   */
  gap?: Responsive<number>;

  /**
   * Aligns child elements along the cross axis (vertical in a row, horizontal in a column).
   *
   * @example
   * <Stack align={{ sm: "start", lg: "center" }}>
   *   <div>Aligned Item</div>
   * </Stack>
   */
  align?: Responsive<Align>;

  /**
   * Justifies child elements along the main axis.
   *
   * @example
   * <Stack justify="space-between">
   *   <div>Box 1</div>
   *   <div>Box 2</div>
   * </Stack>
   */
  justify?: Responsive<Justify>;

  /**
   * Controls how the children wrap onto multiple lines.
   *
   * @example
   * <Stack wrap="wrap">
   *   {Array(10).fill(<div className="box" />)}
   * </Stack>
   */
  wrap?: Responsive<Wrap>;

  /**
   * Determines the growth factor of the Stack when used with sibling elements.
   *
   * @example
   * <div className="flex">
   *   <Stack grow={1} className="bg-gray-300" />
   *   <Stack grow={2} className="bg-gray-500" />
   * </div>
   */
  grow?: number;

  /**
   * Padding around the Stack. Supports fixed or responsive values.
   *
   * @example
   * <Stack padding={{ sm: 10, lg: 20 }} className="bg-gray-100">
   *   <div>Content</div>
   * </Stack>
   */
  padding?: Responsive<Spacing>;

  /**
   * Margin applied to the Stack. Supports fixed or responsive values.
   *
   * @example
   * <Stack margin={{ sm: "5px", lg: "20px" }}>
   *   <div>Box</div>
   * </Stack>
   */
  margin?: Responsive<Spacing>;

  /**
   * Sets the width of the Stack.
   *
   * @example
   * <Stack width="100%">
   *   <div>Full Width</div>
   * </Stack>
   */
  width?: Responsive<number | string>;

  /**
   * Sets the height of the Stack.
   *
   * @example
   * <Stack height={200}>
   *   <div>Tall Box</div>
   * </Stack>
   */
  height?: Responsive<number | string>;

  /**
   * Border for the Stack, defined in CSS syntax.
   *
   * @example
   * <Stack border="1px solid #ddd">
   *   <div>Bordered Stack</div>
   * </Stack>
   */
  border?: string;

  /**
   * Border radius for the Stack.
   *
   * @example
   * <Stack borderRadius={8}>
   *   <div>Rounded Box</div>
   * </Stack>
   */
  borderRadius?: string | number;

  /**
   * Background color of the Stack.
   *
   * @example
   * <Stack backgroundColor="#fafafa">
   *   <div>Content</div>
   * </Stack>
   */
  backgroundColor?: string;

  /**
   * Maximum width of the Stack.
   *
   * @example
   * <Stack maxWidth={400}>
   *   <div>Constrained Width</div>
   * </Stack>
   */
  maxWidth?: string | number;

  /**
   * Maximum height of the Stack.
   *
   * @example
   * <Stack maxHeight={300}>
   *   <div>Constrained Height</div>
   * </Stack>
   */
  maxHeight?: string | number;

  /**
   * Aligns content when the Stack wraps to multiple rows.
   *
   * @example
   * <Stack wrap="wrap" alignContent="center">
   *   <div>Box 1</div>
   *   <div>Box 2</div>
   * </Stack>
   */
  alignContent?: Responsive<
    "start" | "center" | "end" | "stretch" | "space-between" | "space-around"
  >;

  /**
   * Controls the stacking order of the Stack using CSS `z-index`.
   *
   * @example
   * <Stack zIndex={10} className="relative">
   *   <div>Content with Z-Index</div>
   * </Stack>
   */
  zIndex?: number;

  /**
   * Controls the visibility of the Stack. Can be "visible", "hidden", or "collapse".
   *
   * @example
   * <Stack visibility={{ sm: "hidden", md: "visible" }}>
   *   <div>Toggle Visibility</div>
   * </Stack>
   */
  visibility?: Responsive<Visibility>;

  /**
   * Additional CSS class names to apply to the Stack.
   *
   * @example
   * <Stack className="custom-stack">
   *   <div>Styled Stack</div>
   * </Stack>
   */
  className?: string;

  /**
   * Additional inline styles to apply to the Stack.
   *
   * @example
   * <Stack style={{ border: "1px solid red" }}>
   *   <div>Styled Inline</div>
   * </Stack>
   */
  style?: CSSProperties;
}

const getResponsiveValue = <T,>(
  value: Responsive<T> | undefined,
  defaultValue: T,
): T => {
  if (typeof value !== "object" || value === null) return value ?? defaultValue;
  if (typeof window === "undefined") return defaultValue;

  const width = window.innerWidth;
  if (width >= 1280 && (value as { xl?: T }).xl !== undefined)
    return (value as { xl?: T }).xl as T;
  if (width >= 1024 && (value as { lg?: T }).lg !== undefined)
    return (value as { lg?: T }).lg as T;
  if (width >= 768 && (value as { md?: T }).md !== undefined)
    return (value as { md?: T }).md as T;
  if ((value as { sm?: T }).sm !== undefined)
    return (value as { sm?: T }).sm as T;

  return defaultValue;
};

const parseSpacing = (value: Spacing) => {
  if (typeof value === "object") {
    return {
      paddingLeft: value.l ?? 0,
      paddingRight: value.r ?? 0,
      paddingTop: value.t ?? 0,
      paddingBottom: value.b ?? 0,
    };
  }
  return { padding: value };
};

/**
 * A flexible layout component that arranges child elements in a stack with customizable
 * direction, alignment, spacing, and responsiveness. It supports responsive breakpoints
 * and various styling options, making it suitable for a wide range of layouts.
 *
 * @component
 * @param {ReactNode} [children] - Elements to be rendered inside the Stack.
 * @param {Responsive<"row" | "column">} [direction="row"] - Defines the layout direction
 * of the stack. Supports responsive breakpoints.
 * @param {Responsive<number>} [gap=0] - Specifies the space between child elements.
 * @param {Responsive<"start" | "center" | "end" | "stretch" | "baseline">} [align="stretch"] -
 * Aligns children along the cross axis.
 * @param {Responsive<"start" | "center" | "end" | "space-between" | "space-around" | "space-evenly">}
 * [justify="start"] - Distributes children along the main axis.
 * @param {Responsive<"nowrap" | "wrap" | "wrap-reverse">} [wrap="nowrap"] - Controls whether
 * child elements should wrap onto multiple lines.
 * @param {number} [grow] - Determines how much the stack should grow relative to its siblings.
 * @param {Responsive<Spacing>} [padding=0] - Applies padding to the stack. Supports fixed and
 * responsive values.
 * @param {Responsive<Spacing>} [margin=0] - Applies margin to the stack. Supports fixed and
 * responsive values.
 * @param {Responsive<number | string>} [width="auto"] - Sets the width of the stack.
 * Supports responsive values.
 * @param {Responsive<number | string>} [height="auto"] - Sets the height of the stack.
 * @param {string} [border] - Defines the border for the stack.
 * @param {string | number} [borderRadius] - Specifies the border radius of the stack.
 * @param {string} [backgroundColor] - Sets the background color of the stack.
 * @param {string | number} [maxWidth] - Defines the maximum width of the stack.
 * @param {string | number} [maxHeight] - Defines the maximum height of the stack.
 * @param {Responsive<"start" | "center" | "end" | "stretch" | "space-between" | "space-around">}
 * [alignContent="stretch"] - Aligns rows of content along the cross axis.
 * @param {number} [zIndex] - Controls the stack's stacking order on the page.
 * @param {Responsive<"visible" | "hidden" | "collapse">} [visibility="visible"] - Controls
 * the visibility of the stack.
 * @param {string} [className] - Additional CSS classes to apply to the stack.
 * @param {CSSProperties} [style] - Inline styles to be applied to the stack.
 *
 * @example
 * ```tsx
 * <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 4, lg: 16 }}>
 *   <div className="box" />
 *   <div className="box" />
 * </Stack>
 * ```
 *
 * @example
 * ```tsx
 * <Stack wrap="wrap" alignContent="center" height={200}>
 *   {Array.from({ length: 6 }).map((_, i) => (
 *     <div key={i} className="box" />
 *   ))}
 * </Stack>
 * ```
 */
export const Stack: React.FC<StackProps> = ({
  children,
  direction,
  gap,
  align,
  justify,
  wrap,
  grow,
  padding,
  margin,
  width,
  height,
  border,
  borderRadius,
  backgroundColor,
  maxWidth,
  maxHeight,
  alignContent,
  zIndex,
  visibility,
  className = "",
  style = {},
}) => {
  const [responsiveStyles, setResponsiveStyles] = useState<CSSProperties>({});

  useEffect(() => {
    const updateStyles = () => {
      const newStyles: CSSProperties = {
        display: "flex",
      };

      if (direction)
        newStyles.flexDirection = getResponsiveValue(direction, "row");
      if (gap !== undefined) newStyles.gap = `${getResponsiveValue(gap, 0)}px`;
      if (align) newStyles.alignItems = getResponsiveValue(align, "stretch");
      if (justify)
        newStyles.justifyContent = getResponsiveValue(justify, "start");
      if (wrap) newStyles.flexWrap = getResponsiveValue(wrap, "nowrap");
      if (grow !== undefined) newStyles.flexGrow = grow;

      if (padding !== undefined) {
        const resolvedPadding = parseSpacing(getResponsiveValue(padding, 0));
        Object.assign(newStyles, resolvedPadding);
      }

      if (margin !== undefined) {
        const resolvedMargin = parseSpacing(getResponsiveValue(margin, 0));
        Object.assign(newStyles, resolvedMargin);
      }

      if (width) {
        const widthValue = getResponsiveValue(width, "auto");
        newStyles.width = typeof widthValue === "number" ? `${widthValue}px` : widthValue;
      }
      if (height) {
        const heightValue = getResponsiveValue(height, "auto");
        newStyles.height = typeof heightValue === "number" ? `${heightValue}px` : heightValue;
      }
      if (visibility)
        newStyles.visibility = getResponsiveValue(visibility, "visible");
      if (border) newStyles.border = border;
      if (borderRadius) newStyles.borderRadius = borderRadius;
      if (backgroundColor) newStyles.backgroundColor = backgroundColor;
      if (maxWidth) newStyles.maxWidth = maxWidth;
      if (maxHeight) newStyles.maxHeight = maxHeight;
      if (alignContent)
        newStyles.alignContent = getResponsiveValue(alignContent, "stretch");
      if (zIndex !== undefined) newStyles.zIndex = zIndex;

      setResponsiveStyles(newStyles);
    };

    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => window.removeEventListener("resize", updateStyles);
  }, [
    direction,
    gap,
    align,
    justify,
    wrap,
    padding,
    margin,
    width,
    height,
    visibility,
    border,
    borderRadius,
    backgroundColor,
    maxWidth,
    maxHeight,
    alignContent,
    zIndex,
  ]);

  return (
    <div className={clsx(className)} style={{ ...responsiveStyles, ...style }}>
      {children}
    </div>
  );
};
