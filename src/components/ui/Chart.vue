<template>
    <canvas></canvas>
</template>
<style>
    canvas{
        max-width:100%;
    }
</style>
<script>
    export default{
        props: {
            width: {
                type: Number
            },
            height: {
                type: Number
            }
        },
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
        }
    }
</script>
