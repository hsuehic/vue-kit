<template>
    <section class="section">
        <h1 class="title">Pie Chart Examples</h1>
        <h3 class="subtitle">Using chart.js</h3>
        <hr>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Basic</h3>
                    <chart :type = "'radar'" :data = "chartData"></chart>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Dynamic</h3>
                    <chart :type = "'radar'" :data = "dynamicChartData"></chart>
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
                data: {
                    richard: [65, 59, 90, 81, 56, 55, 40],
                    bill: [28, 48, 40, 19, 96, 27, 100]
                }
            }
        },
        computed: {
            chartData () {
                return {
                    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                    datasets: [
                        {
                            label: 'Richard',
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: 'Bill',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            pointBackgroundColor: 'rgba(255,99,132,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,99,132,1)',
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                }
            },
            dynamicChartData () {
                var self = this
                return {
                    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                    datasets: [
                        {
                            label: 'Richard',
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: self.data.richard
                        },
                        {
                            label: 'Bill',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            pointBackgroundColor: 'rgba(255,99,132,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(255,99,132,1)',
                            data: self.data.bill
                        }
                    ]
                }
            }
        },
        created () {
            var self = this
            self.timer = setInterval(function () {
                self.data.richard.forEach(function (item, i) {
                    Vue.set(self.data.richard, i, Math.ceil(Math.random() * 100))
                })
                self.data.bill.forEach(function (item, i) {
                    Vue.set(self.data.bill, i, Math.ceil(Math.random() * 100))
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
