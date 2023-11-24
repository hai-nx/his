<template>
    <slot></slot>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'DefaultLayout',
    setup() {
        return { }
    }
});
</script>