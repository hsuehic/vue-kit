<template>
    <div class="tile is-ancestor" _v-cfb876ca="">
        <div class="tile is-parent" _v-cfb876ca="">
            <article class="tile is-child is-success box" _v-cfb876ca=""><p class="title" _v-cfb876ca="">One</p>
                <p class="subtitle" _v-cfb876ca="">Subtitle</p></article>
        </div>
        <div class="tile is-parent" _v-cfb876ca="">
            <article class="tile is-child box" _v-cfb876ca=""><p class="title" _v-cfb876ca="">Two</p>
                <p class="subtitle" _v-cfb876ca="">Subtitle</p></article>
        </div>
        <div class="tile is-parent" _v-cfb876ca="">
            <article class="tile is-child box" _v-cfb876ca=""><p class="title" _v-cfb876ca="">Three</p>
                <p class="subtitle" _v-cfb876ca="">Subtitle</p></article>
        </div>
        <div class="tile is-parent" _v-cfb876ca="">
            <article class="tile is-child box" _v-cfb876ca=""><p class="title" _v-cfb876ca="">Four</p>
                <p class="subtitle" _v-cfb876ca="">Subtitle</p></article>
        </div>
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
