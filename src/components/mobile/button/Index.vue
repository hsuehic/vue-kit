<template>
    <div class="container button">
        <div class="hd">
            <h1 class="page-title">Button</h1>
        </div>
        <div class="bd">
            <a v-link="'index'" class="weui-btn weui-btn_primary">Home</a>
            <a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_primary">页面主操作 Disabled</a>
            <a href="javascript:;" class="weui-btn weui-btn_default">页面次要操作 Normal</a>
            <a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default">页面次要操作 Disabled</a>
            <a href="javascript:;" class="weui-btn weui-btn_warn">警告类操作 Normal</a>
            <a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_warn">警告类操作 Disabled</a>

            <div class="button-sp-area">
                <a href="javascript:;" class="weui-btn weui-btn_plain-default">按钮</a>
                <a href="javascript:;" class="weui-btn weui-btn_plain-default weui-btn_plain-disabled">按钮</a>
                <a href="javascript:;" class="weui-btn weui-btn_plain-primary">按钮</a>
                <a href="javascript:;" class="weui-btn weui-btn_plain-primary weui-btn_plain-disabled">按钮</a>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">按钮</a>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">按钮</a>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">按钮</a>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .page-title {
        color: #225fba;
    }
    .bd {
        padding: 1rem;
    }
    .button-sp-area {
        padding: 1rem;
    }
</style>
<script>
    export default {
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
        }
    }
</script>
