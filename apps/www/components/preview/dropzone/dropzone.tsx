"use client";

import React from "react";
import { Wrapper } from "../wrapper";
import { Dropzone } from "ruru-ui/components/dropzone";

const DropzonePreview = () => {
  return (
    <Wrapper className="p-10">
      <Dropzone />
    </Wrapper>
  );
};

export default DropzonePreview;
