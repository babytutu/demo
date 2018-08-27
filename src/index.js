import Vue from 'vue'
import axios from 'axios'
import App from './app.vue'
import router from './router'
import store from './store'
import './config'

Vue.prototype.http = axios

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})
