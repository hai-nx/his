<template>
    <div class="x-layout">
        <div>
            <slot name="top">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <template v-for="(route, index) in routes" :key="index">
                                <template v-if="index + 1 === routes?.length">
                                    <li class="breadcrumb-item active" aria-current="page">{{ route.label  }}</li>
                                </template>
                                <template v-else>
                                    <li class="breadcrumb-item"><router-link :to="{ name: route.path }">{{ route.label }}</router-link></li>
                                </template>
                            </template>
                        </ol>
                    </nav>
                    <div>
                        <button class="btn btn-sm text-primary">
                            <i class="bi bi-question-circle-fill h6"></i>
                        </button>
                        <button class="btn btn-sm text-primary">
                            <i class="bi bi-chat-left-dots h6"></i>
                        </button>
                    </div>
                </div>
            </slot>
        </div>
        <div class="x-layout-content border shadow-sm rounded">
            <div class="p-2 border-bottom">
                <slot name="header">
                    <div class="d-flex justify-content-between align-items-center">
                        <slot name="title">
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
import { PropType, defineComponent } from "vue"
import { XItemType } from "@/components/data"

export default defineComponent({
    name: 'XLayout',
    props: {
        title: {
            type: String
        },
        routes: {
            type: Object as PropType<Array<XItemType>>
        }
    },
    setup() {
        return {

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
    align-items: stretch;
    min-height: 500px;
}
</style>