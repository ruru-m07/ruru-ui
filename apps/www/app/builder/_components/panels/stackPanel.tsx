import React, { useEffect } from "react";
import {
  Direction,
  Align,
  Justify,
  Wrap,
  Spacing,
  Visibility,
  AlignContent,
} from "ruru-ui/components/stack";
import { PanelWrapper } from "./panelWrapper";
import { ComponentNode } from "../../store/useComponentStore";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignStartVertical,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  ArrowRight,
  BetweenVerticalEnd,
  MoveDown,
  Spline,
} from "lucide-react";
import { Input } from "ruru-ui/components/input";
import { Checkbox } from "ruru-ui/components/checkbox";
import { Textarea } from "ruru-ui/components/textarea";

type StackPropsType = {
  children?: React.ReactNode;
  direction?: Direction;
  gap?: number;
  align?: Align;
  justify?: Justify;
  wrap?: Wrap;
  grow?: number;
  padding?: Spacing;
  margin?: Spacing;
  width?: number | string;
  height?: number | string;
  border?: string;
  borderRadius?: string | number;
  backgroundColor?: string;
  alignContent?: AlignContent;
  zIndex?: number;
  visibility?: Visibility;
  className?: string;
};

const StackPanel = ({
  selectedComponent,
  handleInputChange,
}: {
  selectedComponent: ComponentNode;
  handleInputChange: (key: string, value: any) => void;
}) => {
  const justifyItems = [
    {
      value: "start",
      icon: <AlignStartVertical size={16} strokeWidth={1.5} />,
    },
    {
      value: "center",
      icon: <AlignCenterVertical size={16} strokeWidth={1.5} />,
    },
    {
      value: "end",
      icon: <AlignEndVertical size={16} strokeWidth={1.5} />,
    },
    {
      value: "space-between",
      icon: <AlignHorizontalSpaceBetween size={16} strokeWidth={1.5} />,
    },
    {
      value: "space-around",
      icon: <AlignHorizontalSpaceAround size={16} strokeWidth={1.5} />,
    },
    {
      value: "space-evenly",
      icon: <AlignHorizontalDistributeCenter size={16} strokeWidth={1.5} />,
    },
  ];

  const alignItems = [
    {
      value: "start",
      icon: <AlignVerticalJustifyStart size={16} strokeWidth={1.5} />,
    },
    {
      value: "center",
      icon: <AlignCenterHorizontal size={16} strokeWidth={1.5} />,
    },
    {
      value: "end",
      icon: <AlignVerticalJustifyEnd size={16} strokeWidth={1.5} />,
    },
  ];

  const directionItems = [
    {
      value: "row",
      icon: <ArrowRight size={16} strokeWidth={1.5} />,
    },
    {
      value: "column",
      icon: <MoveDown size={16} strokeWidth={1.5} />,
    },
  ];

  useEffect(() => {
    console.log("selectedComponent:--", selectedComponent);
  }, [selectedComponent]);

  return (
    <PanelWrapper>
      <PanelWrapper.selction name="Position">
        <PanelWrapper.category className="space-y-4" name="Direction">
          <div className="grid grid-cols-2 gap-2">
            <Input
              value={Number(selectedComponent?.props?.width?.split("px")[0])}
              onChange={(e) =>
                handleInputChange("width", `${e.target.value}px`)
              }
              type="number"
              prefix="W"
              className="w-24 scale-100"
            />

            <Input
              value={Number(selectedComponent?.props?.height?.split("px")[0])}
              onChange={(e) =>
                handleInputChange("height", `${e.target.value}px`)
              }
              type="number"
              prefix="H"
              className="w-24 scale-100"
            />
            <Input
              value={Number(
                selectedComponent?.props?.borderRadius?.split("px")[0]
              )}
              onChange={(e) =>
                handleInputChange("borderRadius", `${e.target.value}px`)
              }
              type="number"
              prefix={<Spline size={16} strokeWidth={1.5} />}
              className="w-24 scale-100"
            />
            <Input
              value={selectedComponent?.props?.gap}
              onChange={(e) => handleInputChange("gap", e.target.value)}
              type="number"
              prefix={<BetweenVerticalEnd size={16} strokeWidth={1.5} />}
              className="w-24 scale-100"
            />
          </div>
        </PanelWrapper.category>
        <div className="flex items-center gap-2 mx-1">
          <Checkbox
            onVolumeChange={(v) => {
              if (v) {
                handleInputChange("wrap", "wrap");
              } else {
                handleInputChange("wrap", "nowrap");
              }
            }}
            id="clip-content"
            className="scale-90"
          />
          <label
            htmlFor="clip-content"
            className="text-sm text-muted-foreground"
          >
            Clip content
          </label>
        </div>
        <PanelWrapper.category
          className="grid grid-cols-1 gap-2 w-fit"
          name="Alignment"
        >
          <div className="flex justify-between">
            <ToggleGroup
              variant="outline"
              className="inline-flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
              type="single"
              size={"sm"}
              value={selectedComponent?.props?.direction}
              onValueChange={(v) => {
                handleInputChange("direction", v);
              }}
            >
              {directionItems.map(({ value, icon }) => (
                <ToggleGroupItem
                  key={value}
                  className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                  value={value}
                >
                  {icon}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <ToggleGroup
              variant="outline"
              className="inline-flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
              type="single"
              size={"sm"}
              value={selectedComponent?.props?.align}
              onValueChange={(v) => {
                handleInputChange("align", v);
              }}
            >
              {alignItems.map(({ value, icon }) => (
                <ToggleGroupItem
                  key={value}
                  className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                  value={value}
                >
                  {icon}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <ToggleGroup
            variant="outline"
            className="inline-flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
            type="single"
            size={"sm"}
            onValueChange={(v) => {
              handleInputChange("justify", v);
            }}
            value={selectedComponent?.props?.justify}
          >
            {justifyItems.map(({ value, icon }) => (
              <ToggleGroupItem
                key={value}
                className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                value={value}
              >
                {icon}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </PanelWrapper.category>
        <PanelWrapper.category className="w-full" name="Styleing">
          <Textarea
            value={selectedComponent?.props?.className}
            onChange={(e) => handleInputChange("className", e.target.value)}
            type="text"
            className="w-full text-xs"
            style={{ minHeight: 100 }}
          />
        </PanelWrapper.category>
      </PanelWrapper.selction>
    </PanelWrapper>
  );
};

export default StackPanel;
