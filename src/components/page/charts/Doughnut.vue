<template>
    <section class="section">
        <h1 class="title">Doughnut Chart Examples</h1>
        <h3 class="subtitle">Using chart.js</h3>
        <hr>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Basic</h3>
                    <chart :type = "'doughnut'" :data = "chartData"></chart>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Dynamic</h3>
                    <chart :type = "'doughnut'" :data = "dynamicChartData"></chart>
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
                data: [200, 300, 200],
                dynamicData: [200, 300, 400]
            }
        },
        computed: {
            chartData () {
                return {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                    datasets: [{
                        data: this.data,
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ]
                    }]
                }
            },
            dynamicChartData () {
                return {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                    datasets: [{
                        data: this.dynamicData,
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ]
                    }]
                }
            }
        },
        created () {
            var self = this
            self.timer = setInterval(function () {
                self.dynamicData.forEach(function (item, i) {
                    Vue.set(self.dynamicData, i, Math.ceil(Math.random() * 1000))
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
