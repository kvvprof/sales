import { MiniButton } from '@/components/ui/mini-button/mini-button.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/MiniButton',
	component: MiniButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof MiniButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		children: 'Children',
	},
};
