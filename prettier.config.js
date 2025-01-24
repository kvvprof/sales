/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  parser: 'typescript',
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: true,
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
  ],
};

export default config;
