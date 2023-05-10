<template>
    <form>
        <a-modal :visible="show" :title="title" @cancel="handleCancel" :mask-closable="false">
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Mã phòng</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.code" :disabled="loading" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Mã phòng (BYT)</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.mohCode" :disabled="loading" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Tên phòng</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.name" :disabled="loading" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Loại phòng</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-select v-model:value="item.roomTypeId" :options="types" :disabled="loading" class="w-100" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Khoa</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-select v-model:value="item.departmentId" :options="departments" :disabled="loading" class="w-100" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Mô tả</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-textarea v-model:value="item.description" :disabled="loading" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-8 offset-md-4">
                    <a-checkbox v-model:checked="item.inactive" :disabled="loading">Ngừng theo dõi</a-checkbox>
                </div>
            </div>


            <template #footer>
                <a-button key="submit" type="primary" :loading="loading" @click.prevent="handleSave">Lưu</a-button>
                <a-button type="primary" :loading="loading" @click.prevent="handleSaveAndAddNew">Lưu và Thêm mới</a-button>
                <a-button @click="handleCancel">Bỏ qua</a-button>
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType } from 'vue'
import { Modal, SelectProps } from "ant-design-vue";
import { RoomModel } from '@/models'
import { departmentService, roomService } from '@/services';

export default defineComponent({
    name: 'DepartmentDetailView',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object as PropType<RoomModel>
        }
    },
    setup(props, { emit }) {
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const title = ref<string>('Thêm mới chi nhánh');
        const item = ref<RoomModel>({
            id: undefined,
            code: "",
            name: "",
            roomTypeId: 1,
            departmentId: "",
            inactive: false
        });
        const departments = ref<{ value: string, label: string }[]>([]);
        const types = ref<SelectProps['options']>([
            { value: 1, label: 'Hành chính, đón tiếp' },
            { value: 2, label: 'Khám bệnh' },
            { value: 3, label: 'Điều trị nội trú' },
            { value: 4, label: 'Điều trị ngoại trú' },
            { value: 5, label: 'Tài chính kế toán' },
            { value: 6, label: 'Giám định BHYT' },
            { value: 7, label: 'Xét nghiệm' },
            { value: 8, label: 'Chuẩn đoán hình ảnh' },
            { value: 9, label: 'Khác' },
        ]);

        const handleSave = () => {
            loading.value = true;
            roomService.createOrEdit(item.value)
                .then(res => {
                    if (res) {
                        result.value = true;
                        toggle();
                    } else {
                        Modal.error({ content: res, okText: "Đồng ý" });
                    }
                })
                .catch(error => {
                    Modal.error({ content: error.message, okText: "Đồng ý" });
                })
                .finally(() => {
                    loading.value = false;
                });
        }

        const handleSaveAndAddNew = () => {
            loading.value = true;
            result.value = true;

            reset();
        }

        const handleCancel = () => {
            toggle();
        }

        const reset = () => {
            item.value = {
                id: undefined,
                code: "",
                name: "",
                roomTypeId: 1,
                departmentId: "",
                description: "",
                inactive: false
            }
        }

        const toggle = () => {
            emit("toggle", result.value);
        }

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                reset();
                loading.value = true;
                result.value = false;

                if (props.data !== null && props.data?.id !== undefined) {
                    let data = props.data!;
                    roomService.getById(data.id!)
                        .then(res => {
                            item.value = res.data.result;
                            title.value = "Sửa chi nhánh";
                            loading.value = false;
                        })
                        .catch(error => {
                            Modal.error({ content: error.message, okText: 'Đồng ý' });
                            toggle();
                        });
                }
                else {
                    loading.value = false;
                }
            }

            // lấy dữ liệu
            if (value) {
                departmentService.getAll()
                    .then(res => {
                        departments.value = res.data.result.map((x) => ({ value: x.id!, label: x.name }));
                    })
                    .catch(() => {
                        departments.value = [];
                    })
                    .finally(() => {
                        if (departments.value.length === 1) {
                            item.value.departmentId = departments.value[0].value;
                        }
                    });
            }
        });

        return {
            title,
            item,
            show,
            loading,
            result,
            departments,
            types,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        }
    }
})
</script>