/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          textColor: "#362820",
          background: "#f8f5f0",
        }
      },
    },
  },
  plugins: [],
}
