<template>
    <div class="tab" v-show="show">
        <slot></slot>
    </div>
</template>
<style>
</style>
<script>
    export default{
        props: {
            title: String,
            required: true
        },
        data () {
            return {
                index: 0,
                show: false
            }
        },
        ready () {
            this.index = this.$parent.items.length
            this.show = this.$parent.activeIndex === this.index
            this.$parent.items.push({
                title: this.title
            })
        },
        beforeDestroy () {
            this.$parent.items.splice(this.index, 1)
        },
        events: {
            'change': function () {
                this.show = this.$parent.activeIndex === this.index
            }
        },
        components: {
        }
    }
</script>
