/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bule": "#2B9BED",
        "primary-button": "#0889CA",
      },
    },
  },
  plugins: [],
};
