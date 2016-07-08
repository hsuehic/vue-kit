<template>
    <div :class="['side-bar']">
        <div class="header-logo">
            <i class="fa fa-diamond"></i>
        </div>
        <menu :model="menu" class="menu"></menu>
        <div class="user-info-link">
            <a href="#"></a>
        </div>
        <div class="collapse-nav" @click="toggleCollapse()">
            <i class="fa fa-angle-left"></i>
        </div>
    </div>
</template>
<style lang="scss">
    @import "./../../scss/_variable.scss";

    .header-logo {
        height: 58px;
        width: 100%;
        text-align: center;
        line-height: 58px;
        overflow: hidden;
        background-color: $bg_side_bar_light;
        .fa {
            font-size: 32px;
            color: #42b983;
            vertical-align: middle;
        }
    }

    .side-bar {
        position: relative;
        transition: all;
        transition-duration: 300ms;
        position: fixed;
        height: 100%;
        background: $bg_side_bar;
        color: $color_side_bar;
        z-index: 200;
        .menu {
            position: absolute;
            top: 0;
            margin-top: 72px;
            width: 100%;
            li a {
                display: block;
                width: 100%;
                height: 38px;
                padding: 7px 15px;
                line-height: 24px;
                overflow: hidden;
                .icon {
                    margin: 0 20px 0 5px;
                    width: 20px;
                }
                .icon, .label, .collapse {
                    vertical-align: middle;
                    display: inline-block;
                    line-height: 24px;
                    text-align: center;
                }
                .collapse {
                    width:24px;
                    transition: all .5s ease;
                }
                .collapse.expanded {
                    transform: rotate(-90deg);
                }
            }
            li a.active, li a:hover {
                color: $color_side_bar_light;
                background: $bg_side_bar_hover;
            }
        }
        .user-info-link {
            position: absolute;
            left: 0;
            bottom: 40px;
            width: 100%;
            height: 54px;
            line-height: 54px;
        }
        .collapse-nav {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: $bg_side_bar_light;
            color: $color_side_bar_light;
            text-align: center;
            cursor: pointer;
        }
        .sub-menu {
            padding-left: 45px;
        }
    }

    @media screen and (max-width: $l_sidebar_breakpoint) {
        .side-bar {
            width: $l_sidebar_width_collapse;
        }
        .sub-menu {
            display: none;
        }
        .collapse-nav {
            display:none;
        }
    }

    @media screen and (min-width: $l_sidebar_breakpoint) {
        .side-bar {
            width: $l_sidebar_width_normal;
        }
        .side-bar.collapsed {
            width: $l_sidebar_width_collapse;
        }
        .side-bar.collapsed .sub-menu{
            display: none;
        }
        .collapse-nav .fa-angle-left {
            transition: all;
            transition-duration: .3s;
        }
        .collapsed .collapse-nav .fa-angle-left{
            transform: rotate(180deg);
        }
    }
</style>
<script>
    import Menu from '../ui/Menu.vue'
    export default{
        data () {
            var menu = {
                isOpen: true,
                menuItems: [{
                    label: 'Dashboard',
                    link: '/dashboard',
                    icon: 'dashboard',
                    isActive: true
                }, {
                    label: 'UI Components',
                    icon: 'laptop',
                    subMenu: {
                        isOpen: true,
                        menuItems: [{
                            label: 'Buttons',
                            link: '/components/buttons'
                        }, {
                            label: 'Icons',
                            link: '/components/icons'
                        }, {
                            label: 'Tabs',
                            link: '/components/tabs'
                        }, {
                            label: 'Modals',
                            link: '/components/modals'
                        }, {
                            label: 'Tooltips',
                            link: '/component/tooltips'
                        }]
                    }
                }, {
                    label: 'UI Controls',
                    icon: 'briefcase'
                }, {
                    label: 'UI Directives',
                    icon: 'cog'
                }, {
                    label: 'Charts',
                    icon: 'bar-chart',
                    subMenu: {
                        isOpen: true,
                        menuItems: [{
                            label: 'Pie',
                            link: '/charts/pie'
                        }, {
                            label: 'Bar',
                            link: '/charts/bar'
                        }, {
                            label: 'Line',
                            link: '/charts/line'
                        }, {
                            label: 'Radar',
                            link: '/charts/radar'
                        }, {
                            label: 'Doughnut',
                            link: '/charts/doughnut'
                        }, {
                            label: 'Polar',
                            link: '/charts/polar'
                        }]
                    }
                }]
            }
            return {
                menu: menu
            }
        },
        methods: {
            toggleCollapse () {
                // this.$set('collapsed', !this.collapsed)
                this.collapsed = !this.collapsed
            }
        },
        components: {
            'menu': Menu
        }
    }
</script>
