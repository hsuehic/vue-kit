<template>
    <div class="container">
        <div class="hd">
            <h1 class="page-title">Vue-kit Mobile</h1>
            <p class="page-desc">with weui styles</p>
        </div>
        <div class="weui-grids">
            <router-link to="/button" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_button.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Button
                </p>
            </router-link>
            <router-link to="/cell" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_cell.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Cell
                </p>
            </router-link>
            <router-link to="/toast" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_toast.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Toast
                </p>
            </router-link>
            <router-link to="/dialog" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_dialog.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Dialog
                </p>
            </router-link>
            <router-link to="/progress" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_progress.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Progress
                </p>
            </router-link>
            <router-link to="/message" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_msg.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Message
                </p>
            </router-link>
            <router-link to="'article'" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_article.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Article
                </p>
            </router-link>
            <router-link to="/action-sheet" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_actionSheet.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Action Sheet
                </p>
            </router-link>
            <router-link to="/icons" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_icons.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Icons
                </p>
            </router-link>
            <router-link to="/panel" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_panel.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Panel
                </p>
            </router-link>
            <router-link to="/tab" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_tab.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Tab
                </p>
            </router-link>
            <router-link to="/search-bar" class="weui-grid">
                <div class="weui-grid_icon">
                    <img src="../../assets/img/icon_nav_search_bar.png" alt="">
                </div>
                <p class="weui-grid_label">
                    Search Bar
                </p>
            </router-link>
        </div>
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
