/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway Variable', 'sans-serif'],
        heading: ['Comfortaa Variable', 'system-ui'],
      },
      colors: {
        primary: '#124682',
        secondary: '#FFBE43',
        tertiary: '#2D6FB8',
        white: '#F5F6F7',
        tomato: '#F56449',
      },
      backgroundImage: {
        'hero-pattern': "url('assets/images/hero.svg')",
      },
    },
  },
  plugins: [],
}
