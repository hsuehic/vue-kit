<template>
    <section class="section">
        <div class="container">
            <h3 class="title is-2">
                <a href="/documentation/grid/tiles">
        <span class="icon is-large">
          <i class="fa fa-th-large"></i>
        </span>
                    Magic <strong>tiles</strong>
                </a>
            </h3>
            <h4 class="subtitle is-4">A single element for a Metro UI CSS grid</h4>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-primary">
                                <p class="title">Vertical...</p>
                                <p class="subtitle">Top tile</p>
                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">...tiles</p>
                                <p class="subtitle">Bottom tile</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">
                                <p class="title">Middle tile</p>
                                <p class="subtitle">With an image</p>
                                <figure class="image is-4by3">
                                    <img src="http://placehold.it/640x480">
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Wide tile</p>
                            <p class="subtitle">Aligned with the right tile</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                    feugiat facilisis.</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p class="title">Tall tile</p>
                            <p class="subtitle">With even more content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
                                    pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat
                                    gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui
                                    porta orci, quis semper odio felis ut quam.</p>
                                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a
                                    sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor
                                    lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi,
                                    fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                                    dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue
                                    lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed,
                                    gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                                    faucibus libero. Quisque non semper leo.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span
                    class="na">class=</span><span class="s">"tile is-ancestor"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tile is-vertical is-8"</span><span
                        class="nt">&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tile"</span><span
                        class="nt">&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span
                        class="s">"tile is-parent is-vertical"</span><span class="nt">&gt;</span>
        <span class="nt">&lt;article</span> <span class="na">class=</span><span class="s">"tile is-child"</span><span
                        class="nt">&gt;</span>
          <span class="c">&lt;!-- Any content you want here --&gt;</span>
        <span class="nt">&lt;/article&gt;</span>
        <span class="nt">&lt;article</span> <span class="na">class=</span><span class="s">"tile is-child"</span><span
                        class="nt">&gt;</span>
          <span class="c">&lt;!-- Any content you want here --&gt;</span>
        <span class="nt">&lt;/article&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
      <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tile is-parent"</span><span
                        class="nt">&gt;</span>
        <span class="nt">&lt;article</span> <span class="na">class=</span><span class="s">"tile is-child"</span><span
                        class="nt">&gt;</span>
          <span class="c">&lt;!-- Any content you want here --&gt;</span>
        <span class="nt">&lt;/article&gt;</span>
      <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
    <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tile is-parent"</span><span
                        class="nt">&gt;</span>
      <span class="nt">&lt;article</span> <span class="na">class=</span><span class="s">"tile is-child"</span><span
                        class="nt">&gt;</span>
        <span class="c">&lt;!-- Any content you want here --&gt;</span>
      <span class="nt">&lt;/article&gt;</span>
    <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"tile is-parent"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;article</span> <span class="na">class=</span><span class="s">"tile is-child"</span><span
                        class="nt">&gt;</span>
      <span class="c">&lt;!-- Any content you want here --&gt;</span>
    <span class="nt">&lt;/article&gt;</span>
  <span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre>
            </figure>
        </div>
    </section>
</template>
<style>
</style>
<script>
    export default{
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
