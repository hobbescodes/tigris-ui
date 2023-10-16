import { Button, Card, CardHeader, CardContent, CardFooter } from "components";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card maxW="sm">
      <CardHeader title="Card Title" description="Card description" />
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

const meta = {
  title: "Components/Card",
  component: Card,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Card>;

export default meta;
