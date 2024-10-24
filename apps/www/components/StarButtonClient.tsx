"use client";

import { useCallback } from "react";

export default function StarButtonClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleClick = useCallback(() => {
    window.open("https://github.com/ruru-m07/ruru-ui", "_blank");
  }, []);

  return <div onClick={handleClick}>{children}</div>;
}
