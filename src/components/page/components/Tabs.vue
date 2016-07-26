<template>
    <section class="section">
        <h1 class="title">Tabs</h1>
        <h3 class="subtitle">Using bulma styles</h3>
        <hr>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <tab :active-index = "0" style= "width: 100%; height: 300px;">
                        <tab-item title="Java">
                            Java Doc
                        </tab-item>
                        <tab-item title="Go">
                            Go Doc
                        </tab-item>
                        <tab-item title="Ruby">
                            Ruby Doc
                        </tab-item>
                    </tab>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <tab :active-index = "0" class = "is-centered">
                        <tab-item title="Java">
                            Java Doc
                        </tab-item>
                        <tab-item title="Go">
                            Go Doc
                        </tab-item>
                        <tab-item title="Ruby">
                            Ruby Doc
                        </tab-item>
                    </tab>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <tab :active-index = "0" class = "is-boxed">
                        <tab-item title="Java">
                            Java Doc
                        </tab-item>
                        <tab-item title="Go">
                            Go Doc
                        </tab-item>
                        <tab-item title="Ruby">
                            Ruby Doc
                        </tab-item>
                    </tab>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <tab :active-index = "0" class = "is-centered is-boxed">
                        <tab-item title="Java">
                            Java Doc
                        </tab-item>
                        <tab-item title="Go">
                            Go Doc
                        </tab-item>
                        <tab-item title="Ruby">
                            Ruby Doc
                        </tab-item>
                    </tab>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    import {Tab, TabItem} from '../../ui/Tab'
    export default{
        data () {
            return {
            }
        },
        components: {
            Tab,
            TabItem
        }
    }
</script>
