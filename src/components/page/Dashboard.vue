<template>
    <div>
        <div v-if="show" transition="expand">hello</div>
        <input type="checkbox" v-model="show">
    </div>
</template>
<style>
    /* always present */
    .expand-transition {
        transition: all .3s ease;
        height: 30px;
        padding: 10px;
        background-color: #eee;
        overflow: hidden;
    }

    /* .expand-enter defines the starting state for entering */
    /* .expand-leave defines the ending state for leaving */
    .expand-enter, .expand-leave {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }
</style>
<script>
    export default{
        data () {
            return {
                show: false
            }
        },
        components: {}
    }
</script>
