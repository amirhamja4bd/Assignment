/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      "roboto":['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#14CC45',
        'primaryHover': '#00A82D',
        'blur': '#ffffff',
        
      },
    },
  },
  plugins: [],
}
