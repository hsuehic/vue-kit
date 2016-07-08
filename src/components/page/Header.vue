<template>
    <div class="header-bar">
        {{$route.path}}
    </div>
</template>
<style lang = "scss">
    .header-bar {
        background: #fff;
        height: 58px;
        line-height: 58px;
        font-size: 18px;
        padding: 0 0 0 15px;
        text-align: left;
    }
</style>
<script>
    export default{
        data () {
            return {
            }
        }
    }
</script>
