/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1B2E5F',
        secondary: '#435DC7',
        complementary: '#B7B7B7',
        biruComplement: '#C6DBF4',
        linearBlue: {
          start: '#435DC7', // Warna awal
          end: '#E8ECFD', // Warna akhir
        },
      },
      // Atur background gradient menggunakan warna linear baru
      backgroundImage: theme => ({
        'blue-gradient': `linear-gradient(to bottom, ${theme('colors.linearBlue.start')}, ${theme('colors.linearBlue.end')})`,
      }),
    },
  },
  plugins: [],
}
