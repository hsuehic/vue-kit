<template>
  <ul>
    <li v-for="node in model">
      <div class="item" :class="{bold:node.isFolder}"
           @click="toggle(node)"
           @dblclick="changeType(node)">
        {{node.name}}
        <span v-if="node.isFolder">[{{node.open ? '-' : '+'}}]</span>
      </div>
      <tree v-show="node.open" v-if="node.isFolder" :model="node.children"></tree>
    </li>
  </ul>
</template>
<style scoped>
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
<script>
  export default{
    name: 'tree',
    props: {
      model: {
        coerce: function (val) {
          return val
        }
      }
    },

    created: function () {
      console.log(this.model)
    },
    methods: {
      toggle: function (node) {
        if (node.isFolder) {
          node.open = !node.open
        }
      },
      changeType: function (node) {

      }
    }
  }
</script>
