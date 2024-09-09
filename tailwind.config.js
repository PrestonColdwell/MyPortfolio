/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primaryDark: "#0c0c0c",
      primaryLight: "#212121",
      secondaryDark: "#002756",
      secondaryLight: "#00447c",
      tertiaryDark: "#035b7a",
      tertiaryLight: "#0b7b9e",
      creamDark: "#c6c3b6",
      creamLight: "#dddace",
      whiteDark: "#eaeaea",
      whiteLight: "#f2f3f4",
      link: "#007bff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    // fontSize: {
    //   h1: ["2.5rem", { lineHeight: "1.2" }],
    //   h2: ["2rem", { lineHeight: "1.25" }],
    //   h3: ["1.75rem", { lineHeight: "1.3" }],
    //   h4: ["1.5rem", { lineHeight: "1.4" }],
    //   h5: ["1.25rem", { lineHeight: "1.45" }],
    //   h6: ["1rem", { lineHeight: "1.5" }],
    //   // ... other sizes
    // },
    extend: {
      fontFamily: {
        sans: ["Genos", "sans"],
        GreatVibes: ["Great Vibes", "sans"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
