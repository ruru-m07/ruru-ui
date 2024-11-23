import { FC } from "react";

import { Badge, BadgeProps } from "ruru-ui/components/badge";
import { Button, ButtonProps } from "ruru-ui/components/button";
import { Stack, StackProps } from "ruru-ui/components/stack";
import { Checkbox, CheckboxProps } from "ruru-ui/components/checkbox";
import { Input, InputProps } from "ruru-ui/components/input";
import { Label, LabelProps } from "ruru-ui/components/label";
import { Avatar, AvatarProps } from "ruru-ui/components/avatar";
import { AvatarGroupProps, AvatarGroup } from "ruru-ui/components/avatar";
import {
  AvatarWithBadgeProps,
  AvatarWithBadge,
} from "ruru-ui/components/avatar";

/**
 * @param {string} className - Additional class names for the button.
 * @param {"default" | "secondary" | "tertiary" | "error" | "warning"} variant - Button style variant.
 * @param {"default" | "small" | "large" | "icon"} size - Button size variant.
 * @param {boolean} asChild - Render as child component.
 * @param {React.ReactNode} prefix - Element to render before the button text.
 * @param {React.ReactNode} suffix - Element to render after the button text.
 * @param {boolean} disabled - Disable the button.
 * @param {boolean} loading - Show loading spinner inside the button.
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref.
 */

export interface ComponentRegistryType {
  Button: ButtonProps;
  Badge: BadgeProps;
  Stack: StackProps;
  Avatar: AvatarProps;
  AvatarGroup: AvatarGroupProps;
  AvatarWithBadge: AvatarWithBadgeProps;
  Checkbox: CheckboxProps;
  Input: InputProps;
  Label: LabelProps;
}

export const componentRegistryImports: Record<
  keyof ComponentRegistryType,
  React.ReactNode | FC<any>
> = {
  Button: Button,
  Badge: Badge,
  Stack: Stack,
  Avatar: Avatar,
  AvatarGroup: AvatarGroup,
  AvatarWithBadge: AvatarWithBadge,
  Checkbox: Checkbox,
  Input: Input,
  Label: Label,
};

export const componentRegistry: ComponentRegistryType = {
  Button: {
    children: "click me!",
    disabled: false,
    loading: false,
    variant: "secondary",
  },
  Badge: {
    children: "badge!",
    variant: "amber-subtle",
  },
  Stack: {},
  Avatar: {
    src: "https://github.com/ruru-m07.png",
    placeholder: "John Doe",
  },
  AvatarGroup: {
    members: [
      { src: "https://github.com/ruru-m07.png", alt: "ruru-m07" },
      { src: "https://github.com/leerob.png", alt: "leerob" },
      { src: "https://github.com/shadcn.png", alt: "shadcn" },
    ],
  },
  AvatarWithBadge: {
    src: "https://github.com/ruru-m07.png",
    badgeSrc: "https://github.com/github.png",
  },
  Checkbox: {
    indeterminate: false,
  },
  Input: {
    placeholder: "input",
  },
  Label: {
    children: "my-label",
    htmlFor: "my-label",
  },
};
