/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#435DC7",
          200: "#8AA0E5",
          300: "#1A1B1F",
          400: "#333",
          500: "#969696",
          600: "#f9f9f9",
          700: "#F10707",
          800: "#EFEFEF"
        },
      },
      screens: {
        'hp' : '475px',
        'tablet': '640px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

