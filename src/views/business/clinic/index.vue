<script setup lang="ts">
import { ref } from 'vue'
import { ReceptionModel } from '@/models';
import { DxDataGrid } from 'devextreme-vue';

const items = ref<ReceptionModel[]>()

</script>

<template>
    <div>
        <DxDataGrid>
            
        </DxDataGrid>
    </div>
</template>