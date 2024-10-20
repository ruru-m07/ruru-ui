"use client";

import React, { useState } from "react";
import { Stack } from "ruru-ui/components/stack";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "ruru-ui/components/select";
import Modal, { ModalProvider, modalVariants } from "ruru-ui/components/modal";
import { Input } from "ruru-ui/components/input";

const ModalAnimation = (): React.ReactNode => {
  const [selectedVariant, setSelectedVariant] = useState<string>("default");

  const handleSubmit = async () => {
    // Your submit logic here
    console.log("Submitted");
    // Simulate an API call or any async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Stack direction={"column"} justify={"center"} align={"center"} gap={20}>
      <Select
        onValueChange={(e) => setSelectedVariant(e)}
        defaultValue="default"
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a animation variants" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>variants</SelectLabel>
            <SelectSeparator />
            {(
              Object.keys(modalVariants) as Array<keyof typeof modalVariants>
            ).map((variantKey, index) => (
              <SelectItem value={variantKey}>{variantKey}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <ModalProvider>
        <Modal.Trigger>Open {selectedVariant} Modal</Modal.Trigger>
        <Modal animationVariant={selectedVariant as keyof typeof modalVariants}>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title>Create Username</Modal.Title>
              <Modal.Subtitle>
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
            <Modal.Action onClick={handleSubmit}>Submit</Modal.Action>
          </Modal.Actions>
        </Modal>
      </ModalProvider>
    </Stack>
  );
};

export default ModalAnimation;
