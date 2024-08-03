import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "ruru-ui/components/button";

export default function HomePage() {
  return (
    <main className="home_main">
      <div aria-hidden="true" className="home_spotlight"></div>
      <div className="home_intro -mt-72">
        <h1 className="text-4xl font-bold text-center space-x-2 ">
          <span
            className="words_designers__jgVLV mr-2"
            style={{ letterSpacing: "-2px" }}
          >
            <div
              className="words_selectionDot__A9lBk"
              style={{ top: "-3px", left: "-3px" }}
            ></div>
            <div
              className="words_selectionDot__A9lBk"
              style={{ right: "-3px", top: "-3px" }}
            ></div>
            <div
              className="words_selectionDot__A9lBk"
              style={{ bottom: "-3px", left: "-3px" }}
            ></div>
            <div
              className="words_selectionDot__A9lBk"
              style={{ bottom: "-3px", right: "-3px" }}
            ></div>
            <div className="words_width__LcrJC">330 x 56</div>Craft Seamless
            <span className="words_comma__9_pb3">,</span>
          </span>
          <span>
            <text className="words_stunning">
              {" "}
              <span className="word_large_text">S</span>tunn
              <span className="word_large_text">i</span>ng,{" "}
            </text>
          </span>
          <br />
          <div className="my-4" />
          <span className="words_customizable">
            <div className="words_width_lens_body">
              <div
                className="words_width_lens"
                data-word-researchers-glass
                style={{ transform: "none" }}
              />
            </div>
            Customizable Interfaces
          </span>
          <span>with</span>
          <span className="relative underline-clip">Ruru UI</span>
        </h1>
        <p className="text-muted-foreground text-lg mx-20 mt-6 mb-6 text-center ">
          the ultimate design system and UI library for creating seamless,
          beautiful, and highly customizable user interfaces.
        </p>
        <div className="flex space-x-3">
          <Link
            href={"/docs"}
            className={
              "h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/85 hover:shadow-md inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            }
          >
            Get Started
          </Link>
          <Link
            href={"https://github.com/ruru-m07/ruru-ui"}
            target="_blank"
            className={
              "h-9 px-4 py-2 border-input border-[1.5px] bg-primary-foreground hover:bg-[#f3f3f3] dark:hover:bg-[#202020] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            }
          >
            <GitHubLogoIcon className="mr-2" /> Give a star
          </Link>
        </div>
      </div>
    </main>
  );
}
