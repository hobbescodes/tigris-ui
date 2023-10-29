import { Button, Drawer } from "components";
import { Flex, panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Drawer>;

export const Example: Story = {
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
  argTypes: {
    alignment: {
      options: ["start", "end"],
      control: { type: "radio" },
      defaultValue: { summary: "start" },
    },
    placement: {
      options: ["right", "left"],
      control: { type: "radio" },
      defaultValue: { summary: "right" },
    },
  },
  parameters: {
    controls: { include: ["title", "description", "alignment", "placement"] },
  },
  name: "Drawer",
};

export const WithContext: Story = {
  args: {
    ...Example.args,
    footer: ({ close }) => (
      <Flex gap={2}>
        <Button onClick={() => close()} variant="outline">
          Cancel
        </Button>
        <Button>Action</Button>
      </Flex>
    ),
    children: ({ isOpen }) => (
      <Flex direction="column" gap={2}>
        <panda.p mt={2} color="fg.primary">
          Open: {String(isOpen)}
        </panda.p>
        <panda.p mt={2} color="fg.primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </panda.p>
      </Flex>
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
