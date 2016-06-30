<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <axis-label
      v-for="stat in stats"
      :stat="stat"
      :index="$index"
      :total="stats.length">
    </axis-label>
  </g>
</template>
<style>
  polygon {
    fill: #42b983;
    opacity: .75;
  }

  circle {
    fill: transparent;
    stroke: #999;
  }
</style>
<script>
  import valueToPoint from './valueToPoint'
  import AxisLabel from './AxisLabel.vue'

  export default{
    props: ['stats'],
    replace: true,
    computed: {
      // a computed property for the polygon's points
      points: function () {
        var total = this.stats.length
        return this.stats.map(function (stat, i) {
          var point = valueToPoint(stat.value, i, total)
          return point.x + ',' + point.y
        }).join(' ')
      }
    },
    components: {
      AxisLabel
    }
  }
</script>
