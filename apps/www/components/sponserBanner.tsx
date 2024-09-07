"use client";

import { Heart } from "lucide-react";
import React from "react";
import { buttonVariants } from "ruru-ui/components/button";
import { cn } from "ruru-ui/utils";

const SponserBanner = (): React.ReactNode => {
  return (
    <div>
      <a
        href={`https://github.com/sponsors/ruru-m07`}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(
          buttonVariants({
            variant: "secondary",
          }),
          "w-full mt-3 hover:border-pink-500 hover:dark:bg-pink-600/15",
        )}
      >
        <Heart className="text-pink-500 mr-2 items-center" size={16} />
        Become a sponsor
      </a>
    </div>
  );
};

export default SponserBanner;
