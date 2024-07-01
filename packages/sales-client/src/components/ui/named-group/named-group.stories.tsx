import { NamedGroup } from '@/components/ui/named-group/named-group.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/NamedGroup',
	component: NamedGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NamedGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		title: 'Title',
		children: 'Children',
	},
};
