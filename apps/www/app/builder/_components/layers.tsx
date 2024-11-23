import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import {
  getBackendOptions,
  MultiBackend,
  NodeModel,
  Tree,
} from "@minoru/react-dnd-treeview";
import styles from "./layers/App.module.css";
import { useComponentStore } from "../store/useComponentStore";
import { CustomData } from "./layers/types";
import { CustomNode } from "./layers/CustomNode";
import { CustomDragPreview } from "./layers/CustomDragPreview";
import { Placeholder } from "./layers/Placeholder";

const Layers = () => {
  const { tree } = useComponentStore();

  // @ts-ignore
  const [treeData, setTreeData] = useState<NodeModel<CustomData>[]>(tree);
  const handleDrop = (newTree: NodeModel<CustomData>[]) => setTreeData(newTree);

  return (
    <div className="flex w-full">
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className="h-full flex w-full">
          <Tree
            tree={treeData}
            rootId={0}
            render={(node, { depth, isOpen, onToggle }) => (
              <CustomNode
                node={node}
                depth={depth}
                isOpen={isOpen}
                onToggle={onToggle}
              />
            )}
            dragPreviewRender={(monitorProps) => (
              <CustomDragPreview monitorProps={monitorProps} />
            )}
            onDrop={handleDrop}
            classes={{
              root: styles.treeRoot,
              draggingSource: styles.draggingSource,
              placeholder: styles.placeholderContainer,
            }}
            sort={false}
            insertDroppableFirst={false}
            canDrop={(tree, { dragSource, dropTargetId, dropTarget }) => {
              if (dragSource?.parent === dropTargetId) {
                return true;
              }
            }}
            dropTargetOffset={10}
            placeholderRender={(node, { depth }) => (
              <Placeholder node={node} depth={depth} />
            )}
          />
        </div>
      </DndProvider>
    </div>
  );
};

export default Layers;
