import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '@/common/ui/select/select.ui';

const meta = {
  title: 'Main/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    options: [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }],
    label: 'Label',
    placeholder: 'Placeholder',
    isAbsoluteListPosition: true,
    loadOptions: undefined,
    onSelect: (option) => option,
    onDelete: () => null,
  },
};
