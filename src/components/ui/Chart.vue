<template>
    <canvas :width = "width" :height="height"></canvas>
</template>
<style>
    canvas{
        max-width:100%;
    }
</style>
<script>
    import uuid from '../../lib/uuid'
    import Chart from 'chart.js/src/Chart.js'

    const types = ['line', 'bar', 'horizontalBar', 'radar', 'polarArea', 'pie', 'doughnut']

    export default{
        mixins: [uuid],
        props: {
            width: {
                type: Number
            },
            height: {
                type: Number
            },
            type: {
                type: String,
                required: true,
                validate (value) {
                    return types.indexOf(value) > -1
                }
            },
            data: {
                type: Object,
                required: true,
                default () {
                    return {}
                }
            },
            options: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        mounted () {
            var self = this
            const $el = this.$el
            const id = `va-canvas-${this.uuid}`
            $el.setAttribute('id', id)
            this.chart = new Chart($el, {
                type: self.type,
                data: self.data,
                options: self.options
            })
        },
        data () {
            return {
                chart: null
            }
        },
        watch: {
            data: {
                handler (val, oldVal) {
                    this.$nextTick(function () {
                        this.chart.update()
                    })
                },
                deep: true
            }
        }
    }
</script>
