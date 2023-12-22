<template>
    <div class="app-layout">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DefaultLayout',
    setup() {
        return {}
    }
});
</script>

<style scoped>
.app-layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #ECECEC;
    min-height: 100vh;
}
</style>