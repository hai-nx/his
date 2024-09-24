<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem';

const props = defineProps({
    breadcrumb: {
        type: Array as PropType<MenuItem[]>
    },
    extra: {
        type: Array as PropType<MenuItem[]>
    },
    title: { type: String },
    fluid: {
        type: Boolean, default: true
    },
})

const cls = computed(() => {
    return {
        'el-page-header-fluid': props.fluid
    }
})

function onQuestionClick() {
    console.log('question!')
}

function onFeedbackClick() {
    console.log('feedback!')
}

</script>

<template>
    <div class="el-page-header" :class="cls">
        <div class="el-page-header-topbar">
            <div class="el-page-header-breadcrumb">
                <d-breadcrumb :items="breadcrumb"></d-breadcrumb>
            </div>
            <div class="el-page-header-extra">
                <ul>
                    <li v-for="(item, index) in extra" :key="index">
                        <i :class="item.icon"></i>
                    </li>
                </ul>
            </div>
        </div>

        <div class="el-page-header-main">
            <slot name="start">
                <div class="el-page-header-start">
                    <div class="el-page-header-title">
                        <label>{{ title }}</label>
                    </div>
                    <div class="el-page-header-actions">
                        <slot name="action"></slot>
                    </div>
                </div>
            </slot>

            <div class="el-page-header-center">
                <slot></slot>
            </div>

            <div class="el-page-header-end">
                <slot name="end"></slot>
            </div>
        </div>
    </div>
</template>

<style>
.el-page-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: .5rem;
    height: 100%;
}

/* topbar */
.el-page-header-topbar {
    display: flex;
    flex-direction: row;
    gap: 6px;
}

/* main */
.el-page-header-main {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: var(--d-button-background-color);
    border: var(--d-button-border-width) solid var(--d-button-border-color);
    border-radius: var(--d-button-border-radius);
}

.el-page-header-start {
    display: flex;
}

.el-page-header-center {
    flex: 1;
}

.el-page-header-end {
    display: flex;
}

</style>