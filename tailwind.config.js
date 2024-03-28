/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    jit: true,
  },
  theme: {
    fontFamily: {
      Merriweather: "Merriweather"
    },
    extend: {
      colors: {
        Lime: "#365314",
      },
      scale: {
        '175': '1.75',
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      },
    },
    
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}