<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { TreeNode } from '../treenode';

const props = defineProps({
    items: {
        type: Array as PropType<TreeNode[]>
    },
    tabindex: { type: Number },
})

</script>

<template>
    <div>

    </div>
</template>