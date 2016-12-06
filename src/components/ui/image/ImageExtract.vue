<template>
    <section class="section">
        <h1 class="title">图片裁剪</h1>
        <div class="columns">
            <div class="column is-half">
                <h3>原图</h3>
                <div class="box"><img :src = "path"></div>
            </div>
            <div class="column is-half">
                <h3>目标图</h3>
                <div class="box"><img></div>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    export default{
        props:
        {
            path: {
                type: String,
                require: true
            },
            rect: {
                type: Array,
                require: true
            }
        },

        data () {
            return {
                msg: 'hello vue',
                extracted: null
            }
        },
        mounted () {
            var el = this.$el
            var imgs = el.querySelectorAll('img')
            var source = imgs[0]
            var canvas = document.createElement('canvas')
            var target = imgs[1]
            var self = this
            source.onload = function (e) {
                var width = e.target.width
                var height = e.target.height
                target.style.width = `${width}px`
                target.style.height = `${height}px`
                canvas.width = width
                canvas.height = height
                var ctx = canvas.getContext('2d')
                ctx.drawImage(source, self.rect[0], self.rect[1], self.rect[2], self.rect[3], 0, 0, width, height)
                ctx.save()
                target.setAttribute('src', canvas.toDataURL('image/png'))
            }
        }
    }
</script>
