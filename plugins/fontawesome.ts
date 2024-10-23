// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas,far,fab)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

// Modify the `nuxt.config.ts` file by adding to the `export default defineNuxtConfig()`
// export default defineNuxtConfig({

// })

// 本功能的实现，参考2个文档，只靠第2个实现不了导入。而只靠第一个只能单个导入，没办法导入集合。
// https://nuxt.com/modules/nuxt-fontawesome
// https://docs.fontawesome.com/web/use-with/vue/use-with