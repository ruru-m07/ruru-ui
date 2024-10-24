"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/utils/utils";
import StarButton from "./starButton";
import StarButtonClient from "./StarButtonClient";

const Hero = () => {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center w-full h-screen bg-cover relative bg-no-repeat flex-wrap bg-center bg-[#05050541]">
      <Image
        className="absolute top-0 ring-0 -z-10"
        src={"/assets/background_dots.svg"}
        alt="bg dots"
        width={1508}
        height={904}
      />
      <Image
        className="absolute -top-3 ring-0 -z-10"
        src={"/assets/shaders.svg"}
        alt="bg dots"
        width={1508}
        height={1114}
      />
      <Image
        className="absolute top-2 left-2 -z-10"
        src={"/assets/glowing_logo.svg"}
        alt="bg dots"
        width={100}
        height={100}
      />
      <div
        aria-hidden="true"
        className="opacity-[0.06] rotate-45 w-full -top-[80px] max-w-[1800px]"
      ></div>
      <div className="flex flex-col items-center max-w-[800px] px-[16px] -mt-72 z-10">
        <h1 className="text-4xl font-bold text-center space-x-2 ">
          <span
            className="[box-shadow:0_0_0_1.5px_#444444] px-[2px] py-[0] relative inline-flex mr-2"
            style={{ letterSpacing: "1px" }}
          >
            <div
              className="bg-[#BCBCBC] border-[#444444] border w-[6px] h-[6px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ top: "-4px", left: "-4px" }}
            ></div>
            <div
              className="bg-[#BCBCBC] border-[#444444] border w-[6px] h-[6px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ right: "-4px", top: "-4px" }}
            ></div>
            <div
              className="bg-[#BCBCBC] border-[#444444] border w-[6px] h-[6px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ bottom: "-4px", left: "-4px" }}
            ></div>
            <div
              className="bg-[#BCBCBC] border-[#444444] border w-[6px] h-[6px] [box-shadow:0_0_0_1px_var(--accent-color)] absolute"
              style={{ bottom: "-4px", right: "-4px" }}
            ></div>
            <div className="words_width_animat font-medium inline-block w-[fit-content] tracking-[-1px] leading-[16px] rounded-[3px] px-[5px] py-[2px] text-[10px] bg-[#4d4d4d] absolute -top-[28px] left-2/4 -translate-x-1/2">
              330 x 56
            </div>
            Craft Seamless
            <span className="words_comma__9_pb3">,</span>
          </span>
          <span style={{ letterSpacing: "1px" }}>
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
          <span
            className="px-[2px] py-[0] relative inline-flex"
            style={{ letterSpacing: "1px" }}
          >
            <div className="words_width_lens_body inline-block justify-center items-center tracking-[-1px] leading-[16px] rounded-[50%] border-[solid] border-[1px] border-[#2e2e2e] text-[12px] absolute -top-[15px] left-[28%] -translate-x-1/2">
              <div
                className="m-[3px] w-[63px] h-[63px] rounded-[50%] bg-[rgba(255,_255,_255,_0.2)] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[1.2px]"
                data-word-researchers-glass
                style={{ transform: "none" }}
              />
            </div>
            Customizable
          </span>
          <span className="w-5" />
          <span
            className={cn(
              "relative words_interfaces",
              "after:content-[''] after:absolute after:h-[60px] after:w-[6px] after:-top-[17px] after:-left-[10px] after:rounded-full after:bg-[#f0f0f0]",
              "before:content-[''] before:absolute before:h-[6px] before:w-[205px] before:-top-[1px] before:-left-[25px] before:rounded-full before:bg-[#f0f0f0] ",
            )}
            style={{ letterSpacing: "1px" }}
          >
            Interfaces
          </span>
          <span style={{ letterSpacing: "1px" }}>with</span>
          <span
            className={cn(
              "relative underline-clip",
              "after:content-['']  after:absolute  after:top-[95%] after:w-[150%] after:[aspect-ratio:5_/_1] after:left-2/4 after:-translate-x-1/2 after:translate-y-[0]  after:rounded-[50%] after:border-[2px] after:border-[solid] after:border-[hsl(0,0%,90%)] after:[clip-path:polygon(0_0,_50%_50%,_100%_0)]",
            )}
            style={{ letterSpacing: "1px" }}
          >
            Ruru UI
          </span>
        </h1>
        <p className="text-muted-foreground text-lg mx-20 mt-9 mb-9 text-center ">
          the ultimate design system and UI library for creating seamless,
          beautiful, and highly customizable user interfaces.
        </p>
        <div className="flex space-x-3 mt-2">
          <button
            onClick={() => router.push("/docs")}
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              "bg-background bg-gradient-to-b from-primary to-primary/60 text-primary-foreground shadow-inner shadow-background/20 hover:bg-primary/90",
              "h-10 px-4 py-2",
            )}
          >
            Get Started
          </button>
          <StarButtonClient>
            <StarButton />
          </StarButtonClient>
        </div>
        <div className="fixed h-[50px] border rounded-full mt-10 flex justify-around items-center px-2  top-0 backdrop-blur-xl bg-primary-foreground/35">
          {["docs", "blocks", "theme", "sponsors"].map((i) => (
            <Link
              key={i}
              href={`/${i}`}
              className="text-muted-foreground hover:text-primary text-sm hover:border hover:border-border border border-transparent hover:bg-secondary/55 rounded-full py-1 px-4"
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
