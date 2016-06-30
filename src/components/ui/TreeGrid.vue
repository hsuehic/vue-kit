<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2016/3/10
Time: 23:48-->
<template>
  <button @click="test">测试</button>
  <table class="table">
    <thead>
    <th>标题</th>
    <th>姓名</th>
    </thead>
    <tr v-for="(index,item) in items">
      <td v-show="show(item)">{{{item.spaceHtml}}}
        <i v-if="item.children" class="glyphicon"
           :class="{'glyphicon-plus':!item.expanded,'glyphicon-minus':item.expanded }" @click="toggle(index,item)"></i>
        <i v-else class="ms-tree-space"></i>
        {{item.text}}
      </td>
      <td>
        {{item.name}}
      </td>
    </tr>
  </table>
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'treeGrid',
    props: {
      items: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    ready: function () {
      let me = this
      let initItems = []
      if (me.items) {
        initData(me.items, 1, null)
        me.items = initItems
        console.log(me.items)
      }

      function initData (items, level, parent) {
        let spaceHtml = ''
        for (var i = 1; i < level; i++) {
          spaceHtml += '<i class="ms-tree-space"></i>'
        }
        items.forEach(function (item, index) {
          item = Object.assign({}, item, {'parent': parent, 'level': level, 'spaceHtml': spaceHtml})
          if ((typeof item.expanded) === 'undefined') {
            item = Object.assign({}, item, {'expanded': false})
          }
          if ((typeof item.show) === 'undefined') {
            item = Object.assign({}, item, {'isShow': false})
          }
          item = Object.assign({}, item, {'load': item.expanded})
          initItems.push(item)
          if (item.children && item.expanded) {
            initData(item.children, level + 1, item)
          }
        })
      }
    },
    computed: {},
    methods: {
      show: function (item) {
        return ((item.level === 1) || (item.parent && item.parent.expanded && item.isShow))
      },
      toggle: function (index, item) {
        let me = this
        let level = item.level + 1
        let spaceHtml = ''
        for (var i = 1; i < level; i++) {
          spaceHtml += '<i class="ms-tree-space"></i>'
        }
        if (item.children) {
          if (item.expanded) {
            item.expanded = !item.expanded
            me.close(index, item)
          } else {
            item.expanded = !item.expanded
            if (item.load) {
              me.open(index, item)
            } else {
              item.load = true
              item.children.forEach(function (child, childIndex) {
                me.items.splice((index + childIndex + 1), 0, child)
                Vue.set(me.items[index + childIndex + 1], 'parent', item)
                Vue.set(me.items[index + childIndex + 1], 'level', level)
                Vue.set(me.items[index + childIndex + 1], 'spaceHtml', spaceHtml)
                Vue.set(me.items[index + childIndex + 1], 'isShow', true)
                Vue.set(me.items[index + childIndex + 1], 'expanded', false)
              })
            }
          }
        }
      },
      test: function () {
        console.log(this.items)
      },
      open: function (index, item) {
        if (item.children) {
          open(index, item.children)
        }

        function open (index, items) {
          items.forEach(function (child, childIndex) {
            child.isShow = true
            if (child.children) {
              open(index + childIndex + 1, child.children)
            }
          })
        }
      },
      close: function (index, item) {
        if (item.children) {
          close(index, item.children)
        }

        function close (index, items) {
          items.forEach(function (child, childIndex) {
            child.isShow = false
            if (child.children) {
              close(index + childIndex + 1, child.children)
            }
          })
        }
      }
    }
  }
</script>
<style scoped>
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 14px;
    height: 14px;
  }

  .ms-tree-space::before {
    content: ""
  }
</style>
