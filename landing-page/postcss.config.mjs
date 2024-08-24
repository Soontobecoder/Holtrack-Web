/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  content: ["./pages/**/*.{ts,tsx}", "./public/**/*.html"],
};

export default config;
