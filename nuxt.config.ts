// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
   modules: ['@nuxtjs/color-mode', 'nuxt-swiper', '@nuxt/icon'],
  //  ssr : false,
  //  target : 'static',
  colorMode : {
       classPrefix: '',
    classSuffix: '',
    emitClasses: true,
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt_color_mode_script',
    inject: true,
    watch: true
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})