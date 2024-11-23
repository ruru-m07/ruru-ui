// ! makeing new arcitecute for tree

import { create } from "zustand";
import {
  componentRegistry,
  ComponentRegistryType,
} from "../registry/components";

export interface TreeNodeData {
  type?: keyof ComponentRegistryType;
  props?: any;
}

export interface TreeNode {
  id: number;
  parent: number;
  droppable: boolean;
  text: string;
  data?: TreeNodeData;
}

interface ComponentStore {
  tree: TreeNode[];
  // selectedId: number | null;
  // addComponent: (parentId: number, type: keyof ComponentRegistryType) => void;
  // updateProps: (id: number, newProps: Record<string, any>) => void;
  // updateTree: (newTree: TreeNode[]) => void;
  // selectComponent: (id: number | null) => void;
}

export const useComponentStore = create<ComponentStore>((set: any) => ({
  // tree: [
  //   {
  //     id: 1,
  //     type: "Stack",
  //     props: {
  //       className: "border",
  //       justify: "center",
  //       direction: "row",
  //       gap: 5,
  //       width: "400px",
  //       height: "600px",
  //       borderRadius: "10px",
  //       align: "center",
  //     },
  //     children: [
  //       {
  //         id: 234567,
  //         type: "Stack",
  //         props: componentRegistry["Stack"],
  //         children: [
  //           {
  //             id: 22678,
  //             type: "Label",
  //             props: componentRegistry["Label"],
  //           },
  //           {
  //             id: 2345678,
  //             type: "Stack",
  //             props: componentRegistry["Stack"],
  //             children: [
  //               {
  //                 id: 234776,
  //                 type: "Button",
  //                 props: componentRegistry["Button"],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         id: 32442,
  //         type: "Stack",
  //         props: componentRegistry["Stack"],
  //         children: [
  //           {
  //             id: 243,
  //             type: "Label",
  //             props: componentRegistry["Label"],
  //           },
  //           {
  //             id: 342,
  //             type: "Input",
  //             props: componentRegistry["Input"],
  //             children: [],
  //           },
  //           {
  //             id: 253,
  //             type: "Label",
  //             props: componentRegistry["Label"],
  //           },
  //           {
  //             id: 3452,
  //             type: "Input",
  //             props: componentRegistry["Input"],
  //             children: [],
  //           },
  //           {
  //             id: 45252,
  //             type: "Button",
  //             props: componentRegistry["Button"],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
  // tree: [
  //   {
  //     id: 1,
  //     parent: 0,
  //     droppable: false,
  //     text: "Stack",
  //     data: {
  //       type: "Stack",
  //       props: {
  //         className: "border",
  //         justify: "center",
  //         direction: "row",
  //         gap: 5,
  //         width: "400px",
  //         height: "600px",
  //         borderRadius: "10px",
  //         align: "center",
  //       },
  //     },
  //   },
  //   {
  //     id: 2,
  //     parent: 1,
  //     droppable: true,
  //     text: "Stack",
  //     data: {
  //       type: "Stack",
  //       props: componentRegistry["Stack"],
  //     },
  //   },
  //   {
  //     id: 3,
  //     parent: 2,
  //     droppable: false,
  //     text: "Label",
  //     data: {
  //       type: "Label",
  //       props: componentRegistry["Label"],
  //     },
  //   },
  //   {
  //     id: 4,
  //     parent: 2,
  //     droppable: true,
  //     text: "Stack",
  //     data: {
  //       type: "Stack",
  //       props: componentRegistry["Stack"],
  //     },
  //   },
  //   {
  //     id: 5,
  //     parent: 4,
  //     droppable: false,
  //     text: "Button",
  //     data: {
  //       type: "Button",
  //       props: componentRegistry["Button"],
  //     },
  //   },
  // ],
  tree: [
    {
      id: 1,
      parent: 0,
      droppable: true,
      text: "Desktop",
    },
    {
      id: 2,
      parent: 1,
      droppable: true,
      text: "Menu",
    },
    {
      id: 3,
      parent: 1,
      droppable: false,
      text: "Hero",
    },
    {
      id: 4,
      parent: 0,
      droppable: true,
      text: "Mobile",
    },
    {
      id: 5,
      parent: 4,
      droppable: false,
      text: "Content",
    },
    {
      id: 7,
      parent: 0,
      droppable: false,
      text: "Footer",
    },
  ],
  // selectedId: null,

  // addComponent: (parentId: number, type: keyof ComponentRegistryType) =>
  //   set((state: ComponentStore) => ({
  //     tree: addToTree(state.tree, parentId, {
  //       id: Date.now(),
  //       type,
  //       props: componentRegistry[type],
  //     }),
  //   })),

  // updateProps: (id: number | string, newProps: Record<string, any>) =>
  //   set((state: ComponentStore) => ({
  //     tree: updateTreeProps(state.tree, id, newProps),
  //   })),
  // updateTree: (newTree: ComponentNode[]) => set({ tree: newTree }),

  // selectComponent: (id: number | string | null) => set({ selectedId: id }),
}));

// Helper functions to manage the component tree
// export const addToTree = (
//   tree: ComponentNode[],
//   parentId: number,
//   newComponent: ComponentNode
// ): ComponentNode[] => {
//   return tree.map((node) =>
//     node.id === parentId
//       ? { ...node, children: [...(node.children || []), newComponent] }
//       : {
//           ...node,
//           children: addToTree(node.children || [], parentId, newComponent),
//         }
//   );
// };

// const updateTreeProps = (
//   tree: ComponentNode[],
//   id: number | string,
//   newProps: Record<string, any>
// ): ComponentNode[] => {
//   return tree.map((node) =>
//     node.id === id
//       ? { ...node, props: { ...node.props, ...newProps } }
//       : {
//           ...node,
//           children: updateTreeProps(node.children || [], id, newProps),
//         }
//   );
// };
