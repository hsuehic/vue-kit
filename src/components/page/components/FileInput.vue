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
                        <file-input name = "file1" accept = "image/*" @changed = "fileSelectedHandler">
                            <a class="button is-primary">选择</a>
                        </file-input>
                    </p>
                    <img :src = "pictureUrl">
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h3>Using Picture</h3>
                    <file-input name = "file1" accept = "image/*" @changed = "fileSelectHandler2">
                        <div class="icon-upload"><i class="fa fa-4x fa-cloud-upload"></i></div>
                    </file-input>
                    <p class="control">
                        <label class="label">{{pictureFileName2}}</label>
                        <input class="input" v-model="pictureFileName2" placeholder="请选择文件">
                    </p>
                    <img class="image" :src="pictureUrl2">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .icon-upload {
        display: inline-block;
        text-align: center;
        background-color: #eee;
        color:#aaa;
    }
    .icon-upload i {
        height: 90px;
        width: 90px;
        line-height: 90px;
    }
    .icon-upload:hover {
        color: #fff;
        background-color: #3aabf0;
    }
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
