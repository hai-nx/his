<script setup lang="ts">
import { defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useLayout } from "../stores/layout";

const layout = useLayout();
const { items } = storeToRefs(layout);

</script>

<template>
    <div class="his-layout">
        <section class="his-layout-header">
            <v-menu :items="items"></v-menu>
        </section>
        <section class="his-layout-container">
            <slot></slot>
        </section>
    </div>
</template>

<style scoped>
.his-layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: red;
    height: 100%;
    width: 100%;
}

.his-layout-header {
    height: var(--his-nav-height)
}

.his-layout-container {
    height: 100%;
}
</style>