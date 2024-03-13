<template>
    <div class="x-layout">
        <div class="x-layout-top">
            <slot name="top">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <template v-for="(route, index) in breadcrumbs" :key="index">
                                <template v-if="index + 1 === breadcrumbLength">
                                    <li class="breadcrumb-item" :class="route.path ? 'active' : ''" aria-current="page">{{
                                        route.label }}</li>
                                </template>
                                <template v-else>
                                    <li class="breadcrumb-item"><router-link class="breadcrumb-item-link"
                                            :to="{ name: route.path }">{{ route.label }}</router-link></li>
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

        <div class="border shadow rounded x-layout-content">
            <div class="border-bottom x-layout-content-start" v-if="showHeader">
                <slot name="header" v-if="showTitle">
                    <div class="d-flex justify-content-between align-items-center">
                        <slot name="extra">
                            <div class="d-flex align-items-center">
                                <i class="bi bi-file-earmark-text h5 mb-0 me-1 text-primary"></i>
                                <h5 class="mb-0">{{ title }}</h5>
                            </div>
                        </slot>
                        <div class="x-layout-header-action">
                            <slot name="action"></slot>
                        </div>
                    </div>
                </slot>
				
				<slot name="header" v-if="!showTitle">
                    <div class="x-layout-header-action">
                            <slot name="action"></slot>
                    </div>
                </slot>
            </div>

            <div>
                <slot></slot>
            </div>

            <div class="border-top x-layout-content-end">
                <slot name="footer"></slot>
            </div>
        </div>

        <div class="x-layout-bottom">
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
        },
		showTitle: {
            type: Boolean,
            default: true,
        },
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
    /* display: flex;
    flex-flow: column; */
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    min-height: 100%;
}

.x-layout-content {
    background-color: #fff;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
}

.x-layout-content-start {
    padding: .5rem;
}

.x-layout-content-end {
    padding: .5rem;
}

.x-layout-content-end:empty {
    display: none;
}

.breadcrumb-item-link {
    text-decoration: none;
    color: var(--bs-breadcrumb-item-active-color);
}

.breadcrumb-item-link:hover {
    color: var(--bs-primary);
}
</style>