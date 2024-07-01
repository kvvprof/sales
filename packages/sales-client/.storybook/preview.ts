import type { Preview } from '@storybook/react';
import '@/app/index.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#ffffff',
				},
				{
					name: 'dark',
					value: '#000000',
				},
			],
		},
	},
};

export default preview;
