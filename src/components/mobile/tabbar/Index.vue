<template>
  <div class="container">
    <div class="tabbar">
      <div class="weui-tab">
        <div class="weui-tab_bd">

        </div>
        <div class="weui-tabbar">
          <a href="javascript:;" class="weui-tabbar_item weui-bar_item_on">
            <div class="weui-tabbar_icon">
              <img src="../../../assets/img/icon_nav_button.png" alt="">
            </div>
            <p class="weui-tabbar_label">微信</p>
          </a>
          <a href="javascript:;" class="weui-tabbar_item">
            <div class="weui-tabbar_icon">
              <img src="../../../assets/img/icon_nav_msg.png" alt="">
            </div>
            <p class="weui-tabbar_label">通讯录</p>
          </a>
          <a href="javascript:;" class="weui-tabbar_item">
            <div class="weui-tabbar_icon">
              <img src="../../../assets/img/icon_nav_article.png" alt="">
            </div>
            <p class="weui-tabbar_label">发现</p>
          </a>
          <a href="javascript:;" class="weui-tabbar_item">
            <div class="weui-tabbar_icon">
              <img src="../../../assets/img/icon_nav_cell.png" alt="">
            </div>
            <p class="weui-tabbar_label">我</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .tabbar {
    height: 100%;
  }
</style>
<script>
  export default {
    data () {
      return {
        msg: 'Tabbar'
      }
    },
    components: {}
  }
</script>
