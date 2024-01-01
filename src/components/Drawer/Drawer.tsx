import { ark, Dialog as ArkDialog } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/Icon/Icon";
import { Flex, panda } from "generated/panda/jsx";
import { drawer } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { DialogProps } from "@ark-ui/react";
import type { DialogContext } from "@ark-ui/react/dialog/dialog-context";
import type { DrawerVariantProps } from "generated/panda/recipes";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(drawer);

export interface DrawerProps extends DialogProps, DrawerVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  headerAddon?: ReactNode;
  footer?: ReactNode | ((props: DialogContext) => ReactNode);
  /** Drawer content (body) container props. */
  contentProps?: ComponentPropsWithoutRef<typeof DrawerContent>;
}

export const DrawerRoot = withProvider(panda(ArkDialog.Root), "root");

export const DrawerTrigger = withContext(panda(ArkDialog.Trigger), "trigger");

export const DrawerBackdrop = withContext(
  panda(ArkDialog.Backdrop),
  "backdrop"
);

export const DrawerCloseTrigger = withContext(
  panda(ArkDialog.CloseTrigger),
  "closeTrigger"
);

export const DrawerPositioner = withContext(
  panda(ArkDialog.Positioner),
  "positioner"
);

export const DrawerContent = withContext(panda(ArkDialog.Content), "content");

export const DrawerTitle = withContext(panda(ArkDialog.Title), "title");

export const DrawerDescription = withContext(
  panda(ArkDialog.Description),
  "description"
);

export const DrawerHeader = withContext(panda(ark.div), "header");

export const DrawerBody = withContext(panda(ark.div), "body");

export const DrawerFooter = withContext(panda(ark.div), "footer");

/**
 * A panel that slides in from the edge of the screen.
 */
const Drawer = ({
  trigger,
  title,
  description,
  headerAddon,
  footer,
  contentProps,
  children,
  ...rest
}: DrawerProps) => (
  <DrawerRoot lazyMount unmountOnExit {...rest}>
    {(ctx) => (
      <>
        {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}

        <DrawerBackdrop />

        <DrawerPositioner>
          <DrawerContent {...contentProps}>
            <DrawerHeader>
              {headerAddon && headerAddon}

              <Flex direction="column" gap={1}>
                {title && <DrawerTitle>{title}</DrawerTitle>}

                {description && (
                  <DrawerDescription>{description}</DrawerDescription>
                )}
              </Flex>

              <DrawerCloseTrigger aria-label="close button">
                <Icon color="fg.primary">
                  <CloseIcon />
                </Icon>
              </DrawerCloseTrigger>
            </DrawerHeader>

            <DrawerBody asChild>
              {getContextualChildren({ ctx, children })}
            </DrawerBody>

            {footer && (
              <DrawerFooter asChild>
                {getContextualChildren({ ctx, children: footer })}
              </DrawerFooter>
            )}
          </DrawerContent>
        </DrawerPositioner>
      </>
    )}
  </DrawerRoot>
);

export default Drawer;
