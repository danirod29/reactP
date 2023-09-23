/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{mytheme: {
          
      "primary": "#0c4a6e",
               
      "secondary": "#60a5fa",
               
      "accent": "#a3e635",
               
      "neutral": "#2a323c",
               
      "base-100": "#1d232a",
               
      "info": "#3abff8",
               
      "success": "#36d399",
               
      "warning": "#fbbd23",
               
      "error": "#f87272",
               }},"light", "dark", "cupcake"],
  },
}

