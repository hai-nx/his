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
function visible(item: MenuItem) {
    return item.visible !== false
}

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
            <li v-if="visible(item) && item.separator" role="separator" class="d-menu-item-separator"></li>
            <d-menuitem 
            v-else-if="visible(item)" 
            :item="item" 
            :level="0" 
            @click="onItemClick" 
            />
        </template>
    </ul>
</template>

<style>
.d-menu {
    display: inline-flex;
    gap: .25rem;
    height: 100%;
    list-style: none;
    list-style-type: none;
    text-wrap: nowrap;
    margin: 0;
    padding: 0;
}

.d-menu-item-separator {
    border-left: var(--d-border-width) solid var(--d-border-color);
    margin: .5rem 0;
}
</style>