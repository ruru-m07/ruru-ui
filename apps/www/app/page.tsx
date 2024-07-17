import Link from "next/link";
import { Button } from "@ruru/ui";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-muted-foreground">
        You can open{" "}
        <Link href="/docs" className="text-foreground font-semibold underline">
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
