import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
const config: Config = {
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}", 
  //   "./components/**/*.{js,ts,jsx,tsx}"
  // ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e89923',
        secondary: '#F7F9FA',
        tertiary: '#2E2E2E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config 