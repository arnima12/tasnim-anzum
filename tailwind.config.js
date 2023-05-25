/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          "primary": "#F59E0B",
          "secondary": "#FCD34D",
          "base-100": "#FFFFFF",
          "accent": "#2A303C",
          "base-200": "#49BEAA"
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

