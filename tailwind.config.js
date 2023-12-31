/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ededed',
        'background': '#121212',
        'accent': '#00ffa6',
        'red': '#ff4e4e' 
       },
    },
  },
  plugins: [],
}
