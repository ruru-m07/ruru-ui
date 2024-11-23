import React, { useEffect } from "react";
import { ComponentNode } from "../../store/useComponentStore";
import { Input } from "ruru-ui/components/input";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "ruru-ui/components/select";
import { Checkbox } from "ruru-ui/components/checkbox";
import { Switch } from "ruru-ui/components/switch";
import { PanelWrapper } from "./panelWrapper";
import { Textarea } from "ruru-ui/components/textarea";

type ButtonPropsType = {
  children?: string;
  className?: string;
  variant?: "default" | "secondary" | "tertiary" | "error" | "warning";
  size?: "default" | "small" | "large" | "icon";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

const ButtonPanel = ({
  selectedComponent,
  handleInputChange,
}: {
  selectedComponent: ComponentNode;
  handleInputChange: (key: string, value: any) => void;
}) => {
  useEffect(() => {
    console.log(selectedComponent);
  }, [selectedComponent]);

  return (
    <PanelWrapper>
      <PanelWrapper.selction name="APIs">
        <PanelWrapper.category className="space-y-4">
          <div>
            <PanelWrapper.label>children:</PanelWrapper.label>
            <Input
              type="text"
              value={selectedComponent.props.children}
              onChange={(e) => handleInputChange("children", e.target.value)}
            />
          </div>
          <div>
            <PanelWrapper.label>className:</PanelWrapper.label>
            <Textarea
              type="text"
              value={selectedComponent.props.className}
              onChange={(e) => handleInputChange("className", e.target.value)}
            />
          </div>
        </PanelWrapper.category>
        <PanelWrapper.category className="grid grid-cols-2 w-full gap-2">
          <div>
            <PanelWrapper.label>variant:</PanelWrapper.label>
            <Select
              defaultValue={selectedComponent.props.variant}
              onValueChange={(v) => handleInputChange("variant", v)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a variant" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>variants</SelectLabel>
                  <SelectSeparator />
                  {(
                    [
                      "default",
                      "secondary",
                      "tertiary",
                      "error",
                      "warning",
                    ] as NonNullable<ButtonPropsType["variant"]>[]
                  ).map((variant) => (
                    <SelectItem key={variant} value={variant}>
                      {variant}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <PanelWrapper.label>size:</PanelWrapper.label>
            <Select
              defaultValue={selectedComponent.props.size}
              onValueChange={(v) => handleInputChange("size", v)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>sizes</SelectLabel>
                  <SelectSeparator />
                  {(
                    ["default", "small", "large", "icon"] as NonNullable<
                      ButtonPropsType["size"]
                    >[]
                  ).map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid">
            <PanelWrapper.label>disabled:</PanelWrapper.label>
            <Switch
              onCheckedChange={(e) => handleInputChange("disabled", e)}
              checked={selectedComponent.props.disabled}
              id="toggle-animation"
            />
          </div>
          <div className="grid">
            <PanelWrapper.label>loading:</PanelWrapper.label>
            <Switch
              onCheckedChange={(e) => handleInputChange("loading", e)}
              checked={selectedComponent.props.loading}
              id="toggle-animation"
            />
          </div>
        </PanelWrapper.category>
      </PanelWrapper.selction>
    </PanelWrapper>
  );
};

export default ButtonPanel;

/**
 *    <label>
        children:
        <Input
          type="text"
          value={(selectedComponent.props as ButtonPropsType).children}
          onChange={(e) => handleInputChange("children", e.target.value)}
        />
      </label>
      <label>
        className:
        <Input
          type="text"
          value={(selectedComponent.props as ButtonPropsType).className}
          onChange={(e) => handleInputChange("className", e.target.value)}
        />
      </label>
      <label>
        variant:
        <Select onValueChange={(v) => handleInputChange("variant", v)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a variant" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>variants</SelectLabel>
              <SelectSeparator />
              {(
                [
                  "default",
                  "secondary",
                  "tertiary",
                  "error",
                  "warning",
                ] as NonNullable<ButtonPropsType["variant"]>[]
              ).map((variant) => (
                <SelectItem key={variant} value={variant}>
                  {variant}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>
      <label>
        size:
        <Select onValueChange={(v) => handleInputChange("size", v)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>sizes</SelectLabel>
              <SelectSeparator />
              {(
                ["default", "small", "large", "icon"] as NonNullable<
                  ButtonPropsType["size"]
                >[]
              ).map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>
      <label>
        disabled:
        <Switch
          onCheckedChange={(e) => handleInputChange("disabled", e)}
          checked={(selectedComponent.props as ButtonPropsType).disabled}
          id="toggle-animation"
        />
      </label>
      <label>
        loading:
        <Checkbox />
        <Switch
          onCheckedChange={(e) => handleInputChange("loading", e)}
          checked={(selectedComponent.props as ButtonPropsType).loading}
          id="toggle-animation"
        />
      </label>
 */
