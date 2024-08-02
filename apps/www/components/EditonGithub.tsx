import React from "react";

const Edit = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="size-3 lucide lucide-square-pen"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
    </svg>
  );
};

export const EditonGithub = ({ path }: { path: string }) => {
  return (
    <div>
      <a
        href={`https://github.com/ruru-m07/ruru-ui/blob/main/${path}`}
        target="_blank"
        rel="noreferrer noopener"
        className={
          "w-full border-input border-[1.5px] bg-primary-foreground hover:bg-[#f3f3f3] dark:hover:bg-[#202020] h-8 px-3 gap-1.5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        }
      >
        <Edit />
        Edit on Github
      </a>
    </div>
  );
};

export default EditonGithub;
