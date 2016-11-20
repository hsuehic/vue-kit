<template>
    <div class="container"><div class="msg">
        <div class="weui-msg">
            <div class="weui-icon_area"><i class="weui-icon_success weui-icon_msg"></i></div>
            <div class="weui-text_area">
                <h2 class="weui-msg_title">操作成功</h2>
                <p class="weui-msg_desc">内容详情，可根据实际需要安排</p>
            </div>
            <div class="weui-opr_area">
                <p class="weui-btn_area">
                    <a href="javascript:;" class="weui-btn weui-btn_primary">确定</a>
                    <a href="javascript:;" class="weui-btn weui-btn_default">取消</a>
                </p>
            </div>
            <div class="weui-extra_area">
                <a href="">查看详情</a>
            </div>
        </div>
    </div></div>
</template>
<style lang="scss" scoped>
    .msg {
        padding: 1em;
    }
</style>
<script>
    export default {
        data () {
            return {
                msg: 'Action'
            }
        },
        components: {
        }
    }
</script>
