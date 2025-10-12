/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#0C2239", gold: "#D1A234", charcoal: "#2C2C2C", lightbg: "#F9FAFB" },
      boxShadow: { soft: "0 6px 24px rgba(0,0,0,0.06)" }
    },
  },
  plugins: [],
}
