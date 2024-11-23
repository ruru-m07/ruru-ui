import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import {
  Tree,
  NodeModel,
  MultiBackend,
  getBackendOptions,
} from "@minoru/react-dnd-treeview";
import { CustomData } from "./types";
import { CustomNode } from "./CustomNode";
import { Placeholder } from "./Placeholder";
import styles from "./App.module.css";
import { CustomDragPreview } from "./CustomDragPreview";
import { useComponentStore } from "../../store/useComponentStore";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

function App() {
  const { tree } = useComponentStore();

  // @ts-ignore
  const [treeData, setTreeData] = useState<NodeModel<CustomData>[]>(tree);
  const handleDrop = (newTree: NodeModel<CustomData>[]) => setTreeData(newTree);

  return (
    // <ThemeProvider theme={theme}>
    // {/* <CssBaseline /> */}
    <>
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className={styles.app}>
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
    </>
    // </ThemeProvider>
  );
}

export default App;
