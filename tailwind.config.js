/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: "url('/assets/bg-Image.svg')",
      },
      fontFamily: {
        sans: ["recoleta", "sans-serif"],
      },
      backgroundColor: {
        primary: "#0E766D",
      },
      textColor: {
        primary: "#0E766D",
      },
      borderColor: {
        primary: "#0E766D",
      },
      colors: {
        primary: "#0E766D",
      },

      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1024px",
          "2xl": "1280px",
          "3xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
