/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itcBold: ["itcBold"],
        itcMedium: ["itcMedium"],
        itcDemi: ["itcDemi"],
      },
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        text: "var(--text)",
      },
    },
  },
  plugins: [],
};


