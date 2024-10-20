<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    title: { type: String },
    subtitle: { type: String },
    cls: { type: Object }
})

</script>

<template>
    <div class="d-card">
        <div v-if="$slots.header" class="d-card-header">
            <slot name="header"></slot>
        </div>
        <div class="d-card-body">
            <div v-if="$slots.title || $slots.subtitle" class="d-card-caption">
                <div v-if="$slots.title" class="d-card-title">
                    <slot name="title"></slot>
                </div>
                <div v-if="$slots.subtitle" class="d-card-subtitle">
                    <slot name="subtitle"></slot>
                </div>
            </div>

            <div class="d-card-content" :class="cls">
                <slot></slot>
            </div>
        </div>
        <div v-if="$slots.footer" class="d-card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style>
.d-card {
    --d-card-background: #fff;
    --d-card-color: #334155;
    --d-card-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
    --d-card-border-radius: 12px;
    --d-card-body-padding: 1.25rem;
    --d-card-body-gap: .5rem;
    --d-card-caption-gap: .5rem;
    --d-card-title-font-size: 1.25rem;
    --d-card-title-font-weight: 500;
    --d-card-subtitle-color: #64748b;

    background-color: var(--d-card-background);
    color: var(--d-card-color);
    box-shadow: var(--d-card-shadow);
    border-radius: var(--d-card-border-radius);
    display: flex;
    flex-direction: column;
}

.d-card-body {
    padding: var(--d-card-body-padding);
    display: flex;
    flex-direction: column;
    gap: var(--d-card-body-gap);
}

.d-card-caption {
    display: flex;
    flex-direction: column;
    gap: var(--d-card-caption-gap);
}

.d-card-title {
    font-size: var(--d-card-title-font-size);
    font-weight: var(--d-card-title-font-weight);
}

.d-card-subtitle {
    color: var(--d-card-subtitle-color);
}
</style>