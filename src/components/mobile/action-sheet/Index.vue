<template>
  <div class="container">
    <div class="actionsheet">
      <div class="hd">
        <h1 class="page-title">ActionSheet</h1>
      </div>
      <div class="bd spacing">
        <a href="javascript:;" class="weui-btn weui-btn_primary" @click="showActionSheet">点击上拉ActionSheet</a>
      </div>
      <!--BEGIN actionSheet-->
      <div id="actionSheet_wrap">
        <div class="weui-mask_transition" v-show="isShowActionSheet"></div>
        <div v-bind:class="['weui-actionsheet',{'weui-actionsheet_toggle': isShowActionSheet}]">
          <div class="weui-actionsheet_menu">
            <div class="weui-actionsheet_cell">示例菜单</div>
            <div class="weui-actionsheet_cell">示例菜单</div>
            <div class="weui-actionsheet_cell">示例菜单</div>
            <div class="weui-actionsheet_cell">示例菜单</div>
          </div>
          <div class="weui-actionsheet_action">
            <div class="weui-actionsheet_cell" @click="hideActionSheet">取消</div>
          </div>
        </div>
      </div>
      <!--END actionSheet-->
    </div>
  </div>
</template>
<style lang="scss">
  .actionsheet .bd {
    padding: 1em;
  }
</style>
<script>
  export default {
    data () {
      return {
        isShowActionSheet: false
      }
    },
    methods: {
      showActionSheet () {
        this.isShowActionSheet = true
      },
      hideActionSheet () {
        this.isShowActionSheet = false
      }
    },
    components: {}
  }
</script>
