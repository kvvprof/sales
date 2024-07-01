/** @type {import('prettier').Config} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	parser: 'typescript',
	trailingComma: 'all',
	singleQuote: true,
	jsxSingleQuote: true,
	semi: true,
	printWidth: 80,
	useTabs: true,
	tabWidth: 2,
	endOfLine: 'auto',
	arrowParens: 'always',
	overrides: [
		{
			files: '*.json',
			options: {
				singleQuote: false,
				parser: 'json',
			},
		},
		{
			files: '*.js',
			options: {
				parser: 'babel',
			},
		},
	],
};

export default config;
