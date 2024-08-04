// https://nuxt.com/docs/api/configuration/nuxt-config
import * as path from "path";
import zhTW from 'primelocale/zh-tw.json'
const primevueLocale = {
  ...zhTW['zh-TW'],

};
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // css: ['~/assets/tailwind.css'],

  modules: ['@nuxtjs/tailwindcss','@primevue/nuxt-module', '@vueuse/nuxt'],
  css: ['~/assets/css/base.css'],
  primevue: {
    options: { unstyled: true,  locale: primevueLocale} ,
    importPT: { from: path.resolve(__dirname, "./assets/css/presets/aura") },    
  },
  tailwindcss: {
      config: {
          plugins: [require('tailwindcss-primeui')],
          content: ["./assets/css/presets/**/*.{js,vue,ts}"],
          darkMode: "class",
      },
      quiet: true  
  }
})
