import '@components/_globals'
import Vue from 'vue'
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
import router from '@router'
import store from '@state/store'
import App from './app.vue'

// Vue.use(VueSidebarMenu)
// import 'expose-loader?$!expose-loader?jQuery!jquery'
// Globally register all `_base`-prefixed components

// Vue.use(VueMaterial)

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
