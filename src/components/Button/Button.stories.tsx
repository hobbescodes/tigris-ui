import { Button } from "components";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Flex gap={2} align="center">
        <Button>Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="rounded">Button</Button>
        <Button variant="outline">Button</Button>
      </Flex>
      <Flex gap={2} align="center">
        <Button colorScheme="secondary">Button</Button>
        <Button colorScheme="secondary" variant="ghost">
          Button
        </Button>
        <Button colorScheme="secondary" variant="rounded">
          Button
        </Button>
        <Button colorScheme="secondary" variant="outline">
          Button
        </Button>
      </Flex>
      <Flex gap={2} align="center">
        <Button colorScheme="tertiary">Button</Button>
        <Button colorScheme="tertiary" variant="ghost">
          Button
        </Button>
        <Button colorScheme="tertiary" variant="rounded">
          Button
        </Button>
        <Button colorScheme="tertiary" variant="outline">
          Button
        </Button>
      </Flex>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2}>
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button>Button</Button>
      <Button size="lg">Button</Button>
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
