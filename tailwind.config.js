/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-gray-600', 'bg-gray-700/50',
    'bg-green-600', 'bg-green-700/50',
    'bg-yellow-600', 'bg-yellow-700/50',
    'bg-red-600', 'bg-red-700/50',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
