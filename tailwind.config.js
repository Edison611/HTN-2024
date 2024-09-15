module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlack: "#0d0d0d",
        darkPurple: "#2e003e",
        neonBlue: "#00f6ff",
        neonPurple: "#8f00ff",
        blue: "#4682b4",
        darkBlue: "#111e6c",
      },
      boxShadow: {
        'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.5)', // Adjust size and color as needed
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // Adjust size and color as needed
        },
      });
    },
  ],
}