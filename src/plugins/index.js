/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import VueTheMask from 'vue-the-mask'
import VueSweetalert2 from 'vue-sweetalert2'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueTheMask)
    .use(VueSweetalert2)

}
