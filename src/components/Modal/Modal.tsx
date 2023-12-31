import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogTitle,
  DialogTrigger,
} from "@ark-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { modal } from "generated/panda/recipes";
import { useIsMobile } from "lib/hooks";
import { getContextualChildren } from "lib/util";

import type { DialogProps } from "@ark-ui/react";
import type { ModalVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface ModalProps extends DialogProps, ModalVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
}

const PandaMotionContainer = panda(motion.div);

/**
 * A modal window that appears on top of the main content.
 */
const Modal = ({
  trigger,
  title,
  description,
  children,
  variant,
  ...rest
}: ModalProps) => {
  const classes = modal({ variant });

  const [isTapped, setIsTapped] = useState(false);

  const isMobile = useIsMobile();

  return (
    <Dialog lazyMount unmountOnExit {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <DialogTrigger className={classes.trigger} asChild>
              {trigger}
            </DialogTrigger>
          )}

          <DialogBackdrop className={classes.backdrop} />

          <DialogPositioner className={classes.positioner}>
            <DialogContent className={classes.content} asChild>
              <PandaMotionContainer
                drag={isMobile ? "y" : false}
                dragConstraints={{ top: 0, bottom: 500 }}
                dragElastic={false}
                dragSnapToOrigin
                onDrag={(_e, info) => {
                  if (info.offset.y > 250) ctx.close();
                }}
                onTapStart={() => setIsTapped(true)}
                onTap={() => setIsTapped(false)}
                cursor={isMobile ? "pointer" : "default"}
              >
                <panda.div
                  display={{ base: "block", sm: "none" }}
                  w="20%"
                  borderRadius="full"
                  mx="auto"
                  my={3}
                  h={2}
                  bgColor="border.primary"
                  opacity={isTapped ? 0.8 : 1}
                />

                {title && (
                  <DialogTitle className={classes.title}>{title}</DialogTitle>
                )}

                {description && (
                  <DialogDescription className={classes.description}>
                    {description}
                  </DialogDescription>
                )}

                {getContextualChildren({ ctx, children })}

                <DialogCloseTrigger
                  aria-label="close button"
                  className={classes.closeTrigger}
                >
                  <Icon color="fg.primary">
                    <CloseIcon />
                  </Icon>
                </DialogCloseTrigger>
              </PandaMotionContainer>
            </DialogContent>
          </DialogPositioner>
        </>
      )}
    </Dialog>
  );
};

export default Modal;
