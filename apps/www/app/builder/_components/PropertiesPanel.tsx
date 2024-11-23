import React from "react";
import { ComponentNode, useComponentStore } from "../store/useComponentStore";
import ButtonPanel from "./panels/buttonPanel";
import { DefaultPanel } from "./panels/defaultPanel";
import StackPanel from "./panels/stackPanel";

export const findComponent = (
  tree: ComponentNode[],
  id: number
): ComponentNode | null => {
  for (const node of tree) {
    if (node.id === id) {
      return node;
    }
    const found: ComponentNode | null = findComponent(node.children || [], id);
    if (found) {
      return found;
    }
  }
  return null;
};

const PropertiesPanel = () => {
  const { selectedId, tree, updateProps } = useComponentStore();

  const selectedComponent = findComponent(tree, selectedId!);

  const handleInputChange = (key: string, value: any) => {
    if (selectedComponent) {
      updateProps(selectedComponent.id, { [key]: value });
    }
  };

  switch (selectedComponent?.type) {
    case "Button":
      return (
        <ButtonPanel
          handleInputChange={handleInputChange}
          selectedComponent={selectedComponent}
        />
      );
    case "Stack":
      return (
        <StackPanel
          handleInputChange={handleInputChange}
          selectedComponent={selectedComponent}
        />
      );
    default:
      return (
        <DefaultPanel
          handleInputChange={handleInputChange}
          selectedComponent={selectedComponent}
        />
      );
  }
};

export { PropertiesPanel };
