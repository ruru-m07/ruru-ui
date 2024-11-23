import React from "react";
import { NodeModel } from "@minoru/react-dnd-treeview";
import { CustomData } from "./types";
import { TypeIcon } from "./TypeIcon";
import styles from "./CustomNode.module.css";
import { ArrowRightIcon } from "lucide-react";

type Props = {
  node: NodeModel<CustomData>;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel["id"]) => void;
};

export const CustomNode: React.FC<Props> = (props) => {
  const { droppable, data } = props.node;
  const indent = props.depth * 24;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("logging");
    props.onToggle(props.node.id);
  };

  return (
    <div
      className={`tree-node w-full items-center grid grid-cols-[auto_auto_1fr_auto] h-8`}
      style={{ paddingInlineStart: indent, paddingInlineEnd: "8px" }}
    >
      <div
        className={`${styles.expandIconWrapper} ${
          props.isOpen ? styles.isOpen : ""
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRightIcon className="text-primary" size={12} />
          </div>
        )}
      </div>
      <div>
        <TypeIcon droppable={droppable || false} fileType={data?.fileType} />
      </div>
      <div className={styles.labelGridItem}>
        <span className="text-xs">{`${props.node.text}`}</span>
      </div>
    </div>
  );
};
