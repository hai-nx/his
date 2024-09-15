<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem';
import DMenuitem from '../menuitem/index.vue'

const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>,
    },
    tabindex: { type: Number },
    mode: {
        type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
        default: 'horizontal'
    }
})

const emit = defineEmits<{
    (e: "item-click", item: MenuItem): void;
}>()

/* function */
function onItemClick(item: MenuItem) {
    if (item.disabled) {
        return;
    }
console.log('item')
    console.log(item)
    emit('item-click', item)
}

</script>

<template>
    <ul class="d-menu" role="menu" :tabindex="tabindex">
        <template v-for="(item, index) in items" :key="index">
            <d-menuitem :item="item" :depth="0" @click="onItemClick" />
        </template>
    </ul>
</template>

<style>
.d-menu {
    display: inline-block;
    height: 100%;
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.d-menu ul {
    padding: 0;
}

</style>