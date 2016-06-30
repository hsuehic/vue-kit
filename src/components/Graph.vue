<template>
  <div>
    <svg width="200" height="200">
      <polygraph :stats="stats"></polygraph>
    </svg>
    <!-- controls -->
    <div v-for="stat in stats">
      <label>{{stat.label}}</label>
      <input type="range" v-model="stat.value" min="0" max="100">
      <span>{{stat.value}}</span>
      <button @click="remove(stat)">X</button>
    </div>
    <form id="add">
      <input name="newlabel" v-model="newLabel">
      <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{stats | json}}</pre>
  </div>
</template>
<style>
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
  }
  label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
  }

  #raw {
    position: relative;
    top: 0;
    left: 0;
  }
</style>
<script>
  import Polygraph from './ui/SVGGraph.vue'

  var stats = [
    {label: 'A', value: 100},
    {label: 'B', value: 100},
    {label: 'C', value: 100},
    {label: 'D', value: 100},
    {label: 'E', value: 100},
    {label: 'F', value: 100}
  ]

  export default{
    data () {
      return {
        newLabel: '',
        stats: stats
      }
    },
    components: {
      Polygraph
    },
    methods: {
      add: function (e) {
        e.preventDefault()
        if (!this.newLabel) return
        this.stats.push({
          label: this.newLabel,
          value: 100
        })
        this.newLabel = ''
      },
      remove: function (stat) {
        if (this.stats.length > 3) {
          this.stats.$remove(stat)
        } else {
          window.alert('Can\'t delete more!')
        }
      }
    }
  }
</script>
