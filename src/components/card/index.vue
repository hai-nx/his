<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    title: { type: String },
    subtitle: { type: String }
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
            <div class="d-card-content">
                <slot></slot>
            </div>
        </div>
        <div v-if="$slots.footer" class="d-card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>