import 'lib-flexible/flexible.js'
import './assets/scss/reset.scss'
import Vue from 'vue'
import App from './App'
import { firestorePlugin } from 'vuefire'
/* import axios from './assets/js/axios' */

Vue.use(firestorePlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
