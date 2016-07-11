<template>
    <div class="columns is-multiline">
        <div class="column is-4">
            <article class="tile is-child box"><h1 class="title">Font Awesome Basic</h1>
                <h3 class="subtitle"><a href="http://fontawesome.io/examples/">More Examples</a></h3>
                <div class="content">
                    <p><i class="fa fa-camera-retro"></i></p>
                    <p><i class="fa fa-camera-retro fa-lg"></i> fa-lg </p>
                    <p><i class="fa fa-camera-retro fa-2x"></i> fa-2x </p>
                    <p><i class="fa fa-camera-retro fa-3x"></i> fa-3x </p>
                    <p><i class="fa fa-camera-retro fa-4x"></i> fa-4x </p>
                    <p><i class="fa fa-camera-retro fa-5x"></i> fa-5x </p></div>
            </article>
        </div>
        <div class="column is-4">
            <article class="tile is-child box"><h1 class="title">Fixed Width Icons</h1>
                <h3 class="subtitle"><a href="http://fontawesome.io/examples/">More Examples</a></h3>
                <div class="content">
                    <div class="list-group">
                        <a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
                        <a class="list-group-item" href="#"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; Library</a>
                        <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; Applications</a>
                        <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; Settings</a>
                    </div>
                </div>
            </article>
        </div>
        <div class="column is-4">
            <article class="tile is-child box"><h1 class="title">Animated Icons</h1>
                <h3 class="subtitle"><a href="http://fontawesome.io/examples/">More Examples</a></h3>
                <div class="content">
                    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>

                    <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>

                    <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>

                    <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>

                    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span class="sr-only">Loading...</span>
            </article>
        </div>
        <div class="column is-4">
            <article class="tile is-child box"><h1 class="title">Rotated & Flipped</h1>
                <h3 class="subtitle"><a href="http://fontawesome.io/examples/">More Examples</a></h3>
                <div class="content rotated">
                    <i class="fa fa-shield"></i> normal<br>
                    <i class="fa fa-shield fa-rotate-90"></i> fa-rotate-90<br>
                    <i class="fa fa-shield fa-rotate-180"></i> fa-rotate-180<br>
                    <i class="fa fa-shield fa-rotate-270"></i> fa-rotate-270<br>
                    <i class="fa fa-shield fa-flip-horizontal"></i> fa-flip-horizontal<br>
                    <i class="fa fa-shield fa-flip-vertical"></i> fa-flip-vertical
                </div>
            </article>
        </div>
        <div class="column is-4">
            <article class="tile is-child box"><h1 class="title">Stacked Icons</h1>
                <h3 class="subtitle"><a href="http://fontawesome.io/examples/">More Examples</a></h3>
                <div class="content">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square-o fa-stack-2x"></i>
                      <i class="fa fa-twitter fa-stack-1x"></i>
                    </span>
                                        fa-twitter on fa-square-o<br>
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
                    </span>
                                        fa-flag on fa-circle<br>
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square fa-stack-2x"></i>
                      <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
                    </span>
                                        fa-terminal on fa-square<br>
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-camera fa-stack-1x"></i>
                      <i class="fa fa-ban fa-stack-2x text-danger"></i>
                    </span> fa-ban on fa-camera
                </div>
            </article>
        </div>
    </div>
</template>
<style scoped>
    .list-group {
        border:solid 1px #ccc;
    }
    .list-group a{
        display: block;
        line-height: 34px;
        padding-left: 4px;
    }
    .fa {
        vertical-align: middle;
    }
    .list-group a:not(:last-child) {
        border-bottom:solid 1px #ccc;
    }
    .rotated {
        line-height: 34px;
    }
</style>
<script>
    export default{
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
        }
    }
</script>
