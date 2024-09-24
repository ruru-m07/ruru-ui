import type { ReactNode } from "react";
import { Wrapper } from "./wrapper";

import { Button } from "ruru-ui/components/button";
import { Spinner } from "ruru-ui/components/spinner";
import { Avatar } from "ruru-ui/components/avatar";
import { Checkbox } from "ruru-ui/components/checkbox";
import { Input } from "ruru-ui/components/input";
import { Textarea } from "ruru-ui/components/textarea";
import { Switch } from "ruru-ui/components/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "ruru-ui/components/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "ruru-ui/components/select";
import { Label } from "ruru-ui/components/label";
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "ruru-ui/components/accordion";

import { BadgePreview } from "../badgePreview";
import Tabspreview from "../tabs";
import { default as ModalPreview } from "./Modal/preview";
import FormPreview from "./form/preview";
import DropzonePreview from "./dropzone/dropzone";

export default {
  button: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Button className="w-fit" variant={"secondary"}>
          Button
        </Button>
      </div>
    </Wrapper>
  ),
  spinner: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Spinner size={30} className="my-4" />
      </div>
    </Wrapper>
  ),
  avatar: (
    <Wrapper>
      <div className="flex items-center justify-center">
        <Avatar
          size={50}
          placeholder="RU"
          src={"https://github.com/ruru-m07.png"}
        />
      </div>
    </Wrapper>
  ),
  badge: (
    <Wrapper>
      <div className="flex items-center justify-center">
        <BadgePreview />
      </div>
    </Wrapper>
  ),
  checkbox: (
    <Wrapper>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
    </Wrapper>
  ),
  tooltip: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="underline">@ruru</TooltipTrigger>
            <TooltipContent
              style={{
                padding: "0px",
                paddingRight: "10px",
                paddingLeft: "10px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p> author of ruru-UI </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Wrapper>
  ),
  input: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Input
          prefix={"https://"}
          suffix={".com"}
          placeholder="Enter your domain name"
        />
      </div>
    </Wrapper>
  ),
  textarea: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Textarea
          label={"Email"}
          placeholder="Enter your email"
          style={{ minHeight: 100, width: 500 }}
        />
      </div>
    </Wrapper>
  ),
  tabs: (
    <Wrapper>
      <Tabspreview />
    </Wrapper>
  ),
  switch: (
    <Wrapper>
      <div className="flex items-center justify-center space-x-2">
        <Switch id="airplane-mode" />
        <label htmlFor="airplane-mode">Toggle Button</label>
      </div>
    </Wrapper>
  ),
  select: (
    <Wrapper>
      <div className="flex items-center justify-center">
        <Select defaultValue="Ruby">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a programming languages" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Languages</SelectLabel>
              <SelectSeparator />
              <SelectItem value="C ">C </SelectItem>
              <SelectItem value="C++">C++</SelectItem>
              <SelectItem value="Java">Java</SelectItem>
              <SelectItem value="Python">Python</SelectItem>
              <SelectItem value="Rust">Rust</SelectItem>
              <SelectItem value="Golang">Golang</SelectItem>
              <SelectItem value="Scala">Scala</SelectItem>
              <SelectItem value="Ruby">Ruby</SelectItem>
              <SelectItem value="C#">C#</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Wrapper>
  ),
  modal: (
    <Wrapper>
      <ModalPreview />
    </Wrapper>
  ),
  label: (
    <Wrapper>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </Wrapper>
  ),
  form: (
    <Wrapper className="max-h-[500px] overflow-y-hidden">
      <FormPreview />
    </Wrapper>
  ),
  accordion: (
    <Wrapper>
      <AccordionRoot type="single" collapsible className="w-full max-w-[400px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it responsive?</AccordionTrigger>
          <AccordionContent>
            Yes. It is responsive and mobile-friendly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it customizable?</AccordionTrigger>
          <AccordionContent>
            Yes. It is customizable and supports theming.
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </Wrapper>
  ),
  dropzone: <DropzonePreview />,
} as Record<string, ReactNode>;
