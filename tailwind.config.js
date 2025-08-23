
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wizard: {
          bg1: "#0a0416",
          bg2: "#120a24",
          accent: "#8b5cf6",
          glow: "#22d3ee"
        }
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      },
      backdropBlur: {
        xs: "2px"
      }
    },
  },
  plugins: [],
}
