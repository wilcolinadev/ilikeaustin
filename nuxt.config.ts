// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],

  typescript: {
    typeCheck: true,
  },

  eslint: {
    config: {},
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-08-22',
  app: {
    head: {
      title: 'ILikeAustin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Default description',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://res.cloudinary.com/djf9jqpml/image/upload/v1724384373/Austin/I_Like_Austin_tol7xf.png',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          id: 'hs-script-loader',
          src: '//js.hs-scripts.com/47155146.js',
          async: true,
          defer: true,
        },
      ],
    },
  },
})
