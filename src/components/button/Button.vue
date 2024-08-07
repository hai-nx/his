<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    as: {
        type: String,
        default: 'button'
    },
    disabled: {
        type: Boolean
    }
})

const clsType = computed(() => {
    if (props.type == 'primary') return 'dv-button-primary'
    if (props.type == 'danger') return 'dv-button-danger'
    else return ''
})

</script>

<template>
    <button :disabled="disabled" :class="[clsType]" class="dv-button">
        <slot></slot>
    </button>
</template>

<style scoped>
.dv-button {
    --ms-button-hover-bg: #f3f4f6;
    --ms-button-hover-border-color: #0366d6;
    --ms-button-hover-color: #24292e;

    --ms-button-focus-box-shadow: #91caff;

    display: inline-block;
    outline: 0;
    cursor: pointer;
    padding: 2px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    background-color: #fafbfc;
    border-color: #dbdbdb;
    border: 1px solid;
    border-radius: 2px;
    color: #24292e;
    /* box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset; */
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
}

.dv-button:focus,
.dv-button:active,
.dv-button:hover {
    background-color: var(--ms-button-hover-bg);
    border-color: var(--ms-button-hover-border-color);
    color: var(--ms-button-hover-color);
    transition-duration: 0.1s;
    /* box-shadow: 2px solid var(--ms-button-focus-box-shadow); */

    outline: 1px solid var(--ms-button-focus-box-shadow);
    outline-offset: 0px;
}

.dv-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.dv-button-primary {
    --ms-button-hover-bg: #0366d6;
    --ms-button-hover-border-color: #0366d6;
    --ms-button-hover-color: #f3f4f6;

    /* --ms-button-focus-box-shadow: red; */

    background-color: #0366d6;
    border-color: #0366d6;
    color: #f3f4f6;
}

</style>