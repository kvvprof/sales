import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/common';

const meta = {
  title: 'Main/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    buttonSize: 'm',
    children: 'Children',
  },
};
