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
        Regular: ["Poppins-Light", "sans-serif"],
        Medium: ["Poppins-Medium", "sans-serif"],
        Bold: ["Poppins-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
