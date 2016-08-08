<template>
    <image-extract :path = "path" :rect = "[200,200,600,400]"></image-extract>
</template>
<script>
    import ImageExtract from '../../ui/image/ImageExtract.vue'
    export default{
        data () {
            return {
                path: require('../../../assets/img/screen-dashboard.png')
            }
        },
        components: {
            ImageExtract
        }
    }
</script>
