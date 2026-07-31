/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
          deep: "rgb(var(--surface-deep) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          dark: "rgb(var(--gold-dark) / <alpha-value>)",
        },
        "on-gold": "rgb(var(--on-gold) / <alpha-value>)",
        brand: "#0B1C2D",
        "navy-deep": "#0B1C2D",
        "navy-dark": "#081524",
        "navy-darker": "#050E18",
        "grey-muted": "#AAB2BD",
        "white-soft": "#F5F7FA",
      },
    },
  },
  plugins: [],
};
