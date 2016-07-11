<template>
    <div>
        <header-component/>
        <div>this is template body</div>
        <other-component/>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components:{
        }
    }
</script>
