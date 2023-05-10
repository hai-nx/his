<template>
    <form>
        <a-modal :visible="show" :title="title" @cancel="handleCancel" :mask-closable="false">
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Mã khoa</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.code" :disabled="loading" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Tên khoa (BYT)</span>
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
                        <span>Tên khoa</span>
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
                        <span>Chi nhánh</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-select v-model:value="item.branchId" :options="branchs" :disabled="loading" class="w-100" />
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
import { Modal } from "ant-design-vue";
import { DepartmentModel } from '@/models'
import { branchService, departmentService } from '@/services'

export default defineComponent({
    name: 'DepartmentDetailView',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object as PropType<DepartmentModel>
        }
    },
    setup(props, { emit }) {
        const loading = ref<boolean>(false);
        const title = ref<string>('Thêm mới chi nhánh');
        const item = ref<DepartmentModel>({
            id: undefined,
            code: "",
            name: "",
            mohCode: "",
            branchId: "",
            inactive: false
        });
        const branchs = ref<{ value: string, label: string }[]>([]);

        let result = false;

        const handleSave = () => {
            loading.value = true;
            departmentService.createOrEdit(item.value)
                .then(res => {
                    if (res) {
                        result = true;
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
            result = true;

            departmentService.createOrEdit(item.value)
                .then(res => {
                    if (res) {
                        result = true;
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

            reset();
        }

        const handleCancel = () => {
            toggle();
        }

        const reset = () => {
            item.value = {
                id: undefined,
                code: "",
                mohCode: "",
                name: "",
                branchId: "",
                branchCode: "",
                branchName: "",
                description: "",
                inactive: false
            }
        }

        const toggle = () => {
            emit("toggle", result);
        }

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                reset();
                loading.value = true;
                result = false;

                if (props.data !== null && props.data?.id !== undefined) {
                    let data = props.data!;
                    departmentService.getById(data.id!)
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
                branchService.getAll()
                    .then(res => {
                        branchs.value = res.data.result.map((x) => ({ value: x.id!, label: x.name }));
                    })
                    .catch(() => {
                        branchs.value = [];
                    })
                    .finally(() => {
                        if (branchs.value.length === 1) {
                            item.value.branchId = branchs.value[0].value;
                        }
                    });
            }
        });

        return {
            title,
            item,
            show,
            loading,
            branchs,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        }
    }
})
</script>