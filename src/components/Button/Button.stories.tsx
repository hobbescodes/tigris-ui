import { useState } from "react";

import { buttonState } from "./Button.spec";
import { Button } from "components";

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
    colorScheme: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
      defaultValue: { summary: "primary" },
    },
    variant: {
      options: ["primary", "outline", "ghost", "rounded"],
      control: { type: "radio" },
      defaultValue: { summary: "primary" },
    },
  },
  name: "Button",
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
