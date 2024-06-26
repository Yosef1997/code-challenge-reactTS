/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#1b1b1b",
      orange: "#ffa31a",
      grey: "#808080",
      "light-black": "#292929",
    },
    extend: {
      backgroundImage: {
        dot: "url('/assets/dot.png')",
        "hero-bg": "url('/assets/hero-bg.jpg')",
        "overview-bg": "url('/assets/overview-bg.jpg')",
        "footer-bg": "url('/assets/footer-bg.jpg')",
        "product-bg": "url('/assets/product-bg.png')",
      },
    },
  },
  plugins: [],
}
