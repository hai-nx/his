<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem';

const props = defineProps({
    breadcrumb: {
        type: Array as PropType<MenuItem[]>
    },
    title: { type: String }

})



</script>

<template>
    <div class="d-page">
        <slot name="header">
            <div class="d-page-header">
                <d-breadcrumb :items="breadcrumb"></d-breadcrumb>

                <div class="d-page-header-items">
                    <button class="btn btn-sm py-0 text-muted">
                        <i class="bi bi-gear-fill h6"></i>
                    </button>
                    <button class="btn btn-sm py-0 text-muted">
                        <i class="bi bi-question-circle-fill h6"></i>
                    </button>
                    <button class="btn btn-sm py-0 text-muted">
                        <i class="bi bi-chat-left-dots h6"></i>
                    </button>
                </div>
            </div>
        </slot>

        <div class="d-page-content-wrapper">
            <div>
{{ title }}
            </div>
        </div>

        <div v-if="$slots.footer" class="d-page-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style>
.d-page {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 100%;
    padding: .5rem;
}

.d-page-header {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

}

.d-page-content-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #fff;
    border: var(--d-border-width) solid var(--d-border-color);
    border-radius: 4px;
}
</style>