<template></template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
    name: "Medicine",
    setup() {
        const state = reactive({
            isLoading: false,
            isResult: false,
            columns: [],
        });

        return {
            ...state,
        };
    },
});
</script>

<style>
</style>