/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "primary-100":"#28338B",
        "primary-300":"#C74BD2",
        "primary-500":"#1F1F1F",
        "gradient-100": "#3C1DFF",
        "gradient-300": "#14C9C9"
        
      },
      content: {
        test100: "url('../img/a1.png')",
        test300: "url('../img/a2.png')",
      },
      fontFamily: {
        poppins : ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

