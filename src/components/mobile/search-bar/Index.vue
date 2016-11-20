<template>
  <div class="container">
    <div class="searchbar">
      <div class="hd">
        <h1 class="page-title">Search bar</h1>
      </div>
      <div class="bd">
        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
        <div class="weui-search-bar" id="search_bar">
          <form class="weui-search_outer">
            <div class="weui-search_inner">
              <i class="weui-icon_search"></i>
              <input type="search" class="weui-search_input" id="search_input" placeholder="搜索" required="">
              <a href="javascript:" class="weui-icon_clear"></a>
            </div>
            <label for="search_input" class="weui-search_text">
              <i class="weui-icon_search"></i>
              <span>搜索</span>
            </label>
          </form>
          <a href="javascript:" class="weui-search_cancel" id="search_cancel">取消</a>
        </div>
        <div class="weui-cells weui-cells_access search_show" id="search_show">
          <div class="weui-cell">
            <div class="weui-cell_bd weui-cell_primary">
              <p>实时搜索文本</p>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell_bd weui-cell_primary">
              <p>实时搜索文本</p>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell_bd weui-cell_primary">
              <p>实时搜索文本</p>
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell_bd weui-cell_primary">
              <p>实时搜索文本</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .search_show {
    display: none;
    margin-top: 0;
    font-size: 14px;
  }
</style>
<script>
  export default {
    data () {
      return {
        msg: 'Search Bar'
      }
    },
    components: {}
  }
</script>
