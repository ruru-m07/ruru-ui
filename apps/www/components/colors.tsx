import React from "react";

const Colors = () => {
  return (
    <div className="grid grid-cols-8">
      <div
        className={`bg-background p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-foreground">background</p>
      </div>

      <div
        className={`bg-foreground p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-background">foreground</p>
      </div>

      <div
        className={`bg-primary p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-primary-foreground">primary</p>
      </div>

      <div
        className={`bg-primary-foreground p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-primary">primary-foreground</p>
      </div>

      <div
        className={`bg-accent p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-accent-foreground">accent</p>
      </div>

      <div
        className={`bg-accent-foreground p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-accent">accent-foreground</p>
      </div>

      <div
        className={`bg-muted p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-muted-foreground">muted</p>
      </div>

      <div
        className={`bg-muted-foreground p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-muted">muted-foreground</p>
      </div>

      <div
        className={`bg-popover p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-popover-foreground">popover</p>
      </div>

      <div
        className={`bg-popover-foreground p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-popover">popover-foreground</p>
      </div>

      <div
        className={`bg-card p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-card-foreground">card</p>
      </div>

      <div
        className={`bg-card-foreground p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-card">card-foreground</p>
      </div>

      <div
        className={`bg-secondary p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-secondary-foreground">secondary</p>
      </div>

      <div
        className={`bg-secondary-foreground p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-secondary">secondary-foreground</p>
      </div>

      <div
        className={`bg-border p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-foreground">border</p>
      </div>
      <div
        className={`bg-ring p-4 w-28 h-2w-28 rounded-md m-4 border flex items-center justify-center`}
      >
        <p className="text-sm text-foreground">ring</p>
      </div>
    </div>
  );
};

export default Colors;
