<script setup lang="ts">
import { ref, defineEmits, defineModel, defineProps, PropType } from 'vue'
import { BranchModel } from '@/models'

const emit = defineEmits<{
    (e: "close", args: any): void;
}>()

const visible = defineModel({ type: Boolean})
const props = defineProps({
    // visible: { type: Boolean },
    item: { type: Object as PropType<BranchModel> }
})

const result = false


function close() {
    const args = Object.assign({}, result, props.item)
    emit("close", args);
}

</script>

<template>
    <d-modal v-model:visible="visible" :width="1000" closable>
        ahsodhasodhoashdjashdk

        <template #footer>
            <d-button>hihiihihih</d-button>
        </template>
    </d-modal>
</template>