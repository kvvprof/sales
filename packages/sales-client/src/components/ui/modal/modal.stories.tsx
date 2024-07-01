import { Modal } from '@/components/ui/modal/modal.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Main/Modal',
	component: Modal,
	parameters: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
	args: {
		title: 'Title',
		children: 'Children',
		isOpen: true,
		onClose: () => null,
	},
};
