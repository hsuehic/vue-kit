<template>
  <div class="container">
    <div class="icons">
      <div class="hd">
        <h1 class="page-title">Icons</h1>
      </div>
      <div class="bd spacing">
        <i class="weui-icon_msg weui-icon_success"></i>
        <i class="weui-icon_msg weui-icon_info"></i>
        <i class="weui-icon_msg weui-icon_warn"></i>
        <i class="weui-icon_msg weui-icon_waiting"></i>
        <i class="weui-icon_safe weui-icon_safe_success"></i>
        <i class="weui-icon_safe weui-icon_safe_warn"></i>
        <div class="icon_sp_area">
          <i class="weui-icon_success"></i>
          <i class="weui-icon_success_circle"></i>
          <i class="weui-icon_success_no_circle"></i>
          <i class="weui-icon_info"></i>
          <i class="weui-icon_waiting"></i>
          <i class="weui-icon_waiting_circle"></i>
          <i class="weui-icon_circle"></i>
          <i class="weui-icon_warn"></i>
          <i class="weui-icon_download"></i>
          <i class="weui-icon_info_circle"></i>
          <i class="weui-icon_cancel"></i>
          <i class="weui-icon_search"></i>
          <i class="weui-icon_clear"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .bd {
    padding: 1em;
    text-align: center;
  }

  .icons i {
    margin: 0 5px 10px;
  }

  .icons .icon_sp_area {
    padding: 10px 20px;
    text-align: left;
  }
</style>
<script>
  export default {
    data () {
      return {
        msg: 'Icons In development, coming soon..'
      }
    },
    components: {}
  }
</script>
