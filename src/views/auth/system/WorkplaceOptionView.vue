<template>
    <a-modal :visible="true" :mask-closable="false" width="1000px" title="Chọn đơn vị làm việc" @cancel="handleCancel">
        <div class="row mb-3">
            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>
                            <span>Chi nhánh</span>
                        </label>
                    </div>
                    <div class="col-12 col-md-9">
                        <a-select v-model:value="branchValue" :options="branchs" :field-names="fields"
                            :disabled="disableBranch" @change="handleBranchSelectChange" class="w-100">
                            <template #option="{ code, name }">
                                <div class="row">
                                    <span class="col-3">{{ code }}</span>
                                    <span class="col-9">{{ name }}</span>
                                </div>
                            </template>
                        </a-select>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="row">
                    <div class="col-12 col-md-3 text-start text-md-end">
                        <label>
                            <span>Khoa</span>
                        </label>
                    </div>
                    <div class="col-12 col-md-9">
                        <a-select v-model:value="departmentValue" :options="departments" :field-names="fields"
                            :disabled="disableDepartment" @change="handleDepartmentSelectChange" class="w-100">
                            <template #option="{ code, name }">
                                <div class="row">
                                    <span class="col-3">{{ code }}</span>
                                    <span class="col-9">{{ name }}</span>
                                </div>
                            </template>
                        </a-select>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <a-table 
                :columns="columns" 
                :data-source="rooms" 
                :scroll="{ x: 0, y: 500 }" 
                :pagination="false"
                :row-selection="{ selectedRowKeys: roomSelectedRowKeys, onChange: handleRoomSelectChange }" 
                row-key="id"
                class="ant-table-striped" 
                size="small" 
                bordered>
            </a-table>
        </div>

        <template #footer>
            <a-button key="submit" type="primary" :loading="loading" @click.prevent="handleSave">Lưu</a-button>
            <a-button :loading="loading" @click="handleCancel">Bỏ qua</a-button>
        </template>
    </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from 'vue'
import { useAuth } from '@/stores/auth'
import router from '@/router'
import { branchService, departmentService, roomService } from '@/services'
import { BranchModel, DepartmentModel, RoomModel } from '@/models'

export default defineComponent({
    name: 'WorkplaceOptionView',
    setup() {
        const store = useAuth();

        const state = reactive({
            loading: false,
            fields: { value: 'id', label: 'name', icon: 'code' },
            columns: [
                { key: 'roomTypeName', title: 'Loại phòng', dataIndex: 'roomTypeName' },
                { key: 'code', title: 'Mã phòng', dataIndex: 'code', width: '20%' },
                { key: 'name', title: 'Tên phòng', dataIndex: 'name', width: '50%' },
            ]
        });

        const branchValue = ref<string>();
        const departmentValue = ref<string>();
        const roomSelectedRowKeys = ref<string[]>();

        const branchs = ref<BranchModel[]>([]);
        const departments = ref<DepartmentModel[]>([]);
        const rooms = ref<RoomModel[]>([])

        const disableBranch = computed(() => state.loading || branchs.value.length < 2);
        const disableDepartment = computed(() => state.loading || departments.value.length < 2);

        const handleLoad = async () => {
            await branchService.getAll()
                .then(response => {
                    branchs.value = response.data.result.filter(x => !x.inactive);
                });

            if (branchs.value.length > 0) {
                let branch = branchs.value.find(x => x.id === store.workplace.branch);
                branchValue.value = branch !== undefined ? branch.id : branchs.value[0].id;

                await departmentService.getAll()
                    .then(response => {
                        departments.value = response.data.result.filter(x => !x.inactive && x.branchId === branchValue.value);
                    });

                if (departments.value.length > 0) {
                    let department = departments.value.find(x => x.id === store.workplace.department);
                    departmentValue.value = department !== undefined ? department.id : departments.value[0].id;

                    await roomService.getAll()
                        .then(response => {
                            rooms.value = response.data.result.filter(x => !x.inactive && x.departmentId === departmentValue.value);
                            let selectRowKeys = [] as string[];
                            for (var i = 0; i < rooms.value.length; i++) {
                                let room = store.workplace.rooms.find(f => f === rooms.value[i].id);
                                if (room !== undefined) {
                                    selectRowKeys.push(room);
                                }
                            }

                            roomSelectedRowKeys.value = selectRowKeys;
                        });
                }
            }
        }

        const handleCancel = () => {
            router.push({ name: 'dashboard' });
        }

        const handleSave = () => {
            // xử lý lưu cấu hình
            state.loading = true;
            store.updateWorkplate(branchValue.value!, departmentValue.value!, roomSelectedRowKeys.value!);

            router.push({ name: 'dashboard' });
        }

        const handleBranchSelectChange = (value: string) => {
            roomSelectedRowKeys.value = [];
            console.log('select')
            departmentService.getAll()
                .then(response => {
                    departments.value = response.data.result.filter(x => !x.inactive && x.branchId === value);

                    if (departments.value.length === 0) {
                        departmentValue.value = undefined;
                        rooms.value = [];
                    } else {
                        departmentValue.value = departments.value[0].id;

                        handleDepartmentSelectChange(departmentValue.value!);
                    }
                });
        }

        const handleDepartmentSelectChange = (value: string) => {
            roomService.getAll()
                .then(response => {
                    if (value === undefined) {
                        rooms.value = response.data.result;
                    } else {
                        rooms.value = response.data.result.filter(x => x.departmentId === value);
                    }
                });
        }

        const handleRoomSelectChange = (selectedRowKeys: string[]) => {
            roomSelectedRowKeys.value = selectedRowKeys;
        };

        return {
            store,
            ...state,

            branchs,
            departments,
            rooms,

            disableBranch,
            disableDepartment,

            branchValue,
            departmentValue,
            roomSelectedRowKeys,

            handleLoad,
            handleCancel,
            handleSave,
            handleBranchSelectChange,
            handleDepartmentSelectChange,
            handleRoomSelectChange
        }
    },
    mounted() {
        this.handleLoad();
    },
})
</script>

<style></style>