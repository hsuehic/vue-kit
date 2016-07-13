<template>
    <div class="element-container">
        <input type="file" :name = "name" @change="changed($event)" :accept = "accept">
        <slot></slot>
    </div>
</template>
<style scoped>
    .element-container {
        display: inline-block;
    }
    input[type="file"] {
        display: none;
    }
</style>
<script>
    import uuid from '../../lib/uuid'

    export default{
        mixins: [uuid],
        props: {
            name: {
                type: String,
                required: true
            },
            accept: {
                type: String,
                require: true
            }
        },
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
        },
        ready () {
            var self = this
            var ele = this.$el
            this.fileInput = ele.firstElementChild
            this.handleElement = this.fileInput.nextElementSibling
            var id = `nice-file-${this.uuid}`
            this.fileInput.setAttribute('id', id)
            this.handleElement.onclick = function () {
                console.log('clicked')
                self.fileInput.click()
            }
        },
        methods: {
            changed (event) {
                console.log('changed triggered')
                this.$emit('changed', this.fileInput, event)
            }
        }
    }
</script>
