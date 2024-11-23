// some data

/**
 * how tree looks like
 * 
 *  tree: [
    {
      id: 1,
      type: "Stack",
      props: {
        className: "border",
        justify: "center",
        direction: "row",
        gap: 5,
        width: "400px",
        height: "600px",
        borderRadius: "10px",
        align: "center",
      },
      children: [
        {
          id: 234567,
          type: "Stack",
          props: componentRegistry["Stack"],
          children: [
            {
              id: 22678,
              type: "Label",
              props: componentRegistry["Label"],
            },
          ]
        },
        {
          id: 32442,
          type: "Stack",
          props: componentRegistry["Stack"],
          children: [
            {
              id: 243,
              type: "Label",
              props: componentRegistry["Label"],
            },
            {
              id: 342,
              type: "Input",
              props: componentRegistry["Input"],
              children: [],
            },
            {
              id: 253,
              type: "Label",
              props: componentRegistry["Label"],
            },
            {
              id: 3452,
              type: "Input",
              props: componentRegistry["Input"],
              children: [],
            },
            {
              id: 45252,
              type: "Button",
              props: componentRegistry["Button"],
            },
          ]
        },
      ],
    },
  ], 
 * 
 */

// TODO : Implement the LayerTree component
// 1. Import the necessary modules
// 2. Create a LayerTree component

// TODO : let's make the LayerTree component interactive 

// TODO : now make nodes dragable and droppable

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { MultiBackend, getBackendOptions } from "@minoru/react-dnd-treeview";
import { ComponentNode, useComponentStore } from "../store/useComponentStore";
import { AddComponentForm } from "./AddComponentForm";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/utils/utils";

export const LayerTree = () => {
  const { tree, updateTree } = useComponentStore();

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <div className="w-full">
        <AddComponentForm parentId={1} />
        <div className="p-4">
          {tree.map((node) => (
            <LayerTreeNode key={node.id} node={node} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

const LayerTreeNode = ({ node }: { node: ComponentNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { selectComponent, selectedId } = useComponentStore();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    selectComponent(node.id);
  }

  return (
    <div>
      <div onClick={handleClick} className={cn("flex items-center p-1 border border-border/0 hover:border-primary rounded-md", node.id === selectedId && "border-primary"  )}>
        {node.type === "Stack" ? (
          <button onClick={handleToggle}>
            {isOpen ? (
              <ChevronDown size={16} strokeWidth={1.5} />
            ) : (
              <ChevronRight size={16} strokeWidth={1.5} />
            )}
          </button>
        ): (
          <div style={{ width: 16 }} />
        )}
        <span>{node.type}</span>
      </div>
      {isOpen && (
        <div className="ml-4">
          {node.children?.map((child) => (
            <LayerTreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};
