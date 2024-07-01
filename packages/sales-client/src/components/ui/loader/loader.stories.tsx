import { Loader } from '@/components/ui/loader/loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: { size: 'large' },
};
