import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import App from './app.vue'
import Catalogo from './pages/catalogo.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
      {
        path: '/catalogo',
        component: Catalogo,
      },
    ],
    mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
