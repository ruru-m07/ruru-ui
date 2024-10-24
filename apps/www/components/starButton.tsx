import { cn } from "@/utils/utils";
import { Star } from "lucide-react";
import React from "react";

const stargazers_count = async (): Promise<number> => {
  return fetch("https://api.github.com/repos/ruru-m07/ruru-ui")
    .then((response) => response.json())
    .then((data) => {
      return data.stargazers_count;
    });
};

const StarButton = async () => {
  let stargazersCount: number = await stargazers_count();

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "border bg-gradient-to-t from-primary/10 shadow-inner shadow-primary/10 hover:bg-accent/50 hover:text-accent-foreground",
        "h-10 px-4 py-2",
      )}
    >
      <Star
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="flex items-baseline gap-2">
        Star
        <span className="text-xs text-primary/60">{stargazersCount}</span>
      </span>
    </button>
  );
};

export default StarButton;
