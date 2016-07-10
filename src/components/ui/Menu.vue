<template>
    <ul v-show="model.isOpen">
        <template v-for="item in model.menuItems">
            <li>
                <a v-link ="item.link|| '#'" :title="item.label">
                    <i :class="['icon','fa','fa-' + item.icon]" v-if="item.icon">
                    </i><span class="label">{{item.label}}</span>
                    <i :class="['collapse','fa', 'fa-angle-left','f-right',{'expanded':item.subMenu.isOpen}]"
                       v-if="item.subMenu"
                       @click="toggleSubMenu(item.subMenu)"
                    ></i>
                </a>
            </li>
            <template v-if="item.subMenu">
                <li class="sub-menu" v-show="item.subMenu.isOpen"
                    transition = "slide">
                    <menu :model="item.subMenu"></menu>
                </li>
            </template>
        </template>
    </ul>
</template>
<style lang="scss">
    $fa-font-path: "~font-awesome/fonts/";
    @import "~font-awesome/scss/font-awesome";
    .slide-transition {
        position: relative;
        transition: all .5s;
    }

    .slide-enter, .slide-leave {
        opacity: 0;
        height: 0;
    }
</style>
<script>
    export default{
        name: 'menu',
        props: {
            model: {
                type: Object,
                required: true,
                default: function () {
                    return {
                        menuItems: [],
                        isOpen: false
                    }
                }
            }
        },
        data () {
            return {}
        },
        methods: {
            toggleSubMenu (menu) {
                menu.isOpen = !menu.isOpen
            }
        }
    }
</script>
