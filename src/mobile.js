import Vue from 'vue'
import VueRouter from 'vue-router'

import makeComponent from './component-loader'
import App from './Mobile'

Vue.use(VueRouter)

let router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: false,
  transitionOnLoad: true,
  linkActiveClass: 'active'
})

router.map({
  '/index': {

  },
  '/button': {

  },
  '/grid': {

  },
  '/modal': {

  },
  '/action': {

  },
  '/tips': {

  }
})

router.redirect({
  '*': '/index'
})

router.start(App, 'app')

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
//
// let app = new Vue({
//   el: '#app',
//   components: {
//     'app': Mobile
//   }
// })

