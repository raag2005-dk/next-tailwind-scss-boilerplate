module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen"]
    },
    colors: {
      dark: "#212121",
      darkest: "#151515",
      light: "#e8e8e8",
      hover: "#6b72ff", 
      select: "#ff3d87",
    },
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}