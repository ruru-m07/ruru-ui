import React, { Children } from "react";
import { cn } from "ruru-ui/utils";

const PanelWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

PanelWrapper.selction = ({
  children,
  name,
  className,
}: {
  children: React.ReactNode;
  name: string;
  className?: string;
}) => {
  return (
    <div className={cn("p-4 border-b", className)}>
      <p className="text-lg">{name}</p>
      {children}
    </div>
  );
};

PanelWrapper.category = ({
  children,
  name,
  className,
}: {
  children: React.ReactNode;
  name?: string;
  className?: string;
}) => {
  return (
    <div className={cn("my-2")}>
      {name && <p className="text-sm text-muted-foreground">{name}</p>}
      <div className={cn("my-2", className)}>{children}</div>
    </div>
  );
};

PanelWrapper.label = ({ children }: { children: React.ReactNode }) => {
  return <label className="text-muted-foreground my-2">{children}</label>;
};

export { PanelWrapper };
