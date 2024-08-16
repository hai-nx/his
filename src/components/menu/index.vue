<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue';
import { MenuItem } from '../menuitem'
import DMenuItem from '../menuitem/index.vue'

const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>
    },
    mode: {
        type: String as PropType<'vertical' | 'horizontal'>,
        required: false,
        default: 'horizontal',
        validator: (value: string) => {
            return ['vertical', 'horizontal'].includes(value)
        }
    }
})

const emit = defineEmits<{
    (e: "click", item: MenuItem): void;
}>()

// class


// xử lý sự kiện chọn
function itemClick(item: MenuItem) {
    if (item.disabled) {
        return;
    }

    emit('click', item)
}

</script>

<template>
    <ul :class="['d-menu']">
        <li v-for="(item, index) in items" :key="index">
            <d-menu-item :item="item" :depth="0" @click="itemClick"></d-menu-item>
        </li>
    </ul>
</template>

<style scoped>
.menu {
    display: grid;
    height: 100%;
}

.menu-list {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>