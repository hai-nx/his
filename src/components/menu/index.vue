<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue';
import { MenuItem } from '../menuitem'
import DMenuItem from '../menuitem/index.vue'

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
    startClass: {
        type: String
    },
    endClass: {
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
        <div v-if="$slots.start" :class="startClass">
            <slot name="start"></slot>
        </div>

        <ul class="menu-list">
            <li v-for="(item, index) in items" :key="index">
                <d-menu-item :item="item" :depth="0" @click="itemClick"></d-menu-item>
            </li>
        </ul>

        <div v-if="$slots.end" :class="endClass">
            <slot name="end"></slot>
        </div>
    </div>
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