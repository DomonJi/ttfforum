import Vue from 'vue'
import App from './App'
import 'normalize.css'
import Router from 'vue-router'
/* eslint-disable no-new */
import Home from './components/Home.vue'
import Guests from './components/Guests.vue'
import Introduction from './components/Introduction.vue'
import Workshop from './components/Workshop'
import Affairs from './components/Affairs.vue'
import Schedule from './components/Schedule'
import Canteen from './components/Canteen'
import Add from './components/Address'
import Registration from './components/Registration'
import Contact from './components/Contact'
import Sharing from './components/Sharing'
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
  }, {
    path: '/affairs',
    component: Affairs
  }, {
    path: '/schedule',
    component: Schedule
  }, {
    path: '/canteen',
    component: Canteen
  }, {
    path: '/address',
    component: Add
  }, {
    path: '/registration',
    component: Registration
  }, {
    path: '/contact',
    component: Contact
  },
  {
    path: '/sharing',
    component: Sharing
  }
]

const router = new Router({routes})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
