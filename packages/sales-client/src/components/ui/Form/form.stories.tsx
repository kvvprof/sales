import { Form } from '@/components/ui/Form/form.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/Form',
	component: Form,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		children: 'Children',
	},
};
