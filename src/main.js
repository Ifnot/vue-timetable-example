import Vue from 'vue'
import App from './App.vue'

import moment from 'vue-moment'
import 'moment/locale/fr'
Vue.use(moment)

import timetable from 'vue-timetable'
Vue.use(timetable)

new Vue({
  el: '#app',
  render: h => h(App)
})
