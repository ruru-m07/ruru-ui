import { ClipboardCopyIcon, ClipboardIcon } from "@radix-ui/react-icons";

import React from "react";
import { Button } from "ruru-ui/components/button";

const CopyButton = ({ content }: { content: string }) => {
  const [copyStatus, setCopyStatus] = React.useState(false);

  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(content);
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 1500);
      }}
      size={"small"}
      variant={"secondary"}
    >
      {copyStatus ? <ClipboardCopyIcon /> : <ClipboardIcon />}
    </Button>
  );
};

export default CopyButton;
