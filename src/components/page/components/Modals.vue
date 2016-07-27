<template>
    <section class="content">
        <h1 class="title">Modals</h1>
        <div class="columns">
            <div class="column">
                <button class="button is-primary">Default</button>
            </div>
            <div class="column">
                <button class="button is-primary" @click = "showDefaultModal()">Show Modal</button>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <button class="is-primary"></button>
            </div>
            <div class="column">
                <button class="is-primary"></button>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <button class="is-primary"></button>
            </div>
            <div class="column">
                <button class="is-primary"></button>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <button class="is-primary"></button>
            </div>
            <div class="column">
                <button class="is-primary"></button>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    import Vue from 'vue'
    import Modal from '../../ui/Modal/Modal.vue'
    let ModalCtrl = Vue.extend(Modal)
    export default{
        data () {
            return {
                msg: 'hello vue'
            }
        },
        methods: {
            showDefaultModal () {
                var modal = new ModalCtrl({
                    el: document.createElement('div')
                })
                modal.show()
            }
        },
        components: {
            Modal
        }
    }
</script>
