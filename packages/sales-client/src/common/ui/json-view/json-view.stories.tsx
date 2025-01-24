import type { Meta, StoryObj } from '@storybook/react';

import { JSONView } from '@/common/ui/json-view/json-view.ui';

const meta = {
  title: 'Main/JSONView',
  component: JSONView,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JSONView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    data: {
      id: 1,
      name: 'John',
      age: 30,
      groups: [
        { id: 1, name: 'Group 1' },
        { id: 2, name: 'Group 2' },
      ],
    },
    isLoading: false,
  },
};
