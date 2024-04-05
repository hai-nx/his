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
                        <span>Mã khoa (BYT)</span>
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
                        <span>Loại khoa</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-select v-model:value="item.departmentTypeId" :options="departmentTypes" :field-names="fields"
                        :disabled="loading" class="w-100">
                        <template #option="{ code, name }">
                            <div class="row">
                                <span class="col-3">{{ code }}</span>
                                <span class="col-9">{{ name }}</span>
                            </div>
                        </template>
                    </a-select>
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
                    <a-select v-model:value="item.branchId" :options="branchs" :field-names="fields" :disabled="loading"
                        class="w-100">
                        <template #option="{ code, name }">
                            <div class="row">
                                <span class="col-3">{{ code }}</span>
                                <span class="col-9">{{ name }}</span>
                            </div>
                        </template>
                    </a-select>
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Số thứ tự</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input-number v-model:value="item.sortOrder" :disabled="loading" class="w-100" />
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
                <a-button type="primary" :loading="loading" @click.prevent="handleSaveAndAddNew">Lưu và Thêm
                    mới</a-button>
                <a-button @click="handleCancel">Bỏ qua</a-button>
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType } from "vue";
import { Modal } from "ant-design-vue";
import { BranchModel, DepartmentModel, DepartmentTypeModel } from "@/models";
import {
    branchService,
    departmentService,
    departmentTypeService,
} from "@/services";

export default defineComponent({
    name: "DepartmentDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<DepartmentModel>,
        },
    },
    setup(props, { emit }) {
        const loading = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });

        const title = ref<string>("Thêm mới chi nhánh");
        const item = ref<DepartmentModel>({
            id: null,
            code: "",
            name: "",
            mohCode: "",
            departmentTypeId: 0,
            branchId: "",
            inactive: false,
        });

        const departmentTypes = ref<DepartmentTypeModel[]>([]);
        const branchs = ref<BranchModel[]>([]);

        let result = false;

        const handleSave = () => {
            loading.value = true;
            departmentService
                .createOrEdit(item.value)
                .then((res) => {
                    if (res.data.isSucceeded) {
                        result = true;
                        toggle();
                    } else {
                        Modal.error({
                            content: res.data.message,
                            okText: "Đồng ý",
                        });
                    }
                })
                .catch((error) => {
                    Modal.error({ content: error.message, okText: "Đồng ý" });
                })
                .finally(() => {
                    loading.value = false;
                });
        };

        const handleSaveAndAddNew = () => {
            loading.value = true;
            result = true;

            departmentService
                .createOrEdit(item.value)
                .then((res) => {
                    if (res) {
                        result = true;
                    } else {
                        Modal.error({ content: res, okText: "Đồng ý" });
                    }
                })
                .catch((error) => {
                    Modal.error({ content: error.message, okText: "Đồng ý" });
                })
                .finally(() => {
                    loading.value = false;
                });

            reset();
        };

        const handleCancel = () => {
            toggle();
        };

        const reset = () => {
            item.value = {
                id: null,
                code: "",
                mohCode: "",
                name: "",
                departmentTypeId: 0,
                branchId: "",
                description: "",
                inactive: false,
            };
        };

        const toggle = () => {
            emit("toggle", result);
        };

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                reset();
                loading.value = true;
                result = false;

                if (props.data !== null && props.data?.id !== undefined) {
                    let data = props.data!;
                    departmentService
                        .getById(data.id!)
                        .then((res) => {
                            item.value = res.data.result;
                            title.value = "Sửa chi nhánh";
                            loading.value = false;
                        })
                        .catch((error) => {
                            Modal.error({
                                content: error.message,
                                okText: "Đồng ý",
                            });
                            toggle();
                        });
                } else {
                    loading.value = false;
                }
            }

            // lấy dữ liệu
            if (value) {
                departmentTypeService.getAll().then((response) => {
                    departmentTypes.value = response.data.result.filter(
                        (x) => !x.inactive
                    );
                    if (departmentTypes.value.length > 0) {
                        item.value.departmentTypeId =
                            departmentTypes.value[0].id != undefined &&
                                departmentTypes.value[0].id != ""
                                ? parseInt(departmentTypes.value[0].id)
                                : 0;
                    }
                });

                branchService.getAll().then((response) => {
                    branchs.value = response.data.result.filter(
                        (x) => !x.inactive
                    );
                    if (branchs.value.length > 0) {
                        item.value.branchId = branchs.value[0].id!;
                    }
                });
            }
        });

        return {
            title,
            item,
            show,
            loading,
            fields,
            departmentTypes,
            branchs,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>