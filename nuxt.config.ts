// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    'nuxt-mail',
    '@vee-validate/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  runtimeConfig: {
      mail: {
        message: {
          to: 'info@omnirent.io',
        },
        smtp: {
          host: "smtps.aruba.it",
          port: 465,
          auth: {
            user: process.env.NUXT_EMAIL_USERNAME,
            pass: process.env.NUXT_EMAIL_PASSWORD,
          },
        }
      },
  },
  site: { 
    url: 'https://www.omnirent.io', 
    name: 'My Awesome Website' 
    },
    robots: {
      allow: [
        '*'
      ]
    },
})