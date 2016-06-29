<template>
  <div>
    <form id="search">
      Search<input name="query" v-model="searchQuery">
    </form>
    <demo-grid :data="gridData"
               :columns="gridColumns"
               :filter-key="searchQuery">
    </demo-grid>
  </div>
</template>
<style>
   #search {
     margin: 4px 0;
   }
  input{
    margin:0 0 0 6px;
    vertical-align: middle;
  }
</style>
<script>
  import GridCtrl from './ui/Grid.vue'

  export default {
    data () {
      return {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [
          {name: 'Chuck Norris', power: Infinity},
          {name: 'Bruce Lee', power: 9000},
          {name: 'Jackie Chan', power: 7000},
          {name: 'Jet Li', power: 8000}
        ]
      }
    },
    components: {
      'demo-grid': GridCtrl
    }
  }
</script>
