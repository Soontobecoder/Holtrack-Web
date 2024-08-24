/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
    safelist: [
      "animate-[slide-right_1s_ease-in-out]",
      "animate-[fade-in-down_1s_ease-in-out]",
    ],
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};
