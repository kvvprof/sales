import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/ContentLayout',
	component: ContentLayout,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ContentLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		title: 'Title',
		children: 'Children',
	},
};
