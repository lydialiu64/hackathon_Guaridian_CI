/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#080b12",
        panel: "#101722",
        line: "#223047",
        cyan: "#38d4ff",
        signal: "#ff9f43",
        danger: "#ff4d6d",
        success: "#46e6a6"
      },
      boxShadow: {
        glow: "0 0 36px rgba(56, 212, 255, 0.18)",
        amber: "0 0 30px rgba(255, 159, 67, 0.2)"
      }
    }
  },
  plugins: [],
};
