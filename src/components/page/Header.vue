<template>
    <nav class="nav header-bar">
        <div class="nav-left">

        </div>
        <div class="nav-center">
            <a class="nav-item" href="https://github.com/gismall">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
            <a class="nav-item" href="https://twitter.com/hsuehic">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
            </a>
        </div>
        <div id="nav-menu" class="nav-right nav-menu">
            <a class="nav-item " href="/">
                Home
            </a>
            <a class="is-hidden nav-item  " href="/templates/">
                <span>Templates</span>
                <span class="tag is-small is-success">New!</span>
            </a>
            <a class="nav-item">
                Documentation
            </a>
            <a class="nav-item " href="/blog/">
                Blog
            </a>


            <span class="nav-item">
                <a class="button is-outlined" data-social-network="Twitter" data-social-action="tweet"
                     data-social-target="http://bulma.io/"
                     href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flebox&amp;url=http://bulma.io/&amp;via=jgthms">
                     <span class="icon">
                        <i class="fa fa-twitter"></i>
                      </span>
                      <span>Tweet</span>
                </a>
                <a class="button is-primary" >
                    <span class="icon">
                        <i class="fa fa-download"></i>
                    </span>
                  <span>Download</span>
                </a>
          </span>

        </div>
    </nav>
</template>
<style lang="scss">
    .header-bar {
        background: #fff;
        height: 58px;
        line-height: 58px;
        font-size: 14px;
        padding: 0 0 0 15px;
        text-align: left;
    }
</style>
<script>
    export default{
        data () {
            return {}
        }
    }
</script>
