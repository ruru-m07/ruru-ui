"use client";

import React, { useState } from "react";
import { Input } from "ruru-ui/components/input";
import Modal, { ModalProvider } from "ruru-ui/components/modal";

const Usage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div>
      <ModalProvider>
        <Modal.Trigger>Open Modal</Modal.Trigger>
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
                Create Username
              </Modal.Title>
              <Modal.Subtitle
                className="p-0"
                style={{
                  marginTop: "0em",
                  marginBottom: "0em",
                }}
              >
                Enter a unique name for your token to differentiate it from
                other tokens and then select the scope.
              </Modal.Subtitle>
            </Modal.Header>
            <Modal.Content>
              <Input label="username" placeholder="enter your username." />
            </Modal.Content>
          </Modal.Body>
          <Modal.Actions>
            <Modal.Close variant="secondary">Cancel</Modal.Close>
            <Modal.Action loading={isLoading} onClick={handleSubmit}>
              Submit
            </Modal.Action>
          </Modal.Actions>
        </Modal>
      </ModalProvider>
    </div>
  );
};

export default Usage;
