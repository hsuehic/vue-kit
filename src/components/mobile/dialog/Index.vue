<template>
    <div class="container"><div class="dialog">
        <div class="hd">
            <h1 class="page-title">Dialog</h1>
        </div>
        <div class="bd spacing">
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="showDialog1">点击弹出Dialog样式一</a>
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="showDialog2">点击弹出Dialog样式二</a>
        </div>
        <!--BEGIN dialog1-->
        <div class="weui-dialog_confirm" id="dialog1" v-if = "isShowDialog1">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog_hd"><strong class="weui-dialog_title">弹窗标题</strong></div>
                <div class="weui-dialog_bd">自定义弹窗内容，居左对齐显示，告知需要确认的信息等</div>
                <div class="weui-dialog_ft">
                    <a href="javascript:;" class="weui-btn_dialog default" @click = "hideDialog1('cancel')">取消</a>
                    <a href="javascript:;" class="weui-btn_dialog primary" @click = "hideDialog1('ok')">确定</a>
                </div>
            </div>
        </div>
        <!--END dialog1-->
        <!--BEGIN dialog2-->
        <div class="weui-dialog_alert" id="dialog2" v-if = "isShowDialog2">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog_hd"><strong class="weui-dialog_title">弹窗标题</strong></div>
                <div class="weui-dialog_bd">弹窗内容，告知当前页面信息等</div>
                <div class="weui-dialog_ft">
                    <a href="javascript:;" class="weui-btn_dialog primary" @click = "hideDialog2">确定</a>
                </div>
            </div>
        </div>
        <!--END dialog2-->
    </div></div>
</template>
<style lang="scss" scoped>
    .bd {
        padding: 1em;
    }
</style>
<script>
    export default {
        data () {
            return {
                isShowDialog1: false,
                isShowDialog2: false
            }
        },
        methods: {
            showDialog1 () {
                this.isShowDialog1 = true
            },
            showDialog2 () {
                this.isShowDialog2 = true
            },
            hideDialog1 () {
                this.isShowDialog1 = false
            },
            hideDialog2 () {
                this.isShowDialog2 = false
            }
        },
        components: {
        }
    }
</script>
