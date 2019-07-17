import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

import App from './app.vue'
import Inicio from './pages/inicio.vue'
import Catalogo from './pages/catalogo.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
      {
        path: '/',
        component: Inicio
      },
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
