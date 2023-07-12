/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "primary-100":"#28338B",
        "primary-300":"#C74BD2",
        "primary-500":"#1F1F1F"
      },
      content: {
        test100: "url('./build/img/a1.png')",
        test300: "url('./build/img/a2.png')",
      }
    },
  },
  plugins: [],
}

