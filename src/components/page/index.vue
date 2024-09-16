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
        <slot name="topbar">
            <div class="d-page-topbar">
                <div class="d-page-breadcrumb">
                    <d-breadcrumb :items="breadcrumb"></d-breadcrumb>
                </div>
                <div class="d-page-extra"></div>
            </div>
        </slot>

        <div class="d-page-content-wrapper">
            <slot>
                <div>

                </div>
            </slot>
            <div>
                <slot></slot>
            </div>
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

.d-page-topbar {
    display: inline-flex;
    justify-content: space-between;
}

.d-page-content-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #fff;
    border: var(--d-border-width) solid var(--d-border-color);
    border-radius: 2px;
}
</style>