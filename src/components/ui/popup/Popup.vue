<template>
    <div class="ki-popup">
        <div class="popup-overlay" transition = "popup-overlay" v-show = "show"></div>
    </div>
</template>
<style>
    @import "popup.scss";
</style>
<script>
    export default{
        replace: true,
        data () {
            return {
                msg: 'hello vue'
            }
        },
        props: {
            size: {
                type: Number
            }
        },
        computed: {
            encodeMsg () {
                return escape(msg)
            }
        },
        methods: {
            showMsg () {
                console.log(msg)
            }
        },
        init () {
        },
        created () {
        },
        beforeCompile () {
        },
        compiled () {
        },
        ready () {
        },
        attached () {
        },
        detached () {
        },
        beforeDestroy () {
        },
        destroyed () {
        },
        watch: {
            msg: function (val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal)
            }
        },
        components: {
        }
    }
</script>
