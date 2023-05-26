module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  content: ['./node_modules/flowbite/**/*.js'],
};
