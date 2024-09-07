import SponserBanner from "@/components/sponserBanner";
import React from "react";

const SponsorsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="grid place-items-center w-[70%] my-20 space-y-5">
        <h1 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0">
          Support{" "}
          <span className="relative after:content-['']  after:absolute  after:top-[95%] after:w-[150%] after:[aspect-ratio:5_/_1] after:left-2/4 after:-translate-x-1/2 after:translate-y-[0]  after:rounded-[50%] after:border-[2px] after:border-[solid] after:border-pink-500 after:[clip-path:polygon(0_0,_50%_50%,_100%_0)]">
            <span className="text-pink-500">R</span>uru{" "}
            <span className="text-pink-500">UI</span>
          </span>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Your{" "}
          <i>
            <span className="text-pink-500 underline">sponsorship</span>
          </i>{" "}
          powers <b>open-source</b> projects like <i>Ruru UI.</i>
        </p>
        <div className="mt-2">
          <SponserBanner />
        </div>
      </div>
      <div className="mb-5 grid place-items-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-xs text-muted-foreground">
          Organization Sponsors
        </p>
        <div className="my-4 text-xs h-20 flex items-center">
          NO ORGANIZATION SPONSORS YET :(
        </div>
      </div>
      <div className="mb-5 grid place-items-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-xs text-muted-foreground">
          Individual Sponsors
        </p>
        <div className="my-4 text-xs h-20 flex items-center">
          NO INDIVIDUAL SPONSORS YET :(
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
