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
                        <button class="btn btn-sm py-0 text-primary">
                            <i class="bi bi-question-circle-fill h6"></i>
                        </button>
                        <button class="btn btn-sm py-0 text-primary">
                            <i class="bi bi-chat-left-dots h6"></i>
                        </button>
                    </div>
                </div>
            </slot>
        </div>
        <div class="x-layout-content border shadow rounded">
            <div class="p-2 border-bottom">
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
            <slot></slot>
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
}

.breadcrumb-item-link {
    text-decoration: none;
    color: var(--bs-breadcrumb-item-active-color);
}
.breadcrumb-item-link:hover {
    color: var(--bs-primary);
}
</style>