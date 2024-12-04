module.exports = {
  mode: "jit",
  //content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{html,jsx}"],
  content: ["./src/**/*.{html,ts,js,jsx,tsx}",, "./src/app/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_33": "#00000033", "900_3f": "#0000003f", "900_a0": "#000000a0" },
        blue: { 200: "#a0cbe8", a400: "#0a7aff" },
        blue_gray: { 100: "#d9d9d9", 900: "#313043", "900_01": "#292d32" },
        gray: { 100: "#f5f5f5", 400: "#aeaeb2", 700: "#636366", "400_01": "#b7bac2" },
        green: { 500: "#59a14f", "500_01": "#34c759" },
        indigo: { 400: "#4e79a7" },
        light_blue: { 700: "#0789c9", "700_cc": "#0789c9cc" },
        white: { a700: "#ffffff" },
        yellow: { 700: "#ffba35" },
        green_500_01 :{"500_01": "#34c759"},
      },
      boxShadow: { xs: "0 4px 4px 0 #0000003f", bs: "inset 0 4px 4px 0 #0000003f" },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
    },
  },
  
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"),],
};