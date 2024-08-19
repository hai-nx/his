<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType } from 'vue';
import { MenuItem } from '../menuitem'
import DMenuItem from '../menuitem/index.vue'

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
    (e: "click", item: MenuItem): void;
}>()

// class
const cls = computed(() => ({
    'd-menu-vertical' : props.mode === 'vertical',
    'd-menu-horizontal': props.mode === 'horizontal',
    'd-menu-inline': props.mode === 'inline'
}))

// xử lý sự kiện chọn
function itemClick(item: MenuItem) {
    if (item.disabled) {
        return;
    }

    emit('click', item)
}

</script>

<template>
    <ul class="d-menu" :class="cls">
        <li v-for="(item, index) in items" :key="index">
            <d-menu-item :item="item" :depth="0" @click="itemClick"></d-menu-item>
        </li>
    </ul>
</template>

<style scoped>
.d-menu {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
}

.d-menu-vertical {

}
</style>