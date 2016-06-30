<template>
  <div>
    <tree :model="treeData"></tree>
  </div>
</template>
<style>
</style>
<script>
  import Tree from './ui/Tree.vue'

  var data = [{
    name: 'My Tree',
    isFolder: true,
    open: false,
    children: [
      {
        name: 'hello',
        isFolder: false,
        open: false
      },
      {
        isFolder: false,
        open: false,
        name: 'wat'
      },
      {
        isFolder: true,
        open: false,
        name: 'child folder',
        children: [
          {
            isFolder: true,
            open: false,
            name: 'child folder',
            children: [
              {name: 'hello'},
              {name: 'wat'}
            ]
          },
          {
            isFolder: false,
            open: false,
            name: 'hello'
          },
          {
            isFolder: false,
            open: false,
            name: 'wat'
          },
          {
            isFolder: true,
            open: false,
            name: 'child folder',
            children: [
              {name: 'hello'},
              {name: 'wat'}
            ]
          }
        ]
      }
    ]
  }, {
    name: 'My Tree2',
    isFolder: false,
    open: false
  }, {
    name: 'My Tree3',
    isFolder: false,
    open: false
  }]

  export default{
    data: function () {
      return {
        treeData: data
      }
    },
    components: {
      Tree
    }
  }
</script>
