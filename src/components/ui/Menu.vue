<template>
    <ul v-show="model.isOpen">
        <template v-for="item in model.menuItems">
            <li @click="toggleSubMenu(item.subMenu,$event)">
                <router-link :to ="{ path: item.link, exact: true }" :title="item.label">
                    <i :class="['icon','fa','fa-' + item.icon]" v-if="item.icon">
                    </i><span class="label">{{item.label}}</span>
                    <i :class="['collapse','fa', 'fa-angle-left','f-right',{'expanded':item.subMenu.isOpen}]"
                       v-if="item.subMenu"
                    ></i>
                </router-link>
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
            openSubMenu (menu) {
                menu.isOpen = true
            },
            toggleSubMenu (menu, $event) {
                if (menu) {
                    menu.isOpen = !menu.isOpen
                    $event.preventDefault()
                    $event.stopPropagation()
                }
            }
        }
    }
</script>
