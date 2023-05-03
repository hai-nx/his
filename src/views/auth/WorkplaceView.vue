<template>
    <div class="container">
        <div class="mx-auto mt-5 col-md-6">
            <a-card title="Chọn đơn vị làm việc">
                <a-input-group class="mb-3" v-if="branchOptions.length > 1">
                    <label>Chi nhánh</label>
                    <a-select class="w-100" allow-clear show-search :options="branchOptions" v-model:value="branchValue"></a-select>
                </a-input-group>
                <a-input-group class="mb-3">
                    <label>Khoa</label>
                    <a-select class="w-100" allow-clear show-search :options="departmentOptions" v-model:value="departmentValue"></a-select>
                </a-input-group>
                <a-input-group class="mb-3">
                    <label>Phòng, buồng</label>
                    <a-select class="w-100" allow-clear show-search :options="roomOptions" v-model:value="roomValue"></a-select>
                </a-input-group>

                <div class="d-flex justify-content-end">
                    <a-button type="primary" @click="handleClick">Chọn</a-button>
                </div>
            </a-card>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAuth } from '@/stores/auth'

export default defineComponent({
    name: 'DashboardView',
    setup() {
        const store = useAuth();

        const branchOptions = ref([]);
        const branchValue = ref([]);
        const departmentOptions = ref([]);
        const departmentValue = ref([]);
        const roomOptions = ref([]);
        const roomValue = ref([]);

        const handleClick = () => {
            console.log('click');
        }

        return {
            store,
            branchOptions,
            departmentOptions,
            roomOptions,
            branchValue,
            departmentValue,
            roomValue,
            handleClick
        }
    }
})
</script>

<style></style>