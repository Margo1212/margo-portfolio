/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",   
    "./src/views/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: {
        500: '#68138C',
        300: '#9126BF',
        200: '#CC6AD9',
        100: '#A458C5'
      },
      secondary: {
        500: '#81B80C',
        300: '#BAD977'
      },
      text: {
        primary: '#000000',
        dark: '#595959',
        light: '#C6C6C6',
      },
      alert: '#AC353D',
    },
    extend: {
      textDecorationThickness: {
        2: '1.5px',
      }
    },
  },
  plugins: [],
}
