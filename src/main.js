import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Vue Router
import routes from '@/routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
})

// Swal2
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)

// Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import './registerServiceWorker'

library.add(fas, fab, faClock)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Moment
import moment from 'vue-moment'

Vue.use(moment)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
