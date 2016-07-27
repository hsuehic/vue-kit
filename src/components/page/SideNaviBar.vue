<template>
    <div :class="['side-bar']">
        <div class="header-logo">
            <i class="fa fa-diamond"></i>
        </div>
        <navi :model="menu" class="menu"></navi>
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
        position: relative;
        height: 58px;
        width: 100%;
        text-align: center;
        line-height: 58px;
        overflow: hidden;
        background-color: $bg_side_bar_light;
        .fa-diamond{
            position: relative;
            animation: rotate-y 4s ease infinite;
            font-size: 32px;
            color: #42b983;
            vertical-align: middle;
        }
    }

    .side-bar {
        position: fixed;
        transition: all;
        transition-duration: 300ms;
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
                .label {
                    margin: 0;
                    color: inherit;
                    font-weight: normal;
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

    @media (max-width: $l_sidebar_breakpoint) {
        .side-bar {
            display: none;
            transition: all 0.5s;
        }

    }

    @media screen and (min-width: $l_sidebar_breakpoint) {
        .side-bar {
            width: $l_sidebar_width_normal;
        }
        .collapsed .side-bar {
            width: $l_sidebar_width_collapse;
        }
        .collapsed .side-bar .sub-menu{
            display: none;
        }
        .collapse-nav .fa-angle-left {
            transition: all;
            transition-duration: .3s;
            vertical-align: middle;
        }
        .collapsed .collapse-nav .fa-angle-left{
            transform: rotate(180deg);
        }
   }
</style>
<script>
    import {menu} from '../../config'
    import Navi from '../ui/Navi.vue'
    export default{
        props: {
            collapsed: {
                required: true,
                type: Boolean
            }
        },
        data () {
            return {
                menu: menu
            }
        },
        methods: {
            toggleCollapse () {
                this.collapsed = !this.collapsed
            }
        },
        components: {
            'navi': Navi
        }
    }
</script>
