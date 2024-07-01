import { Pagination } from '@/components/ui/pagination/pagination.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/Pagination',
	component: Pagination,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		limit: 20,
		totalCount: 1000,
		initialPage: 1,
		onPageChange: () => null,
	},
};
