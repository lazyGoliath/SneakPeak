/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false, // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Fixed the double comma
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5252",
        secondary: { 
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      backgroundColor: {
        primary: "#ff5252",
        secondary: "#888883",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
}
