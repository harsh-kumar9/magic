/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple': '#2C0E3A'
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
        growFromCenter: {
          "0%": {
            transform: "scaleX(0)", // Start from zero width
          },
          "100%": {
            transform: "scaleX(1)", // Full width
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        bounce: "bounce 2s infinite linear",
        growFromCenter: "growFromCenter 1s ease-out forwards",
        fadeIn: "fadeIn 1.3s ease-out 1.3s forwards", // Starts after a 2-second delay
      },
      screens: {
        '1.5xl': '1400px',
      },
    },
  },
  plugins: [],
};
