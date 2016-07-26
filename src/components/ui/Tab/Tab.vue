<template>
        <div class="tabs">
            <ul class="tab-headers">
                <li v-for = "item in items"
                :class = "{'is-active': ($index === activeIndex)}"
                @click="onClick($index)"><a>{{item.title}}</a></li>
            </ul>
            <div class="tab-items">
                <slot></slot>
            </div>
        </div>
</template>
<style>
    .tabs {
        flex-flow: column;
        min-height: 200px;
        border-radius: 5px;
    }
    .tabs ul.tab-headers {
        flex-basis: auto;
        flex-grow: 0;
        overflow: visible;
    }
    .tabs ul.tab-headers li {
        overflow: visible;
    }
    .tab-items {
        flex-grow: 1;
        padding: 15px;
    }
</style>
<script>
    export default {
        name: 'tab',
        props: {
            activeIndex: {
                type: Number,
                default: 0
            },
            style: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: 'default'
            }
        },
        data () {
            return {
                items: []
            }
        },
        methods: {
            onClick (index) {
                this.activeIndex = index
                this.$children[index].show = true
                this.$broadcast('change', index)
            }
        }
    }
</script>
