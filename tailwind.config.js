/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      orange: "#ff9900",
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/hero-bg.jpg')",
        "footer-bg": "url('/assets/footer-bg.jpg')",
        "product-bg": "url('/assets/product-bg.png')",
      },
    },
  },
  plugins: [],
}
