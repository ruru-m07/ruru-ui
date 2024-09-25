"use client";

import { VariantProps } from "class-variance-authority";
import { Link } from "lucide-react";
import React from "react";
import {
  Accordion,
  Accordions,
  AccordionsVariants,
} from "ruru-ui/components/accordion";
import { Button } from "ruru-ui/components/button";
import { Label } from "ruru-ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "ruru-ui/components/select";

type Props = {};

export default function AccordionVariants({}: Props) {
  const [variant, setVariant] =
    React.useState<VariantProps<typeof AccordionsVariants>["variant"]>(
      "default"
    );

  const [theme, setTheme] =
    React.useState<VariantProps<typeof AccordionsVariants>["theme"]>("default");

  return (
    <div className="min-h-[400px] flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-row gap-2 items-center">
        <Select
          value={variant as any}
          onValueChange={(value: any) => setVariant(value)}
        >
          <SelectTrigger className="w-[180px]">
            <Label>
              <span>Variant</span>
            </Label>
            <SelectValue placeholder="Select a varient" />
          </SelectTrigger>
          <SelectContent>
            {["default", "primary", "none"].map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={theme as any}
          onValueChange={(value: any) => setTheme(value)}
        >
          <SelectTrigger className="w-[180px]">
            <Label>
              <span>Theme</span>
            </Label>
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            {["default", "primary", "secondary", "tertiary"].map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Accordions
        className="max-w-[600px]"
        type="single"
        variant={variant}
        theme={theme}
      >
        {Array.from(new Array(4)).map((_, index) => (
          <Accordion
            id={`item-${index}`}
            key={index}
            trigger={
              <>
                <Button
                  variant={"tertiary"}
                  className="text-current hover:opacity-70 hover:bg-transparent transition-all"
                >
                  <Link size={16} />
                </Button>
                <span className="w-full text-left py-4 text-current">
                  Accordion Item {index + 1}
                </span>
              </>
            }
          >
            This is the content of the accordion item {index + 1}
          </Accordion>
        ))}
      </Accordions>
    </div>
  );
}
