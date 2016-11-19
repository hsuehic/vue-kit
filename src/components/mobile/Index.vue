<template>
    <div class="hd">
        <h1 class="page-title">Vue-kit Mobile</h1>
        <p class="page-desc">with weui styles</p>
    </div>
    <div class="weui-grids">
        <a v-link="'button'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_button.png" alt="">
            </div>
            <p class="weui-grid_label">
                Button
            </p>
        </a>
        <a v-link="'cell'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_cell.png" alt="">
            </div>
            <p class="weui-grid_label">
                Cell
            </p>
        </a>
        <a v-link="'toast'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_toast.png" alt="">
            </div>
            <p class="weui-grid_label">
                Toast
            </p>
        </a>
        <a v-link="'dialog'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_dialog.png" alt="">
            </div>
            <p class="weui-grid_label">
                Dialog
            </p>
        </a>
        <a v-link="'progress'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_progress.png" alt="">
            </div>
            <p class="weui-grid_label">
                Progress
            </p>
        </a>
        <a v-link="'message'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_msg.png" alt="">
            </div>
            <p class="weui-grid_label">
                Message
            </p>
        </a>
        <a v-link="'article'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_article.png" alt="">
            </div>
            <p class="weui-grid_label">
                Article
            </p>
        </a>
        <a v-link="'action-sheet'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_actionSheet.png" alt="">
            </div>
            <p class="weui-grid_label">
                Action Sheet
            </p>
        </a>
        <a v-link="'icons'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_icons.png" alt="">
            </div>
            <p class="weui-grid_label">
                Icons
            </p>
        </a>
        <a v-link="'panel'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_panel.png" alt="">
            </div>
            <p class="weui-grid_label">
                Panel
            </p>
        </a>
        <a v-link="'tab'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_tab.png" alt="">
            </div>
            <p class="weui-grid_label">
                Tab
            </p>
        </a>
        <a v-link="'search-bar'" class="weui-grid">
            <div class="weui-grid_icon">
                <img src="../../assets/img/icon_nav_search_bar.png" alt="">
            </div>
            <p class="weui-grid_label">
                Search Bar
            </p>
        </a>
    </div>
</template>
<style lang="scss">

</style>
<script>
    export default {
        data () {
            return {
                msg: 'hello vue'
            }
        },
        components: {
        }
    }
</script>
