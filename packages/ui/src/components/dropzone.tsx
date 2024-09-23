"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { FilePlusIcon } from "@radix-ui/react-icons";
import ReactDropzone, { DropzoneProps, DropzoneRef } from "react-dropzone";

/**
 * Dropzone component allows users to drag and drop files for upload.
 * It integrates with `react-dropzone` to handle file drag-and-drop events.
 *
 * @param {string} className - Optional additional class names for styling the dropzone.
 * @param {DropzoneProps & React.RefAttributes<DropzoneRef>} props - Props passed to the `react-dropzone` component.
 *
 * @returns {React.ReactNode} - A dropzone area with visual indicators for drag-and-drop actions.
 */
export const Dropzone = ({
  className,
  ...props
}: DropzoneProps &
  React.RefAttributes<DropzoneRef> & {
    className?: string;
  }): React.ReactNode => {
  return (
    <>
      {/* Wrapper div with optional class names */}
      <div
        className={cn(
          "items-center justify-center w-full p-5 border rounded-md bg-primary-foreground/65",
          className,
        )}
      >
        {/* ReactDropzone handles file drag and drop logic */}
        <ReactDropzone {...props}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <section className="flex items-center justify-center h-96">
              {/* Root dropzone area */}
              <div
                className="flex items-center justify-center w-full h-full"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  // When a file is dragged over the dropzone
                  <div className="flex items-center justify-center w-full h-full border-2 border-dashed rounded-md">
                    <div className="flex flex-col justify-center items-center">
                      <FilePlusIcon
                        className="mb-3 text-muted-foreground"
                        height={100}
                        width={50}
                      />
                      <span className="text-muted-foreground">
                        Drop to Upload file
                      </span>
                    </div>
                  </div>
                ) : (
                  // Default state of the dropzone when no file is dragged
                  <div className="w-full flex flex-col justify-center items-center">
                    <FilePlusIcon
                      className="mb-3 text-muted-foreground"
                      height={100}
                      width={50}
                    />
                    <span id="dragzone-text" className="text-muted-foreground">
                      Drag files here to add them to your repository
                    </span>
                    <span className="text-muted-foreground">
                      or{" "}
                      <span className="text-blue-500 cursor-pointer hover:underline ml-1">
                        choose your file
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </section>
          )}
        </ReactDropzone>
      </div>
    </>
  );
};

import * as RD from "react-dropzone";
export { RD };
