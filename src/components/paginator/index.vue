<script setup lang="ts">
import { computed, defineEmits, defineModel, defineProps, PropType, ref } from 'vue'

const emit = defineEmits<{
    (e: 'change', p: any): void,
    (e: 'rowChange', p: any): void
}>()

const current = defineModel<number>('current', { default: 0 }) // trang đang xem
const rows = defineModel<number>('rows', { default: 20 }) // số dòng trong 1 trang

const props = defineProps({
    total: { type: Number, default: 0 },
    rowsOptions: { type: Array as PropType<number[]>, default: () => [20, 30, 50, 100] },
    range: { type: Number, default: 2 }
})

const pageCount = computed(() => {
    const pc = Math.ceil(props.total / rows.value)
    return pc
})

const itemRender = computed(() => {
    console.log(pageCount)
    if (pageCount.value > 0) {
        const pages: { key: number, label: number | string, selected: boolean }[] = []

        for (let index = 0; index < pageCount.value; index++) {
            if (index === current.value) {
                pages.push({ "key": index, "label": index + 1, "selected": true })
            }
            // else if (index === 0 && current.value -  props.range > 0) {
            //     pages.push({ "key": index, "label": index + 1, "selected": false })
            //     if (current.value - props.range > 1)
            //         pages.push({ "key": index, "label": "...", "selected": false })
            // }
            else if (index < current.value && index >= current.value - props.range) {
                pages.push({ "key": index, "label": index + 1, "selected": false })
            }
            else if (index > current.value && index <= current.value + props.range) {
                pages.push({ "key": index, "label": index + 1, "selected": false })
            }
            // else if (index === pageCount.value - 1 && current.value + props.range < pageCount.value) {
            //     if (current.value + props.range < pageCount.value - 2)
            //         pages.push({ "key": index, "label": "...", "selected": false })
            //     pages.push({ "key": index, "label": index + 1, "selected": false })
            // }
        }
        console.log(pages)
        return pages
    }
    else {
        return []
    }
})

function changePage(page: number) {
    if (page >= 0 && page <= pageCount.value) {
        current.value = page;

        console.log("current: " + current.value)
        const state = {
            current: current.value,
            pageCount: pageCount.value,
            pageSize: rows.value
        };
        emit('change', state)
    }
}


</script>

<template>
    <div class="d-paginator">
        <div class="d-paginator-content">
            <d-button class="d-paginator-first" @click="changePage(0)">
                <i class="bi bi-chevron-double-left"></i>
            </d-button>
            <d-button :disabled="current === 0" class="d-paginator-prev" @click="changePage(current - 1)">
                <i class="bi bi-chevron-left"></i>
            </d-button>

            <div v-for="(item, index) in itemRender" :key="index" class="d-paginator-page"
                @click="changePage(item.key)">
                <d-button :class="{ 'd-paginator-page-selected': item.selected }">{{ item.label }}
                </d-button>
            </div>

            <d-button :disabled="current === pageCount - 1" class="d-paginator-prev" @click="changePage(current + 1)">
                <i class="bi bi-chevron-right"></i>
            </d-button>
            <d-button class="d-paginator-last" @click="changePage(pageCount - 1)">
                <i class="bi bi-chevron-double-right"></i>
            </d-button>
        </div>

        <div class="d-paginator-options">
            <select v-model="rows">
                <option v-for="(item, index) in rowsOptions" :key="index" :value="item">{{ item }}</option>
            </select>
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