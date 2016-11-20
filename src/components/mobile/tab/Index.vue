<template>
  <div class="container">
    <div class="tab">
      <div class="bd">
        <div class="weui-cells_title">Tab</div>
        <div class="weui-cells weui-cells_access">
          <a class="weui-cell" v-link="'navbar'">
            <div class="weui-cell_bd weui-cell_primary">
              <p>navbar</p>
            </div>
            <div class="weui-cell_ft">
            </div>
          </a>
          <a class="weui-cell" v-link = "'tabbar'">
            <div class="weui-cell_bd weui-cell_primary">
              <p>tabbar</p>
            </div>
            <div class="weui-cell_ft">
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data () {
      return {
        msg: 'Action'
      }
    },
    components: {}
  }
</script>
