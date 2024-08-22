/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/flowbite-vue/**/*.{js,ts,vue}',
    './node_modules/flowbite/**/*.{js,ts,vue}',
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
        quaternary: '#F0A926',
        white: '#F5F6F7',
        tree: '#169873',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('https://res.cloudinary.com/djf9jqpml/image/upload/w_1600,h_600,c_fill,f_auto,q_auto/v1722023738/Austin/mitchell-kmetz-ztVcGTSD8xw-unsplash_xusxks.jpg')",
      },
    },
  },
  plugins: [],
}
