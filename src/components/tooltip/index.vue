<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue'

const props = defineProps({
    text: {
        type: String
    },
    placement: {
        type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
        default: 'top'
    }
})

const show = ref(false)

function onMouseDown() {
    show.value = false
}

function onMouseLeave() {
    show.value = true
}

</script>

<template>
    <div class="d-tooltip" @mousedown="onMouseDown" @mouseleave="onMouseLeave">
        <slot v-if="text && show" name="content">
            <div class="d-tooltip-popper-container">
                <span>{{ text }}</span>
            </div>
        </slot>
        <slot></slot>
    </div>
</template>

<style>
.d-tooltip {
    display: inline-block;
    position: relative;
}

/* Show the tooltip text when you mouse over the tooltip container */
.d-tooltip:hover .d-tooltip-popper-container {
    visibility: visible;
    opacity: 1;
}

/* Tooltip arrow */
.d-tooltip .d-tooltip-popper-container::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

/* Tooltip text */
.d-tooltip-popper-container {
    visibility: collapse;
    /* width: 120px; */
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 2px;
    border-radius: 2px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 15%;
    /* margin-left: -60px; */

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
}
</style>