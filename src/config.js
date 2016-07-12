/**
 * Created by Administrator on 2016/7/11.
 */

const makeComponent = (path) => {
    return (resolve) => {
        require([path], resolve)
    }
}

let menu = {
    '/dashboard': {
        icon: 'dashboard',
        name: 'Dashboard',
        label: 'Dashboard',
        component: makeComponent('./components/page/Dashboard.vue')
    },
    '/components': {
        icon: 'laptop',
        label: 'Component',
        isShowSubMenu: true,
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/buttons': {
                name: 'Buttons',
                label: 'Buttons',
                component: makeComponent('./components/page/Buttons.vue')
            },
            '/icons': {
                name: 'Icons',
                label: 'Icons',
                component: makeComponent('./components/page/Icons.vue')
            },
            '/content': {
                name: 'content',
                label: 'Content',
                component: makeComponent('./components/page/Content.vue')
            },
            '/form': {
                name: 'form',
                label: 'Form',
                component: makeComponent('./components/page/Form.vue')
            }
        }
    },
    '/grid': {
        isShowSubMenu: true,
        icon: 'table',
        name: 'grid',
        label: 'Grid',
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/columns': {
                name: 'columns',
                label: 'Columns',
                component: makeComponent('./components/page/Columns.vue')
            },
            '/tile': {
                name: 'tile',
                label: 'Tile',
                component: makeComponent('./components/page/Tile.vue')
            },
            '/table': {
                name: 'table',
                label: 'Table',
                component: makeComponent('./components/page/Table.vue')
            },
            '/flex': {
                name: 'flex',
                label: 'Flex',
                component: makeComponent('./components/page/Flex.vue')
            }
        }
    },
    '/controls': {
        label: 'UI Controls',
        icon: 'briefcase',
        component: {
            template: '<router-view></router-view>'
        }
    },
    '/directives': {
        label: 'UI Directives',
        icon: 'cog',
        component: {
            template: '<router-view></router-view>'
        }
    },
    '/charts': {
        label: 'Charts',
        icon: 'bar-chart',
        name: 'charts',
        isShowSubMenu: true,
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/pie': {
                label: 'Pie',
                name: 'pie',
                component: makeComponent('./components/page/Pie.vue')
            },
            '/bar': {
                label: 'Bar',
                name: 'bar',
                component: makeComponent('./components/page/Bar.vue')
            },
            '/line': {
                label: 'Line',
                name: 'line',
                component: makeComponent('./components/page/Line.vue')
            },
            '/radar': {
                label: 'Radar',
                name: 'radar',
                component: makeComponent('./components/page/Radar.vue')
            },
            '/doughnut': {
                label: 'Doughnut',
                name: 'doughnut',
                component: makeComponent('./components/page/Doughnut.vue')
            }, '/polar': {
                label: 'Polar',
                name: 'polar',
                component: makeComponent('./components/page/Polar.vue')
            }
        }
    }
}
export {menu}
