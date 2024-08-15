"use client";

import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "ruru-ui/components/button";

const Hero = () => {
  return (
    <main className="flex items-center justify-center bg-[url('/rings-bg.svg')] w-full h-screen bg-cover relative bg-no-repeat flex-wrap bg-center">
      <div
        aria-hidden="true"
        className="bg-[radial-gradient(_50%_50%_at_50%_50%,_#fff_0,_hsla(0,_0%,_100%,_0)_100%_)] opacity-[0.06] rotate-45 w-full -top-[80px] max-w-[1800px]"
      ></div>
      <div className="flex flex-col items-center max-w-[800px] px-[16px] py-[0] -mt-72">
        <h1 className="text-4xl font-bold text-center space-x-2 ">
          <span
            className="[box-shadow:0_0_0_2px_#666] px-[2px] py-[0] relative inline-flex mr-2"
            style={{ letterSpacing: "-2px" }}
          >
            <div
              className="bg-[#fff] w-[4px] h-[4px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ top: "-3px", left: "-3px" }}
            ></div>
            <div
              className="bg-[#fff] w-[4px] h-[4px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ right: "-3px", top: "-3px" }}
            ></div>
            <div
              className="bg-[#fff] w-[4px] h-[4px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ bottom: "-3px", left: "-3px" }}
            ></div>
            <div
              className="bg-[#fff] w-[4px] h-[4px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ bottom: "-3px", right: "-3px" }}
            ></div>
            <div className="words_width_animat inline-block w-[fit-content] tracking-[-1px] leading-[16px] rounded-[3px] px-[4px] py-px text-[12px] bg-[#666] absolute -top-[28px] left-2/4 -translate-x-1/2">
              330 x 56
            </div>
            Craft Seamless
            <span className="words_comma__9_pb3">,</span>
          </span>
          <span>
            <text className="stroke-[#f1f1f1] stroke-[0.2px]">
              {" "}
              <span className="word_large_text text-[3rem] leading-none">
                S
              </span>
              tunn
              <span className="word_large_text text-[3rem] leading-none">
                i
              </span>
              ng,{" "}
            </text>
          </span>
          <br />
          <div className="my-7" />
          <span className="px-[2px] py-[0] relative inline-flex">
            <div className="words_width_lens_body inline-block justify-center items-center tracking-[-1px] leading-[16px] rounded-[50%] border-[solid] border-[1px] border-[#2e2e2e] text-[12px] absolute -top-[15px] left-[28%] -translate-x-1/2">
              <div
                className="m-[3px] w-[63px] h-[63px] rounded-[50%] bg-[rgba(255,_255,_255,_0.2)] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[1.2px]"
                data-word-researchers-glass
                style={{ transform: "none" }}
              />
            </div>
            Customizable
          </span>
          <span className="mx-52" />
          <span className="relative words_interfaces after:content-[''] after:absolute after:h-[60px] after:w-[6px] after:-top-[17px] after:-left-[10px] after:rounded-full after:bg-[#f0f0f0] before:content-[''] before:absolute before:h-[6px] before:w-[205px] before:-top-[5px] before:-left-[20px] before:rounded-full before:bg-[#f0f0f0] ">
            Interfaces
          </span>
          <span>with</span>
          <span className="relative underline-clip after:content-['']  after:absolute  after:top-[95%] after:w-[150%] after:[aspect-ratio:5_/_1] after:left-2/4 after:-translate-x-1/2 after:translate-y-[0]  after:rounded-[50%] after:border-[2px] after:border-[solid] after:border-[hsl(0,0%,90%)] after:[clip-path:polygon(0_0,_50%_50%,_100%_0)]">
            Ruru UI
          </span>
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
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            <GitHubLogoIcon className="mr-2" /> Give a star
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
