<template>
    <div class="container tabbar">
        <div class="navbar">
            <div class="bd">
                <div class="weui-tab">
                    <div class="weui-navbar">
                        <div class="weui-navbar_item weui-bar_item_on">
                            选项一
                        </div>
                        <div class="weui-navbar_item">
                            选项二
                        </div>
                        <div class="weui-navbar_item">
                            选项三
                        </div>
                    </div>
                    <div class="weui-tab_bd">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .tabbar .bg {
        width: 100%;
        height: 100%;
    }
</style>
<script>
    export default {
        data () {
            return {
                msg: 'Navbar'
            }
        },
        components: {}
    }
</script>
