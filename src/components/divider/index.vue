<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue';

const props = defineProps({
    type: {
        type: String as PropType<'dashed' | 'dotted' | 'solid'>,
        default: 'solid'
    },
    direction: {
        type: String as PropType<'horizontal' | 'vertical'>,
        default: 'horizontal'
    }
})

const cls = computed(() => ({

}))

</script>

<template>
    <div class="d-divider" :class="cls"></div>
</template>

<style>
.d-divider {
    border-style: solid;
}
</style>