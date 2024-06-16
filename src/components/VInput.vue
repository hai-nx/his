<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    id: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: true,
        default: "text",
    },
    placeholder: {
        type: String,
        required: false,
    },
    value: {
        type: String,
        required: false,
    },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
});
</script>

<template>
    <input class="v-input" :id="id" :name="name" :type="type" :placeholder="placeholder" :value="value"
        :readonly="readonly" :disabled="disabled"
        @input="$emit('update:value', ($event?.target as HTMLInputElement).value)" />
</template>

<style scoped>
.v-input {
    padding: 2px 5px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    /* border: 1px solid #e1e4e8; */
    border: 1px solid #BDBDBD;
    border-radius: 2px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
}

.v-input:hover,
.v-input:focus-visible {
    border-color: #0366d6;
    box-shadow: 0 0 0 1px #0366d6;
    outline: none;
}

.v-input:disabled {
    background-color: #f1f1f1;
}
</style>