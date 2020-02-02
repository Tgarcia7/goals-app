import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faBullseye, 
  faBars, 
  faClipboardList, 
  faClipboardCheck, 
  faChartBar,
  faPlus,
  faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faBullseye) 
library.add(faBars) 
library.add(faClipboardList) 
library.add(faClipboardCheck) 
library.add(faChartBar) 
library.add(faPlus) 
library.add(faChevronLeft) 

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
