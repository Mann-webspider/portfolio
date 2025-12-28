/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,mdx}",
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
  plugins: [ require('@tailwindcss/typography'),],
};


