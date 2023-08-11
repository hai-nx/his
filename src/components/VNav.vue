<template>
    <div class="x-nav">
        <ul class="x-nav__list">
            <li class="x_nav__list-item" v-for="item in items" :key="item.id">
                <v-nav-item :id="item.id"
                            :label="item.label"
                            :path="item.path"
                            :children="item.children"
                            :icon="item.icon"
                            :depth="0">
                </v-nav-item>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import VNavItem from "@/components/VNavItem.vue"
import { NavItem } from "./data";

export default defineComponent({
    name: "VNav",
    components: {
        VNavItem
    },
    props: {
        items: {
            type: Object as PropType<Array<NavItem>>
        }
    },
    setup() {
        return {

        }
    },
});
</script>

<style scoped>
.x-nav {
    background-color: #333;
    color: #eee;
    line-height: 40px;
    z-index: 99;

    transition: all .3s ease;
}
.x-nav__list {
    list-style: none;
}

.x_nav__list-item {
    display: inline-block;
}
</style>