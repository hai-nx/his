<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { DataTypes } from ".";
import VMenuItem from "./VMenuItem.vue";

const props = defineProps({
    mode: {
        type: String as PropType<'vertical' | 'horizontal'>,
        required: false,
        default: 'horizontal',
        validator: (value: string) => {
            return ['vertical', 'horizontal'].includes(value)
        }
    },
    dataSource: {
        type: Object as PropType<DataTypes[]>
    }
})

</script>

<template>
    <ul v-if="mode === 'vertical'" class="x-menu x-menu-vertical">
        <li></li>
    </ul>
    <ul v-else class="v-menu">
        <li v-for="(item, index) in dataSource" :key="index">
            <v-menu-item :data-source="item" :dept="0"></v-menu-item>
        </li>
    </ul>
</template>

<style>
.v-menu {
    display: flex;

}
</style>