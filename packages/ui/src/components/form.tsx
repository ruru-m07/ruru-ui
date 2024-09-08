"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { Label, LabelProps } from "./label";
import { cn } from "@/utils/cn";

/**
 * Form component that provides form context to its children.
 */
const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

interface FormLabelProps extends LabelProps {
  error?: boolean;
  formItemId?: string;
}

/**
 * Context for form field state.
 */
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

/**
 * FormField component that wraps a `Controller` from `react-hook-form` and provides context for the field.
 *
 * @param props - Props for the `Controller` component.
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

/**
 * Hook to access form field context and state.
 *
 * @returns Object containing form field state and context values.
 */
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

/**
 * Context for form item state.
 */
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

/**
 * FormItem component that provides context for a form item and renders a div.
 *
 * @param props - Props for the div element.
 */
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

/**
 * FormLabel component that renders a label element and displays an error state if present.
 *
 * @param props - Props for the label element.
 */
const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <Label
        ref={ref}
        className={cn("text-xs", error && "text-[#ff6166]", props.className)}
        htmlFor={formItemId}
        {...props}
      >
        {props.children}
      </Label>
    );
  },
);
FormLabel.displayName = "FormLabel";

/**
 * FormControl component that renders a slot element and manages aria attributes for accessibility.
 *
 * @param props - Props for the slot element.
 */
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

/**
 * FormDescription component that renders a paragraph element for form field descriptions.
 *
 * @param props - Props for the paragraph element.
 */
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

/**
 * FormMessage component that renders a paragraph element for form field error messages.
 *
 * @param props - Props for the paragraph element.
 */
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-[#ff6166]", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormLabel,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
