<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem';

const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>,
        required: false
    }
})

function itemClick(item: MenuItem) {
    console.log('itemClick')
}

</script>

<template>
    <div class="d-topbar">
        <div v-if="$slots.start" :class="['d-topbar-start']">
            <slot name="start"></slot>
        </div>

        <d-menu :items="items"></d-menu>

        <div v-if="$slots.end" :class="['d-topbar-end']">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<style>
.d-topbar {
    display: flex;
    background-color: rebeccapurple;
    border-width: 0;
    top: 0;
    right: 0;
    left: 0;
    height: 44px;
    /* position: absolute; */
    z-index: 1000;
}

.d-topbar-menu {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>