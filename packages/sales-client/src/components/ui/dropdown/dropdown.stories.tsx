import { Dropdown } from '@/components/ui/dropdown/dropdown.ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
	title: 'Main/Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Main: Story = {
	args: {
		name: 'Dropdown',
		children: [
			<Dropdown.Item key='2' name='Dropdown.Item' onClick={() => null} />,
			<Dropdown.Item key='3' name='Dropdown.Item' onClick={() => null} />,
			<Dropdown.Item key='1' name='Dropdown.Item' onClick={() => null} />,
		],
	},
};
