import Vue from 'vue'
import VueRouter from 'vue-router'

import makeComponent from './component-loader'
import App from './Mobile'

Vue.use(VueRouter)

let router = new VueRouter()

let comps = ['button', 'cell', 'toast', 'dialog', 'progress', 'message', 'article', 'action-sheet',
  'icons', 'panel', 'tab', 'search-bar', 'tabbar', 'navbar']
let routeConfig = {
  '/index': {
    component: makeComponent('./components/mobile/Index.vue')
  }
}
comps.map((item) => {
  routeConfig[`/${item}`] = {
    component: makeComponent(`./components/mobile/${item}/Index.vue`)
  }
  return item
})

router.map(routeConfig)

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

