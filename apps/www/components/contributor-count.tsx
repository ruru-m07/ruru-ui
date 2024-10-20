"use client";

import { useEffect, useState, type HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Contributor, fetchContributors } from "@/utils/get-contributors";

export interface ContributorCounterProps
  extends HTMLAttributes<HTMLDivElement> {
  repoOwner: string;
  repoName: string;
  displayCount?: number;
}

const ContributorCounter = ({
  repoOwner,
  repoName,
  displayCount = 20,
  ...props
}: ContributorCounterProps): React.ReactNode => {
  const [topContributors, setTopContributors] = useState<Contributor[] | []>(
    [],
  );

  async function fetchDtata() {
    const contributors = await fetchContributors(repoOwner, repoName);
    const topContributors = contributors
      .filter((contributor) => contributor.login !== "turbobot-temp")
      .slice(0, displayCount);

    setTopContributors(topContributors);
  }

  useEffect(() => {
    fetchDtata();
  }, []);

  return (
    <div
      {...props}
      className={cn("flex flex-col items-center gap-4", props.className)}
    >
      <div className="flex flex-row flex-wrap items-center justify-center md:pe-4">
        {topContributors.map((contributor, i) => (
          <a
            key={contributor.login}
            href={`https://github.com/${contributor.login}`}
            rel="noreferrer noopener"
            target="_blank"
            className="size-10 overflow-hidden rounded-full border-4 border-[#050505] bg-fd-background md:-mr-4 md:size-12"
            style={{
              zIndex: topContributors.length - i,
            }}
          >
            <Image
              src={contributor.avatar_url}
              alt={`${contributor.login}'s avatar`}
              unoptimized
              width={48}
              height={48}
            />
          </a>
        ))}
        {displayCount < topContributors.length ? (
          <div className="size-12 content-center rounded-full bg-fd-secondary text-center">
            +{topContributors.length - displayCount}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ContributorCounter;
