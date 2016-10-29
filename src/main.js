import Vue from 'vue'
import App from './App'
import 'normalize.css'
import Router from 'vue-router'
/* eslint-disable no-new */
import Home from './components/Home.vue'
import Guests from './components/Guests.vue'
import Introduction from './components/Introduction.vue'
import Workshop from './components/Workshop'

Vue.use(Router)
const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/guests',
    component: Guests
  }, {
    path: '/introduction',
    component: Introduction
  }, {
    path: '/workshop',
    component: Workshop
  }
]
const router = new Router(routes)
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
