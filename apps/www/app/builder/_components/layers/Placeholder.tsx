import React from "react";
import { NodeModel } from "@minoru/react-dnd-treeview";
import styles from "./Placeholder.module.css";

type Props = {
  node: NodeModel;
  depth: number;
};

export const Placeholder: React.FC<Props> = (props) => {
  const left = props.depth * 24;
  return <div className={"bg-blue-500 h-1 absolute right-0 top-0 -translate-y-1/2 "} style={{ left }}></div>;
};
