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
    hashbang: true,
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    history: true
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/dashboard': {
        name: 'Dashboard',
        component: makeComponent('./components/page/Dashboard.vue')
    },
    '/components': {
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/': {
                name: 'Buttons',
                component: makeComponent('./components/page/Buttons.vue')
            },
            '/buttons': {
                name: 'Buttons',
                component: makeComponent('./components/page/Buttons.vue')
            },
            '/icons': {
                name: 'Icons',
                component: makeComponent('./components/page/Icons.vue')
            }
        }
    },
    '/grid/columns': {
        name: 'Columns',
        component: makeComponent('./components/page/Columns.vue')
    },
    '/grid/tile': {
        name: 'Tile',
        component: makeComponent('./components/page/Tile.vue')
    },
    '/grid/table': {
        name: 'Table',
        component: makeComponent('./components/page/Table.vue')
    }
})

router.redirect({
    '*': '/dashboard'
})
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, 'app')
