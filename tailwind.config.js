/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "nx-",
  darkMode: "class",
  content: [
    "./components/**/*.js",
    "./pages/**/*.{md,mdx}",
    "./theme.config.tsx",
  ],
};
