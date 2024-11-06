/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Varela: ["Varela Round", "sans-serif"],
        Noto: ["Noto Sans", "sans-serif"],
        Roboto: ["Roboto Condensed", "sans-serif"],
        Space: ["Space Grotesk", "sans-serif"],
       },
      colors: {
          "primary": "var(--primary-color)",
          "secondary": "var(--secondary-color)",
          "secondaryHover": "var(--secondaryHover-color)",
          "main":"var(--main-color)"
      },
    },
  },
  plugins: [
  ],
}
