<template>
    <div>
        <div class="columns">
            <div class="column is-one-quarter"><span class="label">Description</span></div>
            <div class="column is-one-quarter"><span class="label">Effect</span></div>
            <div class="column is-one-half"><span class="label">Code Example</span></div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter">
                <p>Let's start with a simple <strong>button</strong> that uses the <code>"button"</code> CSS class:</p>
            </div>
            <div class="column is-one-quarter">
                <p>
                    <a class="button">Button</a>
                </p>
            </div>
            <div class="column is-half">
                <figure class="highlight"><pre><code class="language-html" data-lang="html"><span
                    class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span
                    class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span></code></pre>

                </figure>
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter">
                <p>By <strong>adding</strong> the <code>"is-primary"</code> CSS class, you can modify the
                    <strong>color</strong>:</p>
            </div>
            <div class="column is-one-quarter">
                <p>
                    <a class="button is-primary">Button</a>
                </p>
            </div>
            <div class="column is-half">
                <figure class="highlight"><pre><code class="language-html" data-lang="html"><span
                    class="nt">&lt;a</span> <span class="na">class=</span><span
                    class="s">"button is-primary"</span><span class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span></code></pre>
                </figure>
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter">
                <div class="content">
                    <p>You can use one of the <strong>5 main colors</strong>:</p>
                    <ul>
                        <li><code>is-primary</code></li>
                        <li><code>is-info</code></li>
                        <li><code>is-success</code></li>
                        <li><code>is-warning</code></li>
                        <li><code>is-danger</code></li>
                    </ul>
                </div>
            </div>
            <div class="column is-one-quarter">
                <p class="control">
                    <a class="button is-primary">Button</a>
                </p>
                <p class="control">
                    <a class="button is-info">Button</a>
                </p>
                <p class="control">
                    <a class="button is-success">Button</a>
                </p>
                <p class="control">
                    <a class="button is-warning">Button</a>
                </p>
                <p class="control">
                    <a class="button is-danger">Button</a>
                </p>
            </div>
            <div class="column is-half">
                <figure class="highlight"><pre><code class="language-html" data-lang="html"><span
                    class="nt">&lt;a</span> <span class="na">class=</span><span
                    class="s">"button is-primary"</span><span class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-info"</span><span
                        class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-success"</span><span class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-warning"</span><span class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-danger"</span><span class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span></code></pre>

                </figure>
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter">
                <div class="content">
                    <p>You can also alter the <strong>size</strong>:</p>
                    <ul>
                        <li><code>is-small</code></li>
                        <li><code>is-medium</code></li>
                        <li><code>is-large</code></li>
                    </ul>
                </div>
            </div>
            <div class="column is-one-quarter">
                <p class="control">
                    <a class="button is-small">Button</a>
                </p>
                <p class="control">
                    <a class="button">Button</a>
                </p>
                <p class="control">
                    <a class="button is-medium">Button</a>
                </p>
                <p class="control">
                    <a class="button is-large">Button</a>
                </p>
            </div>
            <div class="column is-half">
                <figure class="highlight"><pre><code class="language-html" data-lang="html"><span
                    class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span
                    class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-small"</span><span class="nt">&gt;</span>Button<span
                        class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button"</span><span
                        class="nt">&gt;</span>Button<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-medium"</span><span class="nt">&gt;</span>Button<span
                        class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span>
<span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"control"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-large"</span><span class="nt">&gt;</span>Button<span
                        class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/p&gt;</span></code></pre>

                </figure>
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter">
                <div class="content">
                    <p>Or the <strong>style</strong> or <strong>state</strong>:</p>
                    <ul>
                        <li><code>is-outlined</code></li>
                        <li><code>is-loading</code></li>
                        <li><code>is-active</code></li>
                        <li><code>is-disabled</code></li>
                    </ul>
                </div>
            </div>
            <div class="column is-one-quarter">
                <p class="control">
                    <a class="button is-primary is-outlined">Button</a>
                </p>
                <p class="control">
                    <a class="button is-primary is-loading">Button</a>
                </p>
                <p class="control">
                    <a class="button is-primary is-active">Button</a>
                </p>
                <p class="control">
                    <a class="button is-primary is-disabled">Button</a>
                </p>
            </div>
            <div class="column is-half">
                <figure class="highlight"><pre><code class="language-html" data-lang="html"><span
                    class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-outlined"</span><span
                    class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-loading"</span><span
                        class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"button is-primary is-disabled"</span><span
                        class="nt">&gt;</span>
  Button
<span class="nt">&lt;/a&gt;</span></code></pre>
                </figure>
            </div>
        </div>
    </div>
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
