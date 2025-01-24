import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@/common/ui/card/card.ui';

const meta = {
  title: 'Main/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Children',
    linkTo: null,
    onDelete: () => null,
  },
};
