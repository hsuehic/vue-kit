<template>
    <section class="section">
        <h1 class="title">Bar Chart Examples</h1>
        <h3 class="subtitle">Using chart.js</h3>
        <hr>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Vertical</h3>
                    <chart :type = "'bar'" :data = "chartData" />
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Horizontal</h3>
                    <chart :type = "'horizontalBar'" :width ="300" :height ="400" :data = "dynamicChartData" />
                </div>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    import Chart from '../../ui/Chart.vue'
    export default{
        data () {
            return {
            }
        },
        computed: {
            chartData () {
                return {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: '销售',
                        backgroundColor: '#FF6384',
                        borderColor: '#CCCCCC',
                        borderWidth: 1,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }, {
                        label: '利润',
                        backgroundColor: '#36A2EB',
                        borderColor: '#CCCCCC',
                        borderWidth: 1,
                        data: [32, 22, 45, 56, 22, 33, 22]
                    }, {
                        label: '费用',
                        backgroundColor: '#FFCE56',
                        borderColor: '#CCCCCC',
                        borderWidth: 1,
                        data: [32, 18, 3, 22, 44, 19, 7]
                    }]
                }
            },
            dynamicChartData () {
                return {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: '销售',
                        backgroundColor: '#FF6384',
                        borderColor: '#CCCCCC',
                        borderWidth: 1,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }, {
                        label: '利润',
                        backgroundColor: '#36A2EB',
                        borderColor: '#CCCCCC',
                        borderWidth: 1,
                        data: [32, 22, 45, 56, 22, 33, 22]
                    }, {
                        label: '费用',
                        backgroundColor: '#FFCE56',
                        borderColor: '#CCCCCC',
                        borderWidth: 1,
                        data: [32, 18, 3, 22, 44, 19, 7]
                    }]
                }
            }
        },
        created () {
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
