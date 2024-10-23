// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt', '@element-plus/nuxt','@vesp/nuxt-fontawesome'
  ],
  css: [
    '~/assets/styles.css', // 引入全局样式
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  elementPlus: { 
    icon: 'ElIcon',
  },
  fontawesome: {
    // icons: {
    //   solid: ['coffee', 'child',  ],
    //   regular: ['comment',  ],
    //   brands: ['twitter',  ],
    // },
  },
})