<template>
    <a-modal :visible="props.visible" :mask-closable="false" 
    width="1000px" 
    title="Chọn phân hệ làm việc" 
    cancelText="Hủy bỏ"
    okText="Đồng ý"
    size="small"
    @cancel="handleCancel"
    @ok="handleSave">

    </a-modal>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(['cancel'])
const props = defineProps({
    visible: Boolean
})

function handleCancel () {
    emit('cancel')
}

function handleSave () {
    emit('cancel')
}

</script>