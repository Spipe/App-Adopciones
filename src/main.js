import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './app.vue'
import Inicio from './pages/inicio.vue'
import Catalogo from './pages/catalogo.vue'
import Perfil from './pages/perfil.vue'
import Mascota from './pages/mascota.vue'
import Formulario from './pages/formulario.vue'
import IniciarSesion from './pages/iniciar.vue'
import Seguimiento from './pages/seguimiento.vue'
import Registrar from './pages/registrar.vue'

import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAAbOLuwvHWazng4pd4SGB_sQADCHvEfIw',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#f57c00',
    secondary: '#b0bec5',
    accent: '#e65100',
    error: '#b71c1c'
  }
})

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
      {
        path: '/mascota/:id',
        component: Mascota
      },
      {
        path: '/entrar',
        component: IniciarSesion
      },
      {
        path: '/registrar',
        component: Registrar
      },
      {
        path: '/perfil/:id',
        component: Perfil
      },
      {
        path: '/formulario',
        component: Formulario
      },
      {
        path: '/seguimiento',
        component: Seguimiento
      }
    ],
    mode:'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
