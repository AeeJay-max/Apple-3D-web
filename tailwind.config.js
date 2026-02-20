/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : "#2997FF",
        blue :"#2997FF",
        gray : {
          DEFAULT : "#86868b",
          100 : "#94928d",
          200 : "#afafaf",
          300 : "#42424570"
        },
        zinc : "#101010"
      },
      keyframes : {
        glow: {
          '0%, 100%' : {filter: 'brightness(1) blur(0px)'},
          '50%': {filter: 'brightness(1.6) blur(1px)'}
        }
      },
      animation: {
        glow: 'glow 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}