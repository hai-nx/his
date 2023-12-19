<template>
    <a-modal :visible="visible" :mask-closable="false" 
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
    visible: {
        type: Boolean,
        required: true
    }
})

function handleCancel () {
    emit('cancel')
}

function handleSave () {
    console.log('sdasdasd')

    emit('cancel')
}

</script>


<!-- <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SubsystemOptionView',
    props: {
        visible: {
            type: Boolean,
            required: true,
        }
    },
    emits: ['cancel'],
    setup(props, {emit}) {
        

        const handleCancel = () => {
            emit('cancel');
        }

        const handleSave = () => {
            console.log('save')

            emit('cancel')
        }

        return {
            handleCancel,
            handleSave
        }
    },
})
</script> -->