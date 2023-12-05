<template>
    <div class="x-layout">
        <div>
            <slot name="top">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <template v-for="(route, index) in breadcrumbs" :key="index">
                                <template v-if="index + 1 === breadcrumbLength">
                                    <li class="breadcrumb-item" :class="route.path ? 'active' : ''" aria-current="page">{{ route.label }}</li>
                                </template>
                                <template v-else>
                                    <li class="breadcrumb-item"><router-link class="breadcrumb-item-link" :to="{ name: route.path }">{{ route.label }}</router-link></li>
                                </template>
                            </template>
                        </ol>
                    </nav>
                    <div>
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
        </div>
        <div class="x-layout-content border shadow rounded">
            <div class="p-2 border-bottom" v-if="showHeader">
                <slot name="header">
                    <div class="d-flex justify-content-between align-items-center">
                        <slot name="extra">
                            <h5 class="mb-0">{{ title }}</h5>
                        </slot>
                        <div>
                            <slot name="action"></slot>
                        </div>
                    </div>
                </slot>
            </div>
            
            <div class="p-2">
                <slot></slot>
            </div>

            <div class="p-2 border-top" v-if="showFooter">
                <slot name="footer"></slot>
            </div>
        </div>

        <div>
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from "vue"
import { XItemType } from "@/components"

export default defineComponent({
    name: 'XLayout',
    props: {
        title: {
            type: String
        },
        breadcrumbs: {
            type: Object as PropType<Array<XItemType>>
        },
        showHeader: {
            type: Boolean,
            default: false
        },
        showFooter: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const breadcrumbLength = computed(() => props.breadcrumbs?.length)

        return {
            breadcrumbLength
        }
    }
});
</script>

<style scoped>
.x-layout {
    display: flex;
    flex-direction: column;
}

.x-layout-content {
    background-color: #fff;
    /* align-items: stretch; */
    min-height: 500px;

    display: grid;
    grid-template-rows: max-content 1fr max-content;
    /* flex-direction: column; */
    /* justify-content: space-between; */
    /* align-items: stretch; */
}

.breadcrumb-item-link {
    text-decoration: none;
    color: var(--bs-breadcrumb-item-active-color);
}
.breadcrumb-item-link:hover {
    color: var(--bs-primary);
}
</style>