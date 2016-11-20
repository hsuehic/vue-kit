<template>
    <div class="container" id="container"><div class="toast">
        <div class="hd">
            <h1 class="page-title">Toast</h1>
        </div>
        <div class="bd spacing">
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="showToast">点击弹出Toast</a>
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click = "showLoading">点击弹出Loading Toast</a>
        </div>
        <!--BEGIN toast-->
        <div id="toast" v-show = "isShowToast">
            <div class="weui_mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon_toast weui-icon_success_no_circle"></i>
                <p class="weui-toast_content">已完成</p>
            </div>
        </div>
        <!--end toast-->

        <!-- loading toast -->
        <div id="loadingToast" class="weui-loading_toast" v-show ="isShowLoading">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <div class="weui-loading">
                    <div class="weui_loading_leaf weui_loading_leaf_0"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_1"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_2"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_3"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_4"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_5"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_6"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_7"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_8"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_9"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_10"></div>
                    <div class="weui_loading_leaf weui_loading_leaf_11"></div>
                </div>
                <p class="weui_toast_content">数据加载中</p>
            </div>
        </div>
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
                msg: 'hello vue',
                isShowLoading: false,
                isShowToast: false
            }
        },
        ready () {

        },
        methods: {
            showToast () {
                let self = this
                this.isShowToast = true
                setTimeout(() => {
                    self.isShowToast = false
                }, 3000)
            },
            showLoading () {
                let self = this
                this.isShowLoading = true
                setTimeout(() => {
                    self.isShowLoading = false
                }, 3000)
            }
        },
        components: {
        }
    }
</script>
