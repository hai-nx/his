<script setup lang="ts">
import { computed, defineEmits, defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem'
import router from '@/router'


const emit = defineEmits<{
    (e: 'item-click', item: MenuItem): void
}>()

const props = defineProps({
    config: {
        type: Object as PropType<any>
    },
    fluid: { 
        type: Boolean, default: true 
    }
})

const cls = computed(() => {
    return {
        'd-page-container-fluid': props.fluid
    }
})

function breadcrumbClick(e: MenuItem) {
    router.push({ name: e.path });
}

function itemClick(e: MenuItem) {
    emit('item-click', e)
}

</script>

<template>
    <div class="d-page-container" :class="cls">
        <div class="d-page-container-topbar">
            <slot name="topbar">
                <div class="d-page-container-breadcrumb">
                    <d-breadcrumb :items="config.breadcrumbs" @click="breadcrumbClick"></d-breadcrumb>
                </div>
                <div class="d-page-container-extra">
                    <div v-for="(item, index) in config.extras" :key="index">
                        <i :class="item.icon" @click="itemClick(item)"></i>
                    </div>
                </div>
            </slot>
        </div>
        <div class="d-page-container-wrap">
            <div v-if="$slots.header || config.title" class="d-page-container-header">
                <slot name="header">
                    <div class="d-page-container-title">
                        <slot name="title">
                            <label>{{ config.title }}</label>
                        </slot>
                    </div>
                    <div class="d-page-container-actions">
                        <slot name="actions"></slot>
                    </div>
                </slot>
            </div>
            <div class="d-page-container-body">
                <slot></slot>
            </div>
            <div v-if="$slots.footer || config.paginator" class="d-page-container-footer">
                <slot name="footer">
                    <d-paginator></d-paginator>
                </slot>
            </div>
        </div>
    </div>
</template>

<style>
.d-page-container {
    --el-page-container-background-color: #ffffff;
    --el-page-container-border-color: #dbdbdb;
    --el-page-container-border-width: 1px;
    --el-page-container-border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: .25rem;
    margin-right: auto;
    margin-left: auto;
    padding: .5rem;
    height: 100%;
}

.d-page-container-topbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 6px;
}

.d-page-container-extra {
    display: flex;
    gap: .5rem;
}

.d-page-container-wrap {
    display: flex;
    flex-direction: column;
    background-color: var(--el-page-container-background-color);
    border: var(--el-page-container-border-width) solid var(--el-page-container-border-color);
    border-radius: var(--el-page-container-border-radius);
    height: 100%;
}

.d-page-container-header {
    display: inline-flex;
    justify-content: space-between;
    gap: 6px;
    border-bottom: 1px solid red;
    min-height: 44px;
    padding: 10px;
}

.d-page-container-title {
    font-weight: bold;
    font-size: 16px;
}

.d-page-container-body {
    padding: .5rem;
    height: 100%;
}

@media screen and (min-width: 1400px) {
    .d-page-container:not(.d-page-container-fluid) {
        max-width: 1366px;
    }
}
</style>