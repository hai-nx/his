<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'

const props = defineProps({
    type: {
        type: String as PropType<"horizontal" | "vertical">,
        default: 'horizontal'
    }
})

const cls = computed(() => ({
    'd-divider-horizontal': props.type === 'horizontal',
    'd-divider-vertical': props.type === 'vertical'
}))

</script>

<template>
    <div class="d-divider" :class="cls" role="separator"></div>
</template>

<style scoped>
.d-divider {
    box-sizing: border-box;
    border-color: #dbdbdb;
    border-style: solid;
    border-width: 0;
    padding: 0;
    margin: 0;
    color: #333333;
}

.d-divider-horizontal {
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
    margin: 4px 0;
    border-top-width: 1px;
}

.d-divider-vertical {
    display: inline-block;
    height: 100%;
    margin: 0 8px;
    vertical-align: middle;
    border-left-width: 1px;
}
</style>