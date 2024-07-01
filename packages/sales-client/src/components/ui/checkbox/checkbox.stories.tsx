import { Checkbox } from '@/components/ui/checkbox/checkbox.ui';

import type { Meta, StoryObj } from '@storybook/react';

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
