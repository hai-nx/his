<script setup lang="ts">
import { PropType, defineProps } from "vue"
import { XItemType } from ".";

defineProps({
    dataSource: {
        type: Object as PropType<XItemType[]>
    }
})

</script>

<template>
    <div class="layout-header">

    </div>
</template>

<style>
.layout-header {
    background-color: var(--his-nav-background-color);
}
</style>