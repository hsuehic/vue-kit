<template>
  <tree-grid :items="data"></tree-grid>
</template>
<script>
  import treeGrid from './ui/TreeGrid.vue'
  export default {
    data: function () {
      return {
        data: [
          {
            'id': '1', 'text': '商品管理', 'name': 'name1',
            'children': [
              {'id': '11', 'text': '商品列表', 'name': 'name2'},
              {'id': '12', 'text': '添加新商品', 'name': 'name3'},
              {
                'id': '13', 'text': '商品分类', 'name': 'name4', 'children': [
                  {'id': '131', 'text': '商品列表1', 'name': 'name11'}
                ]
              }
            ]
          },
          {
            'id': '2', 'text': '2',
            'children': [
              {'id': '21', 'text': '商品列表2'}
            ]
          }
        ]
      }
    },
    components: {
      treeGrid: treeGrid
    }
  }
</script>
<style>

</style>
