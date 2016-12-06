<template>
    <section class="section">
        <h1 class="title">Polar Area Chart Examples</h1>
        <h3 class="subtitle">Using chart.js</h3>
        <hr>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Basic</h3>
                    <chart :type = "'polarArea'" :data = "chartData"></chart>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Dynamic</h3>
                    <chart :type = "'polarArea'" :data = "dynamicChartData"></chart>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    import Vue from 'vue'
    import Chart from '../../ui/Chart.vue'
    export default{
        data () {
            return {
                dynamicData: [
                    11,
                    16,
                    7,
                    3,
                    14
                ]
            }
        },
        computed: {
            chartData () {
                return {
                    datasets: [{
                        data: [
                            11,
                            16,
                            7,
                            3,
                            14
                        ],
                        backgroundColor: [
                            '#FF6384',
                            '#4BC0C0',
                            '#FFCE56',
                            '#E7E9ED',
                            '#36A2EB'
                        ],
                        label: 'My dataset' // for legend
                    }],
                    labels: [
                        'Red',
                        'Green',
                        'Yellow',
                        'Grey',
                        'Blue'
                    ]
                }
            },
            dynamicChartData () {
                return {
                    datasets: [{
                        data: this.dynamicData,
                        backgroundColor: [
                            '#FF6384',
                            '#4BC0C0',
                            '#FFCE56',
                            '#E7E9ED',
                            '#36A2EB'
                        ],
                        label: 'My dataset' // for legend
                    }],
                    labels: [
                        'Red',
                        'Green',
                        'Yellow',
                        'Grey',
                        'Blue'
                    ]
                }
            }
        },
        created () {
            var self = this
            self.timer = setInterval(function () {
                self.dynamicData.forEach(function (item, i) {
                    Vue.set(self.dynamicData, i, Math.ceil(Math.random() * 20))
                })
            }, 2000)
        },
        beforeDestroy () {
            if (this.timer) {
                clearInterval(this.timer)
            }
        },
        components: {
            Chart
        }
    }
</script>
