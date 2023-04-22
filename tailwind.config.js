/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem'
      },
      colors: {
        primary: {
          contrast: colors.white,
          light: colors.lime[50],
          main: colors.lime[600],
          dark: colors.lime[700]
        }
      }
    }
  },
  plugins: []
}
