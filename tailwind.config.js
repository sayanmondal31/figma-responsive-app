module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#c2c2c2", 600: "#757575" },
        black: { 900: "#000000" },
        blue: { 700: "#3b77d7" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
