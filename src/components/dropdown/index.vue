<script setup lang="ts">
import { defineProps, ref, PropType, computed } from 'vue'

const props = defineProps({
    tabindex: {
        type: Number,
        required: false,
        default: 0
    },
    placement: {
        type: String as PropType<'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'>,
        default: 'bottomLeft'
    },
})

const open = ref<boolean>(false)
const focused = ref<boolean>(false)
const cls = computed(() => ({

}))

/* function */
function focusOut() {
    if (focused.value === false)
        open.value = false;
}

function mouseLeave() {
    focused.value = false;
}

function mouseEnter() {
    focused.value = true;
}

/* event */



</script>

<template>
    <div class="d-dropdown" :tabindex="tabindex" @focusout="focusOut" @mouseleave="mouseLeave"
        @mouseenter="mouseEnter">
        <div @click="open = !open">
            <slot></slot>
        </div>
        <div class="d-dopdown-overlay" @click="open = !open">
            <slot name="overlay"></slot>
        </div>
    </div>
</template>

<style>
.d-dopdown {
    box-sizing: border-box;
}
</style>