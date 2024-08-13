<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType, ref } from 'vue'

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
const isout = ref<boolean>(false)
const showOverlayClass = computed(() => open.value ? 'd-dropdown-overlay-show' : undefined)

function onblur(){

    if (isout.value === true)
    open.value = false;

    console.log('onblur')
}

function onmouseleave() {
    isout.value = true;
    console.log(isout.value)
}

</script>

<template>
    <div :class="['d-dropdown']" :tabindex="tabindex" @focusout="onblur()" @mouseleave="onmouseleave" @mouseenter="isout = false">
        <div @click="open = !open">
            <slot></slot>
        </div>
        <div :class="['d-dropdown-overlay', showOverlayClass]">
            <slot name="overlay"></slot>
        </div>
    </div>
</template>

<style>
.d-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.d-dropdown-overlay {
    display: none;
    background-color: red;
    border-color: black;
    border-radius: 6px;
    border-width: 1px;
    margin: .125rem 0 0;
    padding: .5rem 0;
    position: absolute;
}
.d-dropdown-overlay-show {
    display: block;
}
</style>