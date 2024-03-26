/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: ['sm:w-90vw'],
  },
  theme: {
    extend: {
      width: {
        '90vw': '130%',
      },
    },
  },
  plugins: [],
}

