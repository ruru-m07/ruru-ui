import React, { useEffect } from "react";
import { ComponentNode, useComponentStore } from "../store/useComponentStore";
import { componentRegistryImports } from "../registry/components"; // Adjust the path as necessary

const ComponentTreeRenderer = ({ node }: { node: ComponentNode }) => {
  const { selectComponent, selectedId } = useComponentStore();
  const Component = componentRegistryImports[node.type] as React.ElementType;

  // Handle component click
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from bubbling up to parent components
    selectComponent(node.id);
  };
  const isSelected = selectedId === node.id;

  return (
    <div
      style={{
        cursor: "pointer",
        border: isSelected ? "2px dashed #f2a20d" : "2px solid #ffffff00",
        borderRadius: "10px",
        padding: "1px",
        width: "fit-content",
        height: "fit-content",
      }}
      className={isSelected ? "bg-yellow-800/5" : ""}
      onClick={handleClick}
    >
      {Component ? (
        (node.children ?? []).length > 0 ? (
          <Component {...node?.props}>
            {node.children?.map((child) => (
              <ComponentTreeRenderer key={child.id} node={child} />
            ))}
          </Component>
        ) : (
          <Component {...node?.props} />
        )
      ) : (
        <div>{node.type} component not found</div>
      )}
    </div>
  );
};

export const TreeView = () => {
  const { tree, selectedId } = useComponentStore();

  useEffect(() => {
    console.log("selectedId:::", selectedId);
  }, [selectedId]);

  return (
    <div className="h-screen grid place-items-center">
      {tree.map((node) => (
        <ComponentTreeRenderer key={node.id} node={node} />
      ))}
    </div>
  );
};
