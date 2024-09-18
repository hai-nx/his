<script setup lang="ts">
import { computed, defineEmits, defineModel, defineProps, PropType, ref } from 'vue'

const emit = defineEmits<{
    (e: 'change', payload: any): void
}>()

const current = defineModel<number>('page', { default: 0 }) // trang đang xem
const pageSize = defineModel<number>('pageSize', { default: 20 }) // số dòng trong 1 trang

const props = defineProps({
    total: { type: Number, default: 0 },
    pageSizeOptions: { type: Array as PropType<number[]>, default: () => [20, 30, 50, 100] },
    range: { type: Number, default: 2 }
})

const pageCount = computed(() => {
    const pc = Math.ceil(props.total / pageSize.value)
    return pc
})
const isFirstPage = computed(() => current.value === 0)
const isLastPage = computed(() => current.value === pageCount.value - 1)


function changePage(page: number) {
    console.log(page)
    if (page >= 0 && page < pageCount.value) {
        current.value = page;

        console.log(current.value)
        const state = {
            current: current.value,
            pageCount: pageCount.value,
            pageSize: pageSize.value
        };
        emit('change', state)
    }
}


function visiblePage(page: number) {
    return page >= current.value - props.range && page <= current.value + props.range
}
</script>

<template>
    <div class="d-paginator">
        <div class="d-paginator-options">
            <select v-model="pageSize">
                <option v-for="(item, index) in pageSizeOptions" :key="index" :value="item">{{ item }}</option>
            </select>
        </div>
        <div class="d-paginator-content">
            <div class="d-paginator-first" @click="changePage(0)">
                first
            </div>
            <div class="d-paginator-prev" @click="changePage(current - 1)">
                prev
            </div>

            <div v-for="(item, index) in pageCount" :key="index" class="d-paginator-page" :class="{ 'd-paginator-page-selected' : item === current}" @click="changePage(item)">
                <div v-if="visiblePage(item)">{{ item }}</div>
            </div>

            <div class="d-paginator-prev" @click="changePage(current + 1)">
                next
            </div>
            <div class="d-paginator-last" @click="changePage(pageCount - 1)">
                last
            </div>
        </div>
    </div>
</template>

<style>
.d-paginator {
    display: inline-flex;
    justify-content: space-between;
}

.d-paginator-content {
    display: inline-flex;
    gap: 6px;
}

.d-paginator-page-selected {
    background-color: rebeccapurple;
}
</style>