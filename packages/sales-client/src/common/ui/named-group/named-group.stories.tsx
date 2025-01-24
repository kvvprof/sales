import type { Meta, StoryObj } from '@storybook/react';

import { NamedGroup } from '@/common/ui/named-group/named-group.ui';

const meta = {
  title: 'Main/NamedGroup',
  component: NamedGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NamedGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    title: 'Title',
    children: 'Children',
  },
};
