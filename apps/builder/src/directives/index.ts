import type { App } from 'vue'

import clickOutside from './clickOutside'

const directives = {
  clickOutside
}

export default {
  install(app: App<Element>) {
    Object.entries(directives).forEach(([directiveName, directiveFunc]) => {
      app.directive(directiveName, directiveFunc)
    })
  }
}

// @ts-ignore: works on Vue 3, fails in Vue 2
declare module '@vue/runtime-core' {
  /* eslint-disable no-unused-vars */
  interface ComponentCustomProperties {
    vClickOutside: typeof clickOutside
  }
}
