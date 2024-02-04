/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntuBold: ["Ubuntu-Bold", "sans-serif"],
        ubuntuMedium: ["Ubuntu-Medium", "sans-serif"],
        ubuntuRegular: ["Ubuntu-Regular", "sans-serif"],
      },
      colors: {
        "neutral-700": "hsl(231, 11%, 63%)",
        "neutral-400": "hsl(229, 24%, 87%)",
        "neutral-300": "hsl(217, 100%, 97%)",
        "neutral-200": "hsl(231, 100%, 99%)",
        "dark-blue": "hsl(213, 96%, 18%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "purple-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        red: "hsl(354, 84%, 57%)",
      },
      fontSize: {
        900: "1.5rem",
        700: "1.063",
        600: "0.938rem",
        500: "0.813rem",
      },
      margin: {
        "side-margin": "1rem",
      },
      inset: {
        26: "6.5rem",
        1.25: "0.3125rem",
        28: "5.85rem",
      },
      height: {
        almostScreen: "89vh",
        restOfScreen: "11vh",
        5.5: "1.375rem",
      },
      outlineWidth: {
        0.5: "0.1px",
      },
      backgroundImage: {
        "sidebar-mobile": "url('../assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
