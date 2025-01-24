import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/common/ui/checkbox/checkbox.ui';

const meta = {
  title: 'Main/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    checked: true,
    name: 'name',
    label: 'label',
    error: null,
  },
};
