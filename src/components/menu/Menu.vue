<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType } from 'vue'

const props = defineProps({
    mode: {
        type: String as PropType<'vertical' | 'horizontal' | 'inline'>,
        required: true,
        default: 'horizontal'
    },
    items: {
        type: Array
    } 
})

const emit = defineEmits<{
    (e: 'item-click', payload: any): void
}>()

const cls = computed(() => ({

}))

</script>

<template>
    <ul class="d-menu" :class="cls">
        <li v-for="(item, index) in items" :key="index">

        </li>
    </ul>
</template>