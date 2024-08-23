"use client";

import React from "react";
import { Button } from "ruru-ui/components/button";
import { Input } from "ruru-ui/components/input";
import Modal, { ModalProvider } from "ruru-ui/components/modal";

const SingleButton = () => {
  return (
    <ModalProvider>
      <Modal.Trigger asChild>
        <Button>Open Modal</Button>
      </Modal.Trigger>
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
              Single Button
            </Modal.Title>
            <Modal.Subtitle
              className="p-0"
              style={{
                marginTop: "0em",
                marginBottom: "0em",
              }}
            >
              This modal opens with a Single Button.
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
          <Modal.Close fullWidth variant="secondary">
            Cancel
          </Modal.Close>
        </Modal.Actions>
      </Modal>
    </ModalProvider>
  );
};

export default SingleButton;
