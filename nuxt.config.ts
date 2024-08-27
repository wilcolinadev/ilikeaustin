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
        {
          name: 'impact-site-verification',
          content: '3db70713-fa95-4a72-952b-a1e2da454d5f',
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
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-6E6NCQJ8Z3`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6E6NCQJ8Z3'); 
          `,
        },
      ],
    },
  },
})
