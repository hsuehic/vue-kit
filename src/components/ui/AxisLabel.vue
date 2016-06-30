<template>
  <text :x="point.x" :y="point.y">{{stat.label}}</text>
</template>
<style scoped>
  text {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 10px;
    fill: #666;
  }
</style>
<script>
  import valueToPoint from './valueToPoint'

  export default{
    data () {
      return {}
    },
    props: {
      stat: Object,
      index: Number,
      total: Number
    },
    replace: true,
    computed: {
      point: function () {
        return valueToPoint(
          +this.stat.value + 10,
          this.index,
          this.total
        )
      }
    }
  }
</script>
