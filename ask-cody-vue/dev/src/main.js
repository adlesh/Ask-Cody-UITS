import Vue from 'vue'
import App from './App.vue'
import Chat from 'plugin'
import vmodal from 'vue-js-modal'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(vmodal , { dialog: true })
Vue.use(Chat, {})

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
