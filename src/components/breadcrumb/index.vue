<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'
import { MenuItem } from '../menuitem';

const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>
    }
})
const emit = defineEmits<{
    (e: 'click', payload: any): void
}>()

function onClick(e: MenuItem) {
    emit('click', e)
}

</script>

<template>
    <nav class="d-breadcrumb">
        <ol class="d-breadcrumb-list">
            <template v-for="(item, i) in items" :key="item.label + '_' + i">
                <li v-if="i != 0" class="d-breadcrumb-separator">
                    <slot name="separator">
                        <i class="bi bi-chevron-right"></i>
                    </slot>
                </li>
                <li class="d-breadcrumb-item">
                    <a href="#" @click="onClick(item)">
                        <span>{{ item.label }}</span>
                    </a>
                </li>
            </template>
        </ol>
    </nav>
</template>

<style>
.d-breadcrumb {
    overflow-x: auto;
}

.d-breadcrumb-list {
    list-style: none;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 6px;
    margin: 0;
    padding: 0;
}

.d-breadcrumb-separator i {
    font-size: 12px;
}

.d-breadcrumb-item a {
    color: #666;
}
</style>