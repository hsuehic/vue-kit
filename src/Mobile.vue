<template>
    <transition name="slide-left">
    <router-view></router-view>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
<style lang="scss">
    @import "scss/mobile";
    body,html
    {
        height: 100%;
    }
    .container {
        height: 100%;
    }
    .hd {
         padding: 2em 0;
     }
    .page-title{
        text-align: center;
        font-size: 34px;
        color: #3cc51f;
        font-weight: 400;
        margin: 0 15%;
    }
    .page-desc {
        text-align: center;
        color: #888;
        font-size: 14px;
    }
</style>