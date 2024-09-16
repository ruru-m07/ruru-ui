"use client";

import React from "react";
import { Spinner } from "ruru-ui/components/spinner";

const ThemePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <Spinner />
          <span className="ml-2">Loading...</span>
        </div>
      )}
      <iframe
        src={"/theme__"}
        className="w-full h-screen"
        title={"Theme"}
        onLoad={handleIframeLoad}
      />
    </div>
  );
};

export default ThemePage;
