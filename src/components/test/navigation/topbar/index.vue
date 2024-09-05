<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem'

const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>
    },
    mode: {
        type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
        default: 'horizontal'
    }
})

const emit = defineEmits<{
    (e: "item-click", item: MenuItem): void;
}>()


// xử lý sự kiện chọn
function itemClick(item: MenuItem) {
    if (item.disabled) {
        return;
    }

    emit('item-click', item)
}

</script>

<template>
    <div class="d-topbar">
        <div v-if="$slots.start">
            <slot name="start"></slot>
        </div>

        <ul class="d-topbar-menu">
            <li v-for="(item, index) in items" :key="index">
                <d-menu-item :item="item" :depth="0" @click="itemClick"></d-menu-item>
            </li>
        </ul>
        
        <div v-if="$slots.end">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<style>
.d-navbar {
    display: flex;
    height: 44px;
    background-color: rebeccapurple;
}
</style>