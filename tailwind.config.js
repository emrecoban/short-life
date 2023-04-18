import { fontFamily } from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {
    fontFamily: {
      dongle: ['var(--font-dongle)', ...fontFamily.sans],
      inter: ['var(--font-inter)', ...fontFamily.sans],
    },
  },
}
export const plugins = []
