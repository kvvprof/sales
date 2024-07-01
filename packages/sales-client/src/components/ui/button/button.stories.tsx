import { Button } from '@/components/ui/button/button.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		buttonSize: 'medium',
		children: 'Children',
	},
};
