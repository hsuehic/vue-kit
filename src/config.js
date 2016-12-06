/**
 * Created by Administrator on 2016/7/11.
 */

import makeComponent from './component-loader'

let menu = [
    {
        path: '/dashboard',
        icon: 'dashboard',
        name: 'Dashboard',
        label: 'Dashboard',
        component: makeComponent('./components/page/Dashboard.vue')
    },
    {
        path: '/components',
        icon: 'laptop',
        label: 'Component',
        isShowSubMenu: false,
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '/buttons',
                name: 'Buttons',
                label: 'Buttons',
                component: makeComponent('./components/page/components/Buttons.vue')
            },
            {
                path: '/icons',
                name: 'Icons',
                label: 'Icons',
                component: makeComponent('./components/page/components/Icons.vue')
            },
            {
                path: '/content',
                name: 'content',
                label: 'Content',
                component: makeComponent('./components/page/components/Content.vue')
            },
            {
                path: '/form',
                name: 'form',
                label: 'Form',
                component: makeComponent('./components/page/components/Form.vue')
            },
            {
                path: '/file-input',
                name: 'file-input',
                label: 'File input',
                component: makeComponent('./components/page/components/FileInput.vue')
            },
            {
                path: '/tab',
                name: 'tab',
                label: 'Tab',
                component: makeComponent('./components/page/components/Tabs.vue')
            },
            {
                path: '/modal',
                name: 'modal',
                label: 'Modal',
                component: makeComponent('./components/page/components/Modals.vue')
            }
        ]
    },
    {
        path: '/grid',
        isShowSubMenu: false,
        icon: 'table',
        name: 'grid',
        label: 'Grid',
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '/columns',
                name: 'columns',
                label: 'Columns',
                component: makeComponent('./components/page/grids/Columns.vue')
            },
            {
                path: '/tile',
                name: 'tile',
                label: 'Tile',
                component: makeComponent('./components/page/grids/Tile.vue')
            },
            {
                path: '/table',
                name: 'table',
                label: 'Table',
                component: makeComponent('./components/page/grids/Table.vue')
            },
            {
                path: '/flex',
                name: 'flex',
                label: 'Flex',
                component: makeComponent('./components/page/grids/Flex.vue')
            }
        ]
    },
    {
        path: '/filters',
        isShowSubMenu: false,
        label: 'Filter',
        icon: 'briefcase',
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '/filter-by',
                label: 'Filter By',
                name: 'filter-by',
                component: makeComponent('./components/page/filters/FilterBy.vue')
            },
            {
                path: '/order-by',
                label: 'Order By',
                name: 'order-by',
                component: makeComponent('./components/page/filters/OrderBy.vue')
            }
        ]
    },
    {
        path: '/animation',
        label: 'Animation',
        isShowSubMenu: false,
        icon: 'cog',
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '/keyframes',
                name: 'keyframes',
                label: 'Keyframes',
                component: makeComponent('./components/page/animation/Keyframes.vue')
            },
            {
                path: '/transition',
                name: 'transition',
                label: 'Transition',
                component: makeComponent('./components/page/animation/Transition.vue')
            }
        ]
    },
    {
        path: '/charts',
        label: 'Charts',
        icon: 'bar-chart',
        name: 'charts',
        isShowSubMenu: false,
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '/pie',
                label: 'Pie',
                name: 'pie',
                component: makeComponent('./components/page/charts/Pie.vue')
            },
            {
                path: '/bar',
                label: 'Bar',
                name: 'bar',
                component: makeComponent('./components/page/charts/Bar.vue')
            },
            {
                path: '/line',
                label: 'Line',
                name: 'line',
                component: makeComponent('./components/page/charts/Line.vue')
            },
            {
                path: '/radar',
                label: 'Radar',
                name: 'radar',
                component: makeComponent('./components/page/charts/Radar.vue')
            },
            {
                path: '/doughnut',
                label: 'Doughnut',
                name: 'doughnut',
                component: makeComponent('./components/page/charts/Doughnut.vue')
            },
            {
                path: '/polar',
                label: 'Polar Area',
                name: 'polar',
                component: makeComponent('./components/page/charts/PolarArea.vue')
            }
        ]
    },
    {
        path: '/tools',
        name: 'tools',
        label: 'Tools',
        icon: 'cog',
        isShowSubMenu: false,
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '/image',
                name: 'image',
                label: 'Image Extract',
                component: makeComponent('./components/page/tools/ImageExtract.vue')
            }
        ]
    }
]
export {menu}
