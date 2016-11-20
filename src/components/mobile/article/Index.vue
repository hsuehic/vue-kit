<template>
  <div class="container">
    <div class="article">
      <div class="hd">
        <h1 class="page-title">Article</h1>
      </div>
      <div class="bd">
        <article class="weui-article">
          <h1>大标题</h1>
          <section>
            <h2 class="title">章标题</h2>
            <section>
              <h3>1.1 节标题</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute</p>
              <p>
                <img src="../../../assets/img/pic_article.png" alt="">
                <img src="../../../assets/img/pic_article.png" alt="">
              </p>
            </section>
            <section>
              <h3>1.2 节标题</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .article {
    .page-title {
      color: #de7c23;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        msg: 'Article In development, coming soon..'
      }
    },
    components: {}
  }
</script>
