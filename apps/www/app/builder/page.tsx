"use client";

import React from "react";
import Sidebar from "./_components/sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import Script from "next/script";

const EditorPage = () => {

  // React.useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       if (selectedId !== null) {
  //         selectComponent(null);
  //       }
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);



  return (
    <div className="flex justify-between">
      {/* <Script src="https://cd  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [selectedId, selectComponent]);n.tailwindcss.com" /> */}
      <DndProvider backend={HTML5Backend}>
        <Sidebar />
        {/* <TreeView />
        <div className="h-screen w-[232px] border-l bg-primary-foreground/80">
          <h3 className="p-2 px-4 border-b text-lg">
            {selectedComponent?.type || "Properties"}
          </h3>
          <PropertiesPanel />
        </div> */}
      </DndProvider>
    </div>
  );
};

export default EditorPage;
