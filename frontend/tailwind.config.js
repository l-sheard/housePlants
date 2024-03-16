/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Sports
        darkGreen: "#719230",
        lightGreen: "#B6CF6A",
        cream: "#FFFFBF",
        yellow: "#FFD044",
        orange: "#FE9E38",
        brown: "#563400",
        darkBrown: "#1A1101",
  },
  fontFamily: {
    winkle: ['"winkle"', 'cursive'],
  },
  plugins: [],
}
}
}