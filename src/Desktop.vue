<template>
    <div id="app" :class="{'collapsed':collapsed}">
        <side-navi :collapsed.sync="collapsed"></side-navi>
        <section class="app-main">
            <div class="app-main-header">
                <header-bar></header-bar>
            </div>
            <div class="app-main-body">
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import SideNaviBar from 'components/page/SideNaviBar.vue'
    import HeaderBar from 'components/page/Header.vue'

    export default {
        data () {
            return {
                collapsed: false
            }
        },
        ready () {
        },
        watch: {
            '$route.name': {
                handler: function (val, oldVal) {
                    console.log('older: %s,new: %s', val, oldVal)
                }
            }
        },
        components: {
            HeaderBar,
            'side-navi': SideNaviBar
        }
    }
</script>
<style lang="scss">
    @import "scss/app";

    .app-main {
        position: relative;
        display: block;
        height: 100vh;
        transition: all .3s;
    }

    .app-main-header {
        position: relative;
        z-index: 100;
    }

    .app-main-body {
        position: relative;
        margin-top: -58px;
        width: 100%;
        height: 100%;
        padding: 73px 15px 15px 15px;
        background: $bg_app_main;
        z-index: 99;
        overflow-y: auto;
    }

    .app-main-body > * {
        margin: 0 auto;
        position: relative;
        width: 100%;
        min-height: 100%;
        background: #fff;
        padding: 10px;
    }

    @media (max-width: $l_sidebar_breakpoint) {
        .app-main {
            margin-left: 0;
        }
    }

    @media (min-width: $l_sidebar_breakpoint) {
        .app-main {
            margin-left: 230px;
        }
        .collapsed .app-main {
            margin-left: 60px;
        }
    }
</style>
