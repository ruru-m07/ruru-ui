import SponserBanner from "@/components/sponserBanner";
import Link from "next/link";
import React from "react";

import { Individual } from "./data";

const SponsorsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="grid place-items-center w-[70%] my-20 space-y-5">
        <h1 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0">
          Support{" "}
          <span className="relative after:content-['']  after:absolute  after:top-[95%] after:w-[150%] after:[aspect-ratio:5_/_1] after:left-2/4 after:-translate-x-1/2 after:translate-y-[0]  after:rounded-[50%] after:border-[2px] after:border-[solid] after:border-pink-500 after:[clip-path:polygon(0_0,_50%_50%,_100%_0)]">
            Ruru UI
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
        <div className="my-1 text-xs flex items-center">
          no organization sponsors yet :( <Be />
        </div>
      </div>
      <div className="mb-5 grid place-items-center mt-5">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-xs text-muted-foreground">
          Individual Sponsors
        </p>
        <div className="my-1 text-xs flex items-center mt-3">
          {Individual.map((sponsor, i) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl p-3 text-xs transition-colors hover:bg-primary/10"
            >
              <img
                alt="avatar"
                src={sponsor.avatar}
                width="30"
                height="30"
                className="rounded-lg"
              />
              {sponsor.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

const Be = () => {
  return (
    <Link
      href={"https://github.com/sponsors/ruru-m07"}
      target="_blank"
      className="underline text-xs ml-3"
    >
      become the first sponsor.
    </Link>
  );
};
