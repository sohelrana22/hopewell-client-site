module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
