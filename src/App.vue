<template>
    <div id="app" :class = "{'collapsed':collapsed}">
        <side-bar></side-bar>
        <section class="app-main">
            <div class="app-main-header">
                <header-bar></header-bar>
            </div>
            <div class="app-main-body">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
    import SideBar from 'components/page/Sidebar.vue'
    import HeaderBar from 'components/page/Header.vue'

    export default {
        data () {
            return {
                collapsed: false
            }
        },
        ready () {
        },
        components: {
            SideBar,
            HeaderBar
        }
    }
</script>
<style lang="scss">
    @import "scss/variable";
    @import "scss/app";

    .app-main {
        position: relative;
        display: block;
        height: 100vh;
        transition: all .3s;
    }

    .app-main-header{
        position:relative;
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
    }

    .app-main-body>*{
        margin:0;
        position:relative;
        width:100%;
        height: 100%;
        background: #fff;
    }

    @media screen and (max-width: $l_sidebar_breakpoint) {
        .app-main {
            margin-left: 60px;
        }
    }

    @media screen and(min-width: $l_sidebar_breakpoint) {
        .app-main {
            margin-left: 230px;
        }
        .collapse .app-main {
            margin-left: 60px;
        }
    }
</style>
