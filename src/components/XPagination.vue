<template>
    <div class="d-flex align-items-center">
        <a-select
            :value="pageSizeA"
            style="width: 100px"
            :options="options"
            @change="onPageSizeSelectChange">
        </a-select>

        <div class="ms-4">
            Kết quả: {0} - {1} / {{ total }} dòng
        </div>

        <a-pagination
            class="ms-auto"
            :total="props.total"
            :current="props.current"
            :page-size="props.pageSize"
            show-less-items
            :show-size-changer="false"
            @change="onCurrentChange">
        </a-pagination>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";
import { SelectProps } from "ant-design-vue";

const emit = defineEmits(['change', 'pageSizeChange']);

var props = defineProps({
    total: Number,
    current: Number,
    pageSize: Number
});

const options = ref<SelectProps['options']>([
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
])

const pageSizeA = computed(() => props.pageSize)

function onCurrentChange(value: any){
    emit('change', value)
}

function onPageSizeSelectChange(value: number) {
    emit('pageSizeChange', value)
}

</script>