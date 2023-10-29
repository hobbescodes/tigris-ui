import { Button, Drawer } from "components";
import { Flex, panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Drawer</Button>,
    title: "Drawer Title",
    description: "Drawer Description",
    children: (
      <panda.p mt={2} color="fg.primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </panda.p>
    ),
  },
};

export const WithContext: Story = {
  args: {
    ...Default.args,
    footer: ({ close }) => (
      <Flex gap={2}>
        <Button onClick={() => close()} variant="outline">
          Cancel
        </Button>
        <Button>Action</Button>
      </Flex>
    ),
    children: ({ isOpen }) => (
      <panda.p mt={2} color="fg.primary">
        Open: {String(isOpen)}
      </panda.p>
    ),
  },
};

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Drawer>;

export default meta;
