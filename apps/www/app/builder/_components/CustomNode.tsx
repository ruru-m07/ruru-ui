import React from "react";
import { useDragOver } from "@minoru/react-dnd-treeview";
import { ArrowRightIcon, TypeIcon } from "lucide-react";
// import { TypeIcon } from "./TypeIcon";
// import styles from "./CustomNode.module.css";

/**
 * .expandIconWrapper {
  align-items: center;
  font-size: 0;
  cursor: pointer;
  display: flex;
  height: 24px;
  justify-content: center;
  width: 24px;
  transition: transform linear .1s;
  transform: rotate(0deg);
}

.expandIconWrapper.isOpen {
  transform: rotate(90deg);
}

.labelGridItem {
  padding-inline-start: 8px;
}

 */

export const CustomNode = (props: any) => {
  const { id, droppable, data } = props.node;
  const indent = props.depth * 24;

  const handleToggle = (e: any) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const dragOverProps = useDragOver(id, props.isOpen, props.onToggle);

  return (
    <div
      className={`items-center grid h-8 grid-cols-[24px,24px,1fr] gap-1`}
      style={{ paddingInlineStart: indent }}
      {...dragOverProps}
    >
      <div
        // className={`${styles.expandIconWrapper} ${
        //   props.isOpen ? styles.isOpen : ""
        // }`}
        style={{
          alignItems: "center",
          fontSize: 0,
          cursor: "pointer",
          display: "flex",
          height: "24px",
          justifyContent: "center",
          width: "24px",
          transition: "transform linear .1s",
          transform: "rotate(0deg)",
        }}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <div>{droppable ? "droppable" : "not droppable"}</div>
      <div
        style={{
          paddingInlineStart: "8px",
        }}
      >
        <h1 className="text-xs">{props.node.text}</h1>
      </div>
    </div>
  );
};
