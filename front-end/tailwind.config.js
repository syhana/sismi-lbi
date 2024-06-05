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
        tersedia: '#0FA958',
        biruLaut: '#8AA0E5',
        oren: '#FF650E',
        tidakTersedia: '#ADA694',
        red: '#F61111',
        redDark: '#FF0000',
        linearBlue: {
          start: '#435DC7', // Warna awal
          end: '#E8ECFD', // Warna akhir
        },
        alertSuccess: '#0FA958',
        linearBlue2: {
          start: '#8AA0E5', // Warna awal
          end: '#435DC7', // Warna akhir
        },
      },
      // Atur background gradient menggunakan warna linear baru
      backgroundImage: theme => ({
        'blue-gradient': `linear-gradient(to bottom, ${theme('colors.linearBlue.start')}, ${theme('colors.linearBlue.end')})`,
        'blue-gradient2': `linear-gradient(to bottom, ${theme('colors.linearBlue2.start')}, ${theme('colors.linearBlue2.end')})`,
      }),
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      }, ['responsive'])
    },
  ],
}
