import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/common/ui/input/input.ui';

const meta = {
  title: 'Main/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    label: 'Label',
    error: null,
  },
};
