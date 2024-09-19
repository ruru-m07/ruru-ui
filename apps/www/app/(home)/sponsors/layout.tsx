import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export default function BlocksLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
