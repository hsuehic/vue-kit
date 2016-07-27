<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal :show.sync="showModal">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>
<style>
</style>
<script>
  import Modal from './ui/Modal/Modal.vue'
  export default{
    data () {
      return {
        showModal: false
      }
    },
    components: {
      Modal
    }
  }
</script>
