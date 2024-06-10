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
});
</script>

<template>
    <input :id="id" :name="name" :type="type" :placeholder="placeholder" :value="value"
        @input="$emit('update:value', ($event?.target as HTMLInputElement).value)" class="v-input" />
</template>

<style scoped>
.v-input {
    padding: 3px 12px;
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

.v-input:hover {
    border-color: #0366d6;
    outline: none;
    /* box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px; */
}
</style>