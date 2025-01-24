import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@/common/ui/tag/tag.ui';

const meta = {
  title: 'Main/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Children',
    tagSize: 'm',
  },
};
