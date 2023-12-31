import { expect } from "@storybook/jest";
import { screen, userEvent, within } from "@storybook/testing-library";

import { sleep } from "lib/util";

import type { ReactRenderer } from "@storybook/react";
import type { PlayFunctionContext, Renderer } from "@storybook/types";

/**
 * Drawer testing suite.
 */
export const drawerState = async <R extends Renderer = ReactRenderer>({
  canvasElement,
  step,
}: PlayFunctionContext<R>) => {
  const canvas = within(canvasElement as HTMLElement);

  await sleep(100);

  const openButton = canvas.getByRole("button", {
    name: /open modal/i,
  });

  await step("It should open drawer on trigger click", async () => {
    await userEvent.click(openButton);

    await sleep(1000);

    const drawerTitle = screen.getByText("Drawer Title");

    await expect(drawerTitle).toBeVisible();
  });

  await step("It should close drawer on close button click", async () => {
    const closeButton = screen.getByLabelText("close button");
    const drawerTitle = screen.getByText("Drawer Title");

    await userEvent.click(closeButton);

    await sleep(1000);

    await expect(drawerTitle).not.toBeVisible();
  });
};
