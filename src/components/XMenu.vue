<template>
    <div class="x-nav">
        <ul class="x-nav__list">
            <li class="x_nav__list-item" v-for="item in items" :key="item.key">
                <x-menu-item :label="item.label"
                            :path="item.path"
                            :children="item.children"
                            :icon="item.icon"
                            :depth="0">
                </x-menu-item>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import XMenuItem from "./XMenuItem.vue"
import { XItemType } from "./data";

export default defineComponent({
    name: "XMenu",
    components: {
        XMenuItem
    },
    props: {
        items: {
            type: Object as PropType<Array<XItemType>>
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
    padding-left: 0;
}

.x_nav__list-item {
    display: inline-block;
}
</style>