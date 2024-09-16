"use client";

import { useState } from "react";
import { useThemeContext } from "@/contexts/ThemeContext";
import { generateCssVariables } from "@/utils/generateShadcnCssVariables";
import Modal, { ModalProvider } from "ruru-ui/components/modal";
import { Button } from "ruru-ui/components/button";
import { Spinner } from "ruru-ui/components/spinner";
import dynamic from "next/dynamic";
import { ScrollArea } from "../scroll-area";

const CodeBlockServer = dynamic(
  () => import("../../components/ui/code-block-server"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[200px] flex items-center justify-center">
        <Spinner className="mr-4" /> Loading...
      </div>
    ),
  },
);

export default function ButtonShowCode() {
  const {
    cssVariables: {
      shadcn: { dark, light },
    },
  } = useThemeContext();

  const cssPalette = generateCssVariables({ light: light, dark: dark });

  return (
    <ModalProvider>
      <Modal.Trigger asChild>
        <Button variant="secondary">Show code</Button>
      </Modal.Trigger>
      <Modal>
        <Modal.Body>
          <Modal.Header>
            <Modal.Title>CSS Variables</Modal.Title>
            <Modal.Subtitle>
              You can use the following code to start integrating your
              application theme.
            </Modal.Subtitle>
          </Modal.Header>
          <Modal.Content className="py-0">
            <ScrollArea className="h-96 -my-3">
              <CodeBlockServer lang="css" code={[cssPalette]} />
            </ScrollArea>
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
}
