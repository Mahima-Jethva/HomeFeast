// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1C3A34',     // Dark Green Sidebar & Text
        sand: '#E5B27D',       // Hero Banner Orangeish-Brown
        terracotta: '#D47559', // Darker Decorative Circles
        cream: '#FAF6EF',      // Global Background
        peach: '#F4CFAD',      // Pill Badge Background
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}