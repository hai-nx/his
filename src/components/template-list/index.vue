<script setup lang="ts">

</script>

<template>
    <div class="d-template-list">
        <div v-if="$slots.header" class="d-template-header">
            <slot name="header"></slot>
        </div>

        <div class="d-template-content-wrapper">
            <div class="d-template-top">

            </div>

            <div class="d-template-content">

            </div>

            <div class="d-template-bottom">

            </div>
        </div>
    </div>
</template>