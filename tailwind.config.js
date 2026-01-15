/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-deep": "#0B1C2D",
        "navy-dark": "#081524",
        "navy-darker": "#050E18",
        gold: "#C9A14A",
        "gold-dark": "#B08B3E",
        "grey-muted": "#AAB2BD",
        "white-soft": "#F5F7FA",
      },
    },
  },
  plugins: [],
};
