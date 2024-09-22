<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem';

const props = defineProps({
    fluid: {
        type: Boolean, default: true
    },
    breadcrumb: {
        type: Array as PropType<MenuItem[]>
    },
    title: { type: String }

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
            <slot name="breadcrumb">
                <div class="el-page-header-breadcrumb">
                    <d-breadcrumb :items="breadcrumb"></d-breadcrumb>
                </div>
            </slot>

            <slot name="extra">
                <div class="el-page-header-extra">
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
            </slot>

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
.el-page-header-fluid {
    display: flex;
}



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