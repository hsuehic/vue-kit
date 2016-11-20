<template>
  <div class="container">
    <div class="progress">
      <div class="hd">
        <h1 class="page-title">Progress</h1>
      </div>
      <div class="bd spacing">
        <div class="weui-progress">
          <div class="weui-progress_bar">
            <div class="weui-progress_inner-bar js_progress" v-bind:style="{'width': width1 + '%'}"></div>
          </div>
          <a href="javascript:;" class="weui-progress_opr">
            <i class="weui-icon_cancel"></i>
          </a>
        </div>
        <br>
        <div class="weui-progress">
          <div class="weui-progress_bar">
            <div class="weui-progress_inner-bar js_progress" v-bind:style="{'width': width2 + '%'}"></div>
          </div>
          <a href="javascript:;" class="weui-progress_opr">
            <i class="weui-icon_cancel"></i>
          </a>
        </div>
        <br>
        <div class="weui-progress">
          <div class="weui-progress_bar">
            <div class="weui-progress_inner-bar js_progress" v-bind:style="{'width': width3 + '%'}"></div>
          </div>
          <a href="javascript:;" class="weui-progress_opr">
            <i class="weui-icon_cancel"></i>
          </a>
        </div>
        <div class="weui-btn_area">
          <a href="javascript:;" v-bind:class="['weui-btn', 'weui-btn_primary', {'weui-btn_disabled': disabled}]"
             @click="showProgress">上传</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .bd {
    padding: 1em;
  }

  .weui-btn_area {
    padding: 1em;
  }
</style>
<script>
  export default {
    data () {
      return {
        width1: 5,
        width2: 10,
        width3: 15,
        disabled: false
      }
    },
    methods: {
      showProgress () {
        let self = this
        self.disabled = true
        setInterval(() => {
          self.width1++
          if (self.width1 > 100) {
            self.width1 = 0
          }
        }, 10)

        setInterval(() => {
          self.width2++
          if (self.width2 > 100) {
            self.width2 = 0
          }
        }, 20)

        setInterval(() => {
          self.width3++
          if (self.width3 > 100) {
            self.width3 = 0
          }
        }, 40)
      }
    },
    components: {}
  }
</script>
