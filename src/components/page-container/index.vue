<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem'

const props = defineProps({
    breadcrumb: {
        type: Array as PropType<MenuItem[]>
    },
    extra: {
        type: Array as PropType<MenuItem[]>
    },
    title: { type: String },
    fluid: { type: Boolean, default: false }
})

const cls = computed(() => {
    return {
        'el-page-container-fluid': props.fluid
    }
})

</script>

<template>
    <div class="el-page-container" :class="cls">
        <div class="el-page-container-topbar">
            <slot name="topbar">
                <div class="el-page-container-breadcrumb">
                    <d-breadcrumb :items="breadcrumb"></d-breadcrumb>
                </div>
                <div class="el-page-container-extra">
                    <div v-for="(item, index) in extra" :key="index">
                        <i :class="item.icon"></i>
                    </div>
                </div>
            </slot>
        </div>
        <div class="el-page-container-wrap">
            <div v-if="$slots.header" class="el-page-container-header">
                <slot name="header">
                    <div class="el-page-container-title">
                        <slot name="title">
                            <label>{{ title }}</label>
                        </slot>
                    </div>
                    <div class="el-page-container-actions">
                        <slot name="actions"></slot>
                    </div>
                </slot>
            </div>
            <div class="el-page-container-body">
                <slot></slot>
            </div>
            <div v-if="$slots.footer" class="el-page-container-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style>
.el-page-container {
    --el-page-container-background-color: #ffffff;
    --el-page-container-border-color: #dbdbdb;
    --el-page-container-border-width: 1px;
    --el-page-container-border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: .5rem;
    height: 100%;
}
.el-page-container-topbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 6px;
}

.el-page-container-extra {
    display: flex;
    gap: .5rem;
}

.el-page-container-wrap {
    display: flex;
    flex-direction: column;
    background-color: var(--el-page-container-background-color);
    border: var(--el-page-container-border-width) solid var(--el-page-container-border-color);
    border-radius: var(--el-page-container-border-radius);
    height: 100%;
}
</style>