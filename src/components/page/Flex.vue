<template>
    <div class="flex-ancestor">
        <div class="flex-box" >
            <div class="item">
                <div class="box"></div>
            </div>
            <div class="item">
                <div class="box"></div>
            </div>
            <div class="item">
                <div class="box"></div>
            </div>
            <div class="item">
                <div class="box"></div>
            </div>
            <div class="item">
                <div class="box"></div>
            </div>
            <div class="item">
                <div class="box"></div>
            </div>
            <div class="item">
                <div class="box"></div>
            </div>
        </div>
        <div class="flex-box" >
            <div class="item1">
                <div class="box"></div>
            </div>
            <div class="item1">
                <div class="box"></div>
            </div>
            <div class="item1">
                <div class="box"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .flex-ancestor {
        display: flex;
        align-items: center;
        flex-shrink: 1;
    }
    .flex-box {
        display: inline-flex;
        flex-flow: row;
        flex-wrap: wrap;
        align-self: center;
        align-content: flex-start;
        justify-content: flex-start;
        width: 570px;
        height: 570px;
        flex-shrink: 1;
        .item {
            display: flex;
            box-sizing: border-box;
            flex-grow: 0;
            flex-basis: 33.333%;
            height: 33.333%;
            flex-shrink: 1;
        }
        .item .box {
            border: solid 1px #ccc;
            border-radius: 0;
            margin: 10px;
            flex-grow: 1;
        }
        .item1 {
            display: flex;
            box-sizing: border-box;
            flex-grow: 0;
            flex-basis: 50%;
            height: 50%;
            flex-shrink: 1;
        }
        .item1 .box {
            border: solid 1px #ccc;
            border-radius: 0;
            margin: 10px;
            flex-grow: 1;
        }
    }
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
