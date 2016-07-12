<template>
    <section class="section">
        <h1 class="title">Pie Examples</h1>
        <h3 class="subtitle">Using chart.js</h3>
        <hr>
        <div class="columns">
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Basic</h3>
                    <chart :type = "'pie'" :data = "chartData"></chart>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h3 class="title">Basic</h3>
                    <chart :type = "'pie'" :data = "chartData"></chart>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
</style>
<script>
    import Chart from '../ui/Chart.vue'
    export default{
        data () {
            return {
                data: [200, 300, 200]
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
            }
        },
        components: {
            Chart
        }
    }
</script>
