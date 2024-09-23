"use client";

import React from "react";
import { Dropzone, RD } from "ruru-ui/components/dropzone";

import { File } from "lucide-react";

const AdvanceDropzone = () => {
  const [files, setFiles] = React.useState<RD.FileWithPath[]>([]);

  function formatFileSize(bytes: number) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  const onDrop = (acceptedFiles: RD.FileWithPath[]) => {
    setFiles((p) => [...p, ...acceptedFiles]);
  };

  return (
    <div className="w-full">
      <Dropzone onDrop={onDrop} />
      {files.length > 0 && (
        <section className="my-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Files
          </h4>
          {files.map((file, index) => (
            <div
              key={index}
              className="space-x-3 w-[100%] border-[1.5px] border-input  flex items-center justify-between rounded-md py-3 px-3 my-3"
            >
              <div className="flex items-center">
                <File size={20} className="text-muted-foreground" />
                <span className="ml-2 text-sm">{file.path}</span>
              </div>
              <span className="text-muted-foreground text-xs">
                {formatFileSize(file.size)}
              </span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default AdvanceDropzone;
