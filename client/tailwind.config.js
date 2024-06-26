/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Economica: ["Economica", "sans-serif"],
      },
      colors: {
        forestGreen: "#228B22",
        limeGreen: "#32CD32",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
