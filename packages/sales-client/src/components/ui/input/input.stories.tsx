import { Input } from '@/components/ui/input/input.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'light',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		label: 'Label',
		error: null,
	},
};
