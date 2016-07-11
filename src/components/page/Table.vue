<template>
    <div>
        <h3 class="title">Modifiers</h3>
        <div class="columns">
            <div class="column">
                <p>Add <strong>borders</strong> to all the cells.</p>
            </div>
            <div class="column">
                <code>table is-bordered</code>
            </div>
            <div class="column is-half">
                <table class="table is-bordered">
                    <thead>
                    <tr>
                        <th>One</th>
                        <th>Two</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Three</td>
                        <td>Four</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <p>Add <strong>stripes</strong> to the table.</p>
            </div>
            <div class="column">
                <code>table is-striped</code>
            </div>
            <div class="column is-half">
                <table class="table is-striped">
                    <thead>
                    <tr>
                        <th>One</th>
                        <th>Two</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Three</td>
                        <td>Four</td>
                    </tr>
                    <tr>
                        <td>Five</td>
                        <td>Six</td>
                    </tr>
                    <tr>
                        <td>Seven</td>
                        <td>Eight</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <p>Make the cells <strong>narrower</strong>.</p>
            </div>
            <div class="column">
                <code>table is-narrow</code>
            </div>
            <div class="column is-half">
                <table class="table is-narrow">
                    <thead>
                    <tr>
                        <th>One</th>
                        <th>Two</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Three</td>
                        <td>Four</td>
                    </tr>
                    <tr>
                        <td>Five</td>
                        <td>Six</td>
                    </tr>
                    <tr>
                        <td>Seven</td>
                        <td>Eight</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <p>You can <strong>combine</strong> all three modifiers.</p>
            </div>
            <div class="column">
                <code>table is-bordered is-striped is-narrow</code>
            </div>
            <div class="column is-half">
                <table class="table is-bordered is-striped is-narrow">
                    <thead>
                    <tr>
                        <th>One</th>
                        <th>Two</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Three</td>
                        <td>Four</td>
                    </tr>
                    <tr>
                        <td>Five</td>
                        <td>Six</td>
                    </tr>
                    <tr>
                        <td>Seven</td>
                        <td>Eight</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
        }
    }
</script>
