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
        gray: {
          200: "#ebebeb",
          300: "#e1e1e1",
          400: "#bfbfbf",
          600: "#848484",
          "600_01": "#6c6c6c",
          "400_01": "#b3b3b3",
        },
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_1c": "#0000001c",
        },
        blue_gray: {
          100: "#d9d9d9",
          400: "#78828a",
          800: "#434e58",
          900: "#2e2e2e",
        },
        blue: { 500: "#2196f3" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", plusjakartasans: "Plus Jakarta Sans" },
      boxShadow: {
        bs1: "0px 0px  20px 0px #0000003f",
        bs2: "0px 4px  4px 0px #0000003f",
        bs: "0px 4px  15px 0px #0000001c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
