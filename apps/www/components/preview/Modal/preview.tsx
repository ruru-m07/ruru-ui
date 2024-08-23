"use client";

import React, { useState } from "react";
import Modal, { ModalProvider } from "ruru-ui/components/modal";
import { Input } from "ruru-ui/components/input";

const Preview = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus(true);
    setIsLoading(false);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setStatus(false);
  };

  return (
    <div className="">
      <ModalProvider>
        <Modal.Trigger>Deploy</Modal.Trigger>
        <Modal>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title
                style={{
                  marginTop: "0em",
                  marginBottom: "5px",
                }}
                className="p-0"
              >
                Deploy to production
              </Modal.Title>
              <Modal.Subtitle
                className="p-0"
                style={{
                  marginTop: "0em",
                  marginBottom: "0em",
                }}
              >
                Deploy your site to production by clicking the button below.
              </Modal.Subtitle>
            </Modal.Header>
            <Modal.Content className="">
              <Input
                prefix="https://"
                suffix=".vercel.app"
                placeholder="enter your username."
                disabled
                value={"ruru-ui-git-component-modal-ruru-07"}
              />
            </Modal.Content>
          </Modal.Body>
          <Modal.Actions>
            <Modal.Close variant="secondary">Cancel</Modal.Close>
            <Modal.Action
              className={status ? "bg-[#0f2e18] text-[#62c073] rounded-md" : ""}
              loading={isLoading}
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {status ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                "Deploy"
              )}
            </Modal.Action>
          </Modal.Actions>
        </Modal>
      </ModalProvider>
    </div>
  );
};

export default Preview;
