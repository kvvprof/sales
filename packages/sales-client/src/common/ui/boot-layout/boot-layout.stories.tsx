import type { Meta, StoryObj } from '@storybook/react';

import { BootLayout } from '@/common';

const meta = {
  title: 'Main/BootLayout',
  component: BootLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BootLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    isLoading: true,
    children: 'Children',
    isFullScreen: true,
  },
};
