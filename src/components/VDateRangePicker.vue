<template>
    <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "VDateRangePicker",
    props: {
        period: {
            type: Number
        },
        from: {
            type: Date
        },
        to: {
            type: Date
        }
    },
    setup() {
        return {

        }
    },
});
</script>

<style>
    
</style>