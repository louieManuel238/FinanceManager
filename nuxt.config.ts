// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@picocss/pico'],
  modules: ['nuxt-vue3-google-signin', 'nuxt-auth-utils'],
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  }
})