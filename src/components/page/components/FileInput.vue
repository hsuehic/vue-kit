<template>
    <section class="section content">
        <h1>Nice File Input</h1>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <h3>Basic</h3>
                    <label class="label">Picture</label>
                    <p class="control has-addons">
                        <input class="input" type="text" v-model="pictureFile">
                        <file-input name = "file1" accept = "image/jpeg,image/png" @changed = "fileSelectedHandler">
                            <a class="button is-primary">选择</a>
                        </file-input>
                    </p>
                    <img :src = "pictureUrl">
                </div>
            </div>
            <div class="column is-half">
                <h3>Using Picture</h3>
                <div class="box">
                    <file-input name = "file1" accept = "image/jpeg,image/png" @changed = "fileSelectHandler2">
                        <a class="button is-primary is-outlined is-large"><i class="fa fa-3x fa-cloud-upload"></i></a>
                    </file-input>
                    <p class="control">
                        <label class="label">{{pictureFileName2}}</label>
                        <img class="image" :src="pictureUrl2">
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    import FileInput from '../../ui/NiceFileInput.vue'
    export default{
        data () {
            return {
                pictureFile: '',
                pictureUrl: 'http://placehold.it/640x480',
                pictureFileName2: '',
                pictureUrl2: 'http://placehold.it/640x480'
            }
        },
        methods: {
            fileSelectedHandler (fileInput, event) {
                var self = this
                var files = fileInput.files
                if (files.length > 0) {
                    var file = files[0]
                    self.pictureFile = file.name
                    self.pictureUrl = window.URL.createObjectURL(file)
                }
            },
            fileSelectHandler2 (fileInput, event) {
                var self = this
                var files = fileInput.files
                if (files.length > 0) {
                    var file = files[0]
                    self.pictureFileName2 = file.name
                    self.pictureUrl2 = window.URL.createObjectURL(file)
                }
            }
        },
        components: {
            FileInput
        }
    }
</script>
