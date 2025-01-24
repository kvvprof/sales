/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-primary': 'var(--c-primary)',
        'c-danger': 'var(--c-danger)',
        'c-success': 'var(--c-success)',
        'c-inactive': 'var(--c-inactive)',

        'c-text-primary': 'var(--c-text-primary)',
        'c-text-secondary': 'var(--c-text-secondary)',
        'c-text-muted': 'var(--c-text-muted)',

        'c-bg-primary': 'var(--c-bg-primary)',
        'c-bg-secondary': 'var(--c-bg-secondary)',

        'c-line-primary': 'var(--c-line-primary)',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
};
