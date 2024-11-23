"use client";

import React, {
  useState,
  useContext,
  useCallback,
  ReactNode,
  createContext,
  useEffect,
} from "react";
import {
  AnimatePresence,
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
} from "framer-motion";
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./button";

/**
 * Represents the props for the Modal component.
 */
export interface ModalContextProps {
  /**
   * The state of the modal.
   *
   * @type {boolean}
   */
  isOpen: boolean;
  /**
   *
   * Open the modal.
   *
   * @returns {void}
   */
  openModal: () => void;
  /**
   *
   * Close the modal.
   *
   * @returns {void}
   */
  closeModal: () => void;
}

/**
 * Represents the props for the Modal component.
 */
export interface ModalProps
  extends Partial<ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>> {
  /**
   * The children of the Modal component.
   */
  children: ReactNode;
  /**
   *
   * The function to call when the user clicks outside the modal.
   *
   * @returns {void}
   */
  onClickOutside?: () => void;
  /**
   * The animation variant to use for the modal.
   *
   * @type {string}
   * @default "default"
   */
  animationVariant?: keyof typeof modalVariants;
}

/**
 * Represents the props for the Modal component.
 */
export interface ModalActionProps extends ButtonProps {
  /**
   * The children of the Modal component.
   */
  fullWidth?: boolean;
  /**
   * The function to call when the user clicks the action.
   *
   * @returns {void} | {Promise<void>}
   */
  onClick?: () => void | Promise<void>;
}

/**
 * Represents the props for the Modal component.
 */
export interface TriggerProps extends ButtonProps {
  /**
   * The children of the Modal component.
   */
  children: ReactNode;
  /**
   *
   * The function to call when the user clicks the trigger.
   *
   * @returns {void}
   */
  onClick?: () => void;
  /**
   *
   * Render as child component.
   *
   * @default false
   * @type {boolean}
   */
  asChild?: boolean;
}

/**
 * Represents the props for the Modal component.
 */
export interface DivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

/**
 * Represents the props for the Modal component.
 */
export interface PTagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

/**
 * Represents the props for the Modal component.
 */
export const modalVariants = {
  default: {
    hidden: {
      opacity: 0,
      y: -50,
      rotateX: "0deg",
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: "0deg",
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      y: -50,
      rotateX: "-10deg",
      transition: { duration: 0.15 },
    },
  },
  fade: {
    hidden: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  },
  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.15 },
    },
  },
  scaleBounce: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      scale: [1.1, 1],
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.15 },
    },
  },
  slideUp: {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.15 },
    },
  },
  slideDown: {
    hidden: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.15 },
    },
  },
  slideRight: {
    hidden: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.15 },
    },
  },
  slideLeft: {
    hidden: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.15 },
    },
  },
  flip: {
    hidden: {
      opacity: 0,
      rotateY: "90deg",
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      rotateY: "0deg",
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      rotateY: "90deg",
      transition: { duration: 0.15 },
    },
  },
  rotate: {
    hidden: {
      opacity: 0,
      rotate: "90deg",
      transition: { duration: 0.15 },
    },
    visible: {
      opacity: 1,
      rotate: "0deg",
      transition: { duration: 0.15 },
    },
    exit: {
      opacity: 0,
      rotate: "90deg",
      transition: { duration: 0.15 },
    },
  },
};

/**
 * Represents the Modal component.
 *
 * @param {ModalProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 *
 */
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

/**
 * Represents the Modal component.
 *
 * @param {ModalProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 *
 */
export const ModalProvider = ({
  children,
}: {
  children: ReactNode;
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

/**
 * Represents the Modal component.
 *
 * @returns {ModalContextProps}
 *
 */
export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

/**
 * Represents the Modal component.
 *
 * @param {ModalProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 *
 */
const Modal = ({
  children,
  onClickOutside,
  animationVariant = "default",
  ...props
}: ModalProps): React.ReactElement => {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[999] left-0 top-0"
          onClick={onClickOutside ? onClickOutside : closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          {...props}
        >
          <motion.div
            className="bg-background border w-full max-w-[500px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants[animationVariant]}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Represents the Modal component.
 *
 * @param {TriggerProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalTrigger = ({
  children,
  onClick,
  asChild = false,
  ...props
}: TriggerProps): React.ReactElement => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal();
    if (onClick) {
      onClick();
    }
  };

  if (asChild) {
    return (
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>
    );
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

Modal.Trigger = ModalTrigger;
ModalTrigger.displayName = "Modal.Trigger";

/**
 * Represents the Modal component.
 *
 * @param {DivProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalBody = ({ children, ...props }: DivProps): React.ReactElement => (
  <div className="mb-5" {...props}>
    {children}
  </div>
);

Modal.Body = ModalBody;
ModalBody.displayName = "Modal.Body";

/**
 * Represents the Modal component.
 *
 * @param {DivProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalHeader = ({
  children,
  className,
  ...props
}: DivProps): React.ReactElement => (
  <div className={cn("mb-4 p-3 border-b", className)} {...props}>
    {children}
  </div>
);

Modal.Header = ModalHeader;
ModalHeader.displayName = "Modal.Header";

/**
 * Represents the Modal component.
 *
 * @param {PTagProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalTitle = ({
  children,
  className,
  ...props
}: PTagProps): React.ReactElement => (
  <p className={cn("text-2xl", className)} {...props}>
    {children}
  </p>
);

Modal.Title = ModalTitle;
ModalTitle.displayName = "Modal.Title";

/**
 * Represents the Modal component.
 *
 * @param {DivProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalContent = ({
  children,
  className,
  ...props
}: DivProps): React.ReactElement => (
  <div className={cn("p-3", className)} {...props}>
    {children}
  </div>
);

Modal.Content = ModalContent;
ModalContent.displayName = "Modal.Content";

/**
 * Represents the Modal component.
 *
 * @param {DivProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalSubtitle = ({
  children,
  className,
  ...props
}: DivProps): React.ReactElement => (
  <p className={cn("text-sm text-muted-foreground mt-2", className)} {...props}>
    {children}
  </p>
);

Modal.Subtitle = ModalSubtitle;
ModalSubtitle.displayName = "Modal.Subtitle";

/**
 * Represents the Modal component.
 *
 * @param {DivProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalActions = ({
  children,
  className,
  ...props
}: DivProps): React.ReactElement => (
  <div
    className={cn(
      "bg-card border-t p-3 flex justify-between gap-2.5 rounded-br-[10px] rounded-bl-[10px] w-full",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

Modal.Actions = ModalActions;
ModalActions.displayName = "Modal.Actions";

/**
 * Represents the Modal component.
 *
 * @param {ModalActionProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalAction = ({
  fullWidth = false,
  onClick,
  className,
  ...props
}: ModalActionProps): React.ReactElement => {
  const { closeModal } = useModal();

  const handleClick = async () => {
    if (onClick) {
      await onClick();
    }
    closeModal();
  };

  return (
    <Button
      className={cn("text-base", className, fullWidth && "w-full")}
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </Button>
  );
};

Modal.Action = ModalAction;
ModalAction.displayName = "Modal.Action";

/**
 * Represents the Modal component.
 *
 * @param {ModalActionProps} props - The props for the Modal component.
 * @returns {React.ReactElement}
 */
const ModalClose = (props: ModalActionProps): React.ReactElement => (
  <Modal.Action {...props} onClick={useModal().closeModal}>
    {props.children}
  </Modal.Action>
);

Modal.Close = ModalClose;
ModalClose.displayName = "Modal.Close";

export default Modal;
