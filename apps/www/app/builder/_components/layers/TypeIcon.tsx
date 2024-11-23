import { Component, FolderIcon, Grid2x2, ImageIcon } from "lucide-react";
import React from "react";
// import FolderIcon from "@mui/icons-material/Folder";
// import ImageIcon from "@mui/icons-material/Image";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import DescriptionIcon from "@mui/icons-material/Description";

type Props = {
  droppable: boolean;
  fileType?: string;
};

export const TypeIcon: React.FC<Props> = (props) => {
  if (props.droppable) {
    return <Grid2x2 size={16} strokeWidth={1} />;
  }

  switch (props.fileType) {
    case "image":
      return <ImageIcon size={12}/>;
    default:
      return <Component size={16} strokeWidth={1} />;
  }
};
