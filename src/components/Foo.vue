<template>
  <div class="foo">
    <h2>This is Foo!</h2>
    <a v-link="{ path: '/foo/a' }">Go to A</a><br />
    <a v-link="{ path: '/foo/b' }">Go to B</a>
    <router-view></router-view>
  </div>
</template>
<style scoped>
  body {
    background-color: #ff0000;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
