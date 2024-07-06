/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      "light"
    ]
  }
}

