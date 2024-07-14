/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary': '#F2E8CF',
      'success': '#386641', 
      'secondary': '#FFEBF1',
      'secondsuccess' : '#24472F'

    },
    extend: {
      backgroundSize: {
        zoom: "250%", 
      },
      fontFamily: {
        powerGrotesk: ["PowerGrotesk", "sans-serif"],
        silverGarden: ["SilverGarden", "serif"],
      },
    },
    fontFamily: {
      sans: ["PowerGrotesk", "sans-serif"],
    },
  },
  plugins: [],
};
