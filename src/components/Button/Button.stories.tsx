import { useState } from "react";

import { buttonState } from "./Button.spec";
import { Button } from "components";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

const ButtonTest = () => {
  const [count, setCount] = useState(0);

  return <Button onClick={() => setCount(count + 1)}>Clicks: {count}</Button>;
};

export const Example: Story = {
  args: {
    children: "Click Me",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
      defaultValue: { summary: "md" },
    },
    variant: {
      options: ["primary", "outline", "ghost", "rounded"],
      control: { type: "radio" },
      defaultValue: { summary: "primary" },
    },
  },
  name: "Button",
};

export const Brand: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <Flex gap={1}>
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="rounded">Rounded</Button>
      </Flex>
      <Flex gap={1}>
        <Button colorPalette="brand.secondary" variant="primary">
          Primary
        </Button>
        <Button colorPalette="brand.secondary" variant="outline">
          Outline
        </Button>
        <Button colorPalette="brand.secondary" variant="ghost">
          Ghost
        </Button>
        <Button colorPalette="brand.secondary" variant="rounded">
          Rounded
        </Button>
      </Flex>
      <Flex gap={1}>
        <Button colorPalette="brand.tertiary" variant="primary">
          Primary
        </Button>
        <Button colorPalette="brand.tertiary" variant="outline">
          Outline
        </Button>
        <Button colorPalette="brand.tertiary" variant="ghost">
          Ghost
        </Button>
        <Button colorPalette="brand.tertiary" variant="rounded">
          Rounded
        </Button>
      </Flex>
    </Flex>
  ),
};

export const ButtonState: Story = {
  render: () => <ButtonTest />,
  play: buttonState,
  name: "[TEST] Button State",
  tags: ["test"],
};

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
