import { ReactNode } from "react";

export default function BlocksLayout({ children }: { children: ReactNode }) {
  return <div className="mx-4 md:mx-24 lg:mx-36 py-4">{children}</div>;
}
