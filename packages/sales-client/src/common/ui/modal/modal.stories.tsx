import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '@/common/ui/modal/modal.ui';

const meta = {
  title: 'Main/Modal',
  component: Modal,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    title: 'Title',
    children: 'Children',
    isOpen: true,
    onClose: () => null,
  },
};
