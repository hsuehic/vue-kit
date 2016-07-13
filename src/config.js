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
        isShowSubMenu: false,
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/buttons': {
                name: 'Buttons',
                label: 'Buttons',
                component: makeComponent('./components/page/components/Buttons.vue')
            },
            '/icons': {
                name: 'Icons',
                label: 'Icons',
                component: makeComponent('./components/page/components/Icons.vue')
            },
            '/content': {
                name: 'content',
                label: 'Content',
                component: makeComponent('./components/page/components/Content.vue')
            },
            '/form': {
                name: 'form',
                label: 'Form',
                component: makeComponent('./components/page/components/Form.vue')
            },
            '/file-input': {
                name: 'file-input',
                label: 'File input',
                component: makeComponent('./components/page/components/FileInput.vue')
            }
        }
    },
    '/grid': {
        isShowSubMenu: false,
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
                component: makeComponent('./components/page/grids/Columns.vue')
            },
            '/tile': {
                name: 'tile',
                label: 'Tile',
                component: makeComponent('./components/page/grids/Tile.vue')
            },
            '/table': {
                name: 'table',
                label: 'Table',
                component: makeComponent('./components/page/grids/Table.vue')
            },
            '/flex': {
                name: 'flex',
                label: 'Flex',
                component: makeComponent('./components/page/grids/Flex.vue')
            }
        }
    },
    '/filters': {
        isShowSubMenu: false,
        label: 'Filter',
        icon: 'briefcase',
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/filter-by': {
                label: 'Filter By',
                name: 'filter-by',
                component: makeComponent('./components/page/filters/FilterBy.vue')
            },
            '/order-by': {
                label: 'Order By',
                name: 'order-by',
                component: makeComponent('./components/page/filters/OrderBy.vue')
            }
        }
    },
    '/animation': {
        label: 'Animation',
        isShowSubMenu: false,
        icon: 'cog',
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/keyframes': {
                name: 'keyframes',
                label: 'Keyframes',
                component: makeComponent('./components/page/animation/Keyframes.vue')
            },
            '/transition': {
                name: 'transition',
                label: 'Transition',
                component: makeComponent('./components/page/animation/Transition.vue')
            }
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
                component: makeComponent('./components/page/charts/Pie.vue')
            },
            '/bar': {
                label: 'Bar',
                name: 'bar',
                component: makeComponent('./components/page/charts/Bar.vue')
            },
            '/line': {
                label: 'Line',
                name: 'line',
                component: makeComponent('./components/page/charts/Line.vue')
            },
            '/radar': {
                label: 'Radar',
                name: 'radar',
                component: makeComponent('./components/page/charts/Radar.vue')
            },
            '/doughnut': {
                label: 'Doughnut',
                name: 'doughnut',
                component: makeComponent('./components/page/charts/Doughnut.vue')
            }, '/polar': {
                label: 'Polar Area',
                name: 'polar',
                component: makeComponent('./components/page/charts/PolarArea.vue')
            }
        }
    }
}
export {menu}
