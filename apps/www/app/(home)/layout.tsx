import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/home-layout";
import { baseOptions } from "@/app/layout.config";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 ">
        <div>
          <p className="mb-1 text-sm font-semibold">Ruru UI</p>
          <p className="text-xs">
            Built with ❤️ by{" "}
            <a
              href="https://github.com/ruru-m07"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Ruru
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
