<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue';
import { MenuItem } from '../menuitem'
import VMenuItem from './MenuItem.vue'

const props = defineProps({
    items: {
        type: Object as PropType<MenuItem[]>
    },
    mode: {
        type: String as PropType<'vertical' | 'horizontal'>,
        required: false,
        default: 'horizontal',
        validator: (value: string) => {
            return ['vertical', 'horizontal'].includes(value)
        }
    },
    startCls: {
        type: String
    },
    endCls: {
        type: String
    }
})

const emit = defineEmits<{
    (e: "click", item: MenuItem): void;
}>()

// xử lý sự kiện chọn
function itemClick(item: MenuItem) {
    if (item.disabled) {
        return;
    }

    emit('click', item)
}

</script>

<template>
    <div class="menu">
        <div v-if="$slots.start" class="menu-start">
            <slot name="start"></slot>
        </div>

        <ul class="menu-items">
            <li v-for="(item, index) in items" :key="index">
                <v-menu-item :item="item" @click="itemClick"></v-menu-item>
            </li>
        </ul>

        <div v-if="$slots.end" class="menu-end">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<style scoped>
.menu {
    display: grid;
}

</style>