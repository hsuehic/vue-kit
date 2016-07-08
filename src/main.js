import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueRouter)

const makeComponent = (path) => {
    return (resolve) => {
        require([path], resolve)
    }
}

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'is-active',
    history: true
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/dashboard': {
        Name: 'Dashboard',
        component: makeComponent('./components/page/Dashboard.vue')
    }
})

router.redirect({
    '*': '/dashboard'
})
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, 'app')
