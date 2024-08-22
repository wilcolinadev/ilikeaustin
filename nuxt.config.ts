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
})