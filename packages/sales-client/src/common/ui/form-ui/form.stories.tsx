import type { Meta, StoryObj } from '@storybook/react';

import { Form } from '@/common/ui/form-ui/form.ui';

const meta = {
  title: 'Main/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: 'Children',
  },
};
