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

<script>

import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'
import { branchService, departmentService, roomService } from '@/services'

export default defineComponent({
    setup() {
        const store = useAuth();
        const router = useRouter();
        const branchOptions = ref([])
        const branchValue = ref([])
        const departmentOptions = ref([])
        const departmentValue = ref([])
        const roomOptions = ref([])
        const roomValue = ref([])

        const handleClick = () => {
            let payload = {
                // departments: this.departmentValue.value,
                // rooms: this.roomValue.value
            }

            store.workplaceSettings(payload);
            router.push({ name: 'dashboard' });
        }

        return {
            branchOptions,
            branchValue,
            departmentOptions,
            departmentValue,
            roomOptions,
            roomValue,
            handleClick
        }
    },
    created() {
        branchService
            .getAll()
            .then(res => {
                this.branchOptions = res.result.map((item) => {
                    return {
                        value: item.id,
                        label: item.name
                    }
                })

                if (this.branchOptions.length > 0) {
                    this.branchValue = this.branchOptions[0].value
                }
            })  
        
        departmentService
            .getAll()
            .then(res => {
                this.departmentOptions = res.result.map((item) => {
                    return {
                        value: item.id,
                        label: item.name
                    }
                })
            })

        roomService
            .getAll()
            .then(res => {
                this.roomOptions = res.result.map((item) => {
                    return {
                        value: item.id,
                        label: item.name
                    }
                })
            })
    },
    // mounted() {
    //     branchService
    //         .getAll()
    //         .then(res => {
    //             this.branchOptions = res.result.map((item) => {
    //                 return {
    //                     value: item.id,
    //                     label: item.name
    //                 }
    //             })
    //         })
    // },
});
</script>

<style></style>