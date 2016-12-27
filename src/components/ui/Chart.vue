<template>
    <canvas :width = "width" :height="height"></canvas>
</template>
<style>
    canvas{
        max-width:100%;
    }
</style>
<script type ="text/javascript">
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
            if (self.type === 'doughnut') {
              setInterval(() => {
                  for (var i = 0; i < self.chart.data.datasets[0].data.length; i++) {
                      self.chart.data.datasets[0].data[i] = Math.ceil(Math.random() * 100)
                  }
                  self.chart.update()
              }, 1000)
            }
        },
        data () {
            return {
                chart: null
            }
        }
    }
</script>
