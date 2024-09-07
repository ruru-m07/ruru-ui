import React from "react";
import Hero from "../../components/hero";
import {
  LibraryBig,
  Palette,
  Plus,
  Server,
  Settings2,
  Sparkles,
  TerminalIcon,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Spinner } from "ruru-ui/components/spinner";
import dynamic from "next/dynamic";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "ruru-ui/components/button";

const CodeBlockServer = dynamic(
  () => import("@/components/ui/code-block-server"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[70px] flex items-center justify-center">
        <Spinner className="mr-4" /> Loading...
      </div>
    ),
  },
);

export default function HomePage() {
  const data = {
    initTerminalText: `npx ruru-ui-cli@latest init

┌  🚀  Welcome to the installation wizard!
│
◇  Would you like to use TypeScript (recommended)?
│  Yes
│
◇  Where is your global CSS file?
│  ./app/globals.css
│
◇  Where is your tailwind.config.js located?
│  ./tailwind.config.ts
│
◆  Would you like to use CSS variables for colors?
└  ● Yes / ○ No`,
    addComponentsTerminalText: `npx ruru-ui-cli@latest add

◆  Which components would you like to add?
│  ◻ avatar
│  ◻ badge
│  ◼ button
│  ◻ checkbox
│  ◼ input
│  ◼ select
│  ◻ spinner
│  ◻ switch
│  ◼ tabs
│  ◼ textarea
│  ◻ tooltip
└  ◼ modal
⠙ Installing components...
✔ Done.
`,
    dummyCode: [
      `import { Button } from "@/components/ui/button"
 
export default function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`,
    ],
  };

  return (
    <main>
      <div className="dark:bg-[#050505]">
        <Hero />
        <div className="border w-[80%] m-auto">
          <div
            className="relative p-6 text-center text-3xl font-bold py-14"
            style={{
              backgroundImage:
                "radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))",
            }}
          >
            <div
              className="absolute -top-[10.5px] -left-[10.5px] w-5 h-5"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <Plus size={40} strokeWidth={1.25} />
            </div>
            <div
              className="absolute -bottom-[10.5px] -right-[10.5px] w-5 h-5"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <Plus size={40} strokeWidth={1.25} />
            </div>
            <h2 className="bg-gradient-to-b from-primary/90 to-primary/55 bg-clip-text text-center text-2xl text-transparent sm:text-3xl">
              Craft components. <br className="my-4" /> Customize endlessly,
              Integrate effortlessly.
            </h2>
          </div>
          <ShapratorHorizontal />
          <div className="grid grid-cols-2">
            <div className="border-r p-4 py-6">
              <StepCounter count={1} />
              <h4 className="text-xl font-bold">Initialize.</h4>
              <p className="text-muted-foreground">
                Start by initializing components by running the following
                command.
              </p>
              <Terminal data={data.initTerminalText} />
              <p className="text-muted-foreground mt-4 mr-1 text-xs">
                This will start the installation wizard for Ruru UI.
              </p>
            </div>
            <div className="p-4 py-6">
              <StepCounter count={2} />
              <h4 className="text-xl font-bold">Add components.</h4>
              <p className="text-muted-foreground">
                Add components to your project by running the following command.
              </p>
              <Terminal data={data.addComponentsTerminalText} />
            </div>
          </div>
          <ShapratorHorizontal />
          <div className="flex flex-col items-center justify-center py-4">
            <StepCounter count={3} className="mb-0 mt-4" />
            <h4 className="text-xl font-bold">Use components.</h4>
            <p className="text-muted-foreground mt-2">
              costomize and integrate components in your project. 🚀
            </p>

            <div className="relative w-full mt-4 flex items-center justify-center">
              <div className="h-96" />

              <Files className="absolute top-10 left-80 w-[35%] m-auto">
                <Folder name="components" defaultOpen>
                  <Folder name="ui" defaultOpen>
                    <File name="button.tsx" />
                    <File name="tabs.tsx" />
                    <File name="dialog.tsx" />
                    <File name="..." />
                  </Folder>
                </Folder>
              </Files>

              <div className="absolute top-28 right-[300px] w-[420px] backdrop-blur-sm bg-[#0f0f0f0c]">
                <div className="-my-6">
                  <CodeBlockServer lang="tsx" code={data.dummyCode} />
                </div>
              </div>
            </div>
          </div>

          <ShapratorHorizontal />

          <div
            className="relative p-6 text-center text-3xl font-bold py-14"
            style={{
              backgroundImage:
                "radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))",
            }}
          >
            <div
              className="absolute -bottom-[10.5px] -left-[10.5px] w-5 h-5"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <Plus size={40} strokeWidth={1.25} />
            </div>
            <div
              className="absolute -top-[10.5px] -right-[10.5px] w-5 h-5"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <Plus size={40} strokeWidth={1.25} />
            </div>
            <h2 className="bg-gradient-to-b from-primary/90 to-primary/45 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
              Loved by users.
              <br />
              Built for developers.
            </h2>
          </div>

          <ShapratorHorizontal />

          <div className="grid grid-cols-3 grid-rows-2">
            <div className="border-r px-6 py-12 hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <Settings2
                  size={16}
                  strokeWidth={1.5}
                  className="mr-2 size-4"
                />
                <h2 className="text-sm font-medium">Customizable</h2>
              </div>
              <span className="font-medium">
                Customize components to fit your brand.
              </span>
            </div>

            <div className="border-r px-6 py-12 hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <Sparkles size={16} strokeWidth={1.5} className="mr-2 size-4" />
                <h2 className="text-sm font-medium">Animation</h2>
              </div>
              <span className="font-medium">
                Add animations to your components with ease.
              </span>
            </div>

            <div className="px-6 py-12 hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <TerminalIcon
                  size={16}
                  strokeWidth={1.5}
                  className="mr-2 size-4"
                />
                <h2 className="text-sm font-medium">CLI</h2>
              </div>
              <span className="font-medium">
                Integrate components with your existing project.
              </span>
            </div>

            <div className="px-6 py-12 border-t border-r hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3"></path>
                  <path d="M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M16 5v-2"></path>
                </svg>
                <h2 className="text-sm font-medium">Hooks</h2>
              </div>
              <span className="font-medium">
                Use hooks to manage your components&apos; state.
              </span>
            </div>

            <div className="px-6 py-12 border-t border-r hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-template"
                >
                  <rect width="18" height="7" x="3" y="3" rx="1" />
                  <rect width="9" height="7" x="3" y="14" rx="1" />
                  <rect width="5" height="7" x="16" y="14" rx="1" />
                </svg>
                <h2 className="text-sm font-medium">Blocks</h2>
              </div>
              <span className="font-medium">
                The Blocks To Build Your App Faster
              </span>
            </div>

            <div className="px-6 py-12 border-t hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <LibraryBig
                  size={16}
                  strokeWidth={1.5}
                  className="mr-2 size-4"
                />
                <h2 className="text-sm font-medium">Library support</h2>
              </div>
              <span className="font-medium">
                just install dependency and use it.
              </span>
            </div>

            <div className="px-6 py-12 border-t border-r hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <Palette size={16} strokeWidth={1.5} className="mr-2 size-4" />
                <h2 className="text-sm font-medium">Theming</h2>
              </div>
              <span className="font-medium">
                Customize theme your components.
              </span>
            </div>

            <div className="px-6 py-12 border-t border-r hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-template"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                  />
                </svg>
                <h2 className="text-sm font-medium">Tailwind</h2>
              </div>
              <span className="font-medium">
                Tailwind CSS support for components.
              </span>
            </div>

            <div className="px-6 py-12 border-t border-r hover:bg-primary-foreground/70">
              <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
                <Server size={16} strokeWidth={1.5} className="mr-2 size-4" />
                <h2 className="text-sm font-medium">RSC</h2>
              </div>
              <span className="font-medium">
                Support for RSC (React Server Components).
              </span>
            </div>
          </div>

          <ShapratorHorizontal />

          <div
            className="relative p-6 text-center text-3xl font-bold py-14"
            style={{
              backgroundImage:
                "radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))",
            }}
          >
            <h2 className="bg-gradient-to-b from-primary/90 to-primary/55 bg-clip-text text-center text-2xl text-transparent sm:text-3xl">
              <GitHubLogoIcon scale={100} /> Fully open-source,
              <br /> available on <span className="underline"> Github</span>.
            </h2>
          </div>

          <ShapratorHorizontal />

          <div className="flex items-center">
            <h1 className="text-2xl font-bold w-1/3 text-muted-foreground flex items-center justify-center p-4">
              Build Your Components.
            </h1>
            <div className="w-1/3 p-4 border-l border-r">
              <span className="text-muted-foreground">Available now</span>
              <CodeBlockServer
                lang="bash"
                code={[`npx ruru-ui-cli@latest init`]}
              />
            </div>
            <div className="text-2xl font-bold w-1/3 text-muted-foreground h-full flex items-center justify-center p-4 space-x-4">
              <Link
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                  "bg-primary text-primary-foreground shadow hover:bg-primary/85 hover:shadow-md",
                  "h-9 px-4 py-2",
                )}
                href={"/docs"}
              >
                Read Docs
              </Link>
              <Link
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                  "border-input border-[1.5px] bg-primary-foreground hover:bg-[#f3f3f3] dark:hover:bg-[#202020]",
                  "h-9 px-4 py-2",
                )}
                href={"https://github.com/ruru-m07/ruru-ui"}
                target="_blank"
              >
                <GitHubLogoIcon className="mr-2" /> Give a star
              </Link>
            </div>
          </div>
        </div>
        <div className="h-10" />
      </div>
    </main>
  );
}

const ShapratorHorizontal = () => {
  return <div className="border-t w-full" />;
};

const StepCounter = ({
  count,
  className,
}: {
  count: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-primary rounded-full w-7 h-7 flex items-center justify-center mb-3",
        className,
      )}
    >
      <label className="text-primary-foreground">{count}</label>
    </div>
  );
};

const Terminal = ({ data }: { data: string }) => {
  return (
    <div className="border rounded-md mt-4">
      <div className="flex justify-between items-center space-x-2 bg-primary-foreground/85 px-2 border-b rounded-t-md">
        <div className="flex items-center">
          <TerminalIcon size={12} />
          <h4 className="ml-2 font-bold text-xs text-muted-foreground">
            Terminal
          </h4>
        </div>
        <div className="my-2 w-2 h-2 rounded-full bg-green-800" />
      </div>
      <pre className="px-4 py-2 text-muted-foreground text-xs whitespace-pre-wrap bg-secondary/40">
        {data}
      </pre>
    </div>
  );
};
