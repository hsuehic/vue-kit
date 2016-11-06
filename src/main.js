import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './Desktop'
import {menu} from './config'

Vue.use(VueRouter)

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
    hashbang: false,
    history: true,
    saveScrollPosition: false,
    transitionOnLoad: true,
    linkActiveClass: 'active'
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map(menu)

router.redirect({
    '*': '/dashboard'
})
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector app.
router.start(App, 'app')
