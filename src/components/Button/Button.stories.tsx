import { Button } from "components";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Flex gap={2} align="center">
      <Button>Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="rounded">Button</Button>
      <Button variant="outline">Button</Button>
    </Flex>
  ),
};

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
