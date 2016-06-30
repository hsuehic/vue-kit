import Vue from 'vue'
import VueRouter from 'vue-router'
import './filter/reverse'
import './filter/currency'
import './filter/wrap'
import './directive/demo'
import App from './App'
import Foo from 'components/Foo.vue'

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})

Vue.use(VueRouter)

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
  '/foo': {
    name: 'foo',
    component: Foo,
    subRoutes: {
      '/': {
        // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
        // 为了简便，这里使用了一个组件的定义
        name: 'foo-default',
        component: {
          template: '<p>Default sub view for Foo</p>'
        }
      },
      '/a': {
        name: 'foo-bar',
        component: {
          template: '<p>A</p>'
        }
      },
      '/b': {
        name: 'foo-foo',
        component: Bar
      }

    }
  },
  '/hello': {
    name: 'hello',
    component: function (resolve) {
      require(['./components/Hello.vue'], resolve)
    }
  },
  '/grid': {
    name: 'Grid',
    component: function (resolve) {
      require(['./components/Grid.vue'], resolve)
    }
  },
  '/tree-grid': {
    name: 'Tree Grid',
    component: function (resolve) {
      require(['./components/TreeGrid.vue'], resolve)
    }
  },
  '/tree': {
    name: 'Tree',
    component: function (resolve) {
      require(['./components/Tree.vue'], resolve)
    }
  },
  '/modal': {
    name: 'Modal',
    component: function (resolve) {
      require(['./components/Modal.vue'], resolve)
    }
  },
  '/graph': {
    name: 'SVG Graph',
    component: function (resolve) {
      require(['./components/Graph.vue'], resolve)
    }
  }
})

router.redirect({
  '*': '/foo'
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, 'app')
