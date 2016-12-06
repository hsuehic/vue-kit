import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './Mobile.vue'

import makeComponent from './component-loader'

Vue.use(VueRouter)

let comps = ['button', 'cell', 'toast', 'dialog', 'progress', 'message', 'article', 'action-sheet',
  'icons', 'panel', 'tab', 'search-bar', 'tabbar', 'navbar']
let routes = [{
  path: '/',
  name: 'index',
  component: makeComponent('./components/mobile/Index.vue')
}]
comps.map((item) => {
  routes.push({
    path: `/${item}`,
    name: item,
    component: makeComponent(`./components/mobile/${item}/Index.vue`)
  })
  return item
})

routes.push({
  path: '*',
  redirect: '/'
})

let routerConfig = {
  routes: routes
}

const router = new VueRouter(routerConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<app></app>',
  components: {
    app: App
  }
})

