import type { Meta, StoryObj } from '@storybook/react';

import { DatePickerUI } from '@/common/ui/date-picker/date-picker.ui';

const meta = {
  title: 'Main/DatePickerUI',
  component: DatePickerUI,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePickerUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    value: new Date('2025-01-01').toISOString(),
    onChange() {},
    name: 'name',
    label: 'label',
    error: null,
  },
};
