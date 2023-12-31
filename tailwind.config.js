/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "390px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontSize: {
      xs: "10px",
      sm: "14px",
      md: "18px",
      lg: "22px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          6: "#F5401B",
          5: "#F76649",
          4: "#F98C76",
          3: "#FBB3A4",
          2: "#FDD9D1",
          1: "#FEECE8",
          0: "#FFF7F5",
        },
        grayscale: {
          100: "#030303",
          90: "#1A1A1A",
          80: "#333333",
          70: "#4D4D4D",
          60: "#666666",
          50: "#808080",
          40: "#999999",
          30: "#B3B3B3",
          20: "#CCCCCC",
          10: "#E6E6E6",
          5: "#F7F7F7",
        },
        marks: {
          6: "#FF0000",
          5: "#FF9901",
          4: "#FFE500",
          3: "#38D12B",
          2: "#359EFF",
          1: "#180399",
          0: "#B426F6",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
