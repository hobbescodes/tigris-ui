import { modalState } from "./Modal.spec";
import { Button, Modal } from "components";
import { panda } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      description="Modal Description"
    >
      <panda.p mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </panda.p>
    </Modal>
  ),
};

export const WithContext: Story = {
  render: () => (
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      description="Modal Description"
    >
      {({ isOpen }) => <panda.p mt={2}>Open: {String(isOpen)}</panda.p>}
    </Modal>
  ),
};

export const ModalState: Story = {
  ...Default,
  play: modalState,
  name: "[TEST] Modal State",
  tags: ["test"],
};

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Modal>;

export default meta;
