/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
        body: ['"Open Sans"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        customMono: ['"Fira Code"', 'monospace'],
        scrollBehavior: ['responsive'], // enables scroll-smooth
      },},
    },
    plugins: [require('tailwind-scrollbar-hide')],
  };
  