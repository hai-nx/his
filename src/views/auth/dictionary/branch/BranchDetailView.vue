<template>
    <form>
        <a-modal :visible="show" :title="title" @cancel="handleCancel" :mask-closable="false">
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Mã chi nhánh</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.code" :disabled="loading" :class="{
                        'input-danger': errors.code,
                    }" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Tên chi nhánh</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.name" :disabled="loading" :class="{
                        'input-danger': errors.name,
                    }" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Mã KCBBĐ</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.mediOrgCode" :disabled="loading" :class="{
                        'input-danger': errors.mediOrgCode,
                    }" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Mã KCBBĐ đúng tuyến</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.mediOrgAcceptCode" :disabled="loading" :class="{
                        'input-danger': errors.mediOrgAcceptCode,
                    }" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Địa chỉ</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.address" :disabled="loading" />
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
import { BranchModel } from "@/models";
import { branchService } from "@/services";

export default defineComponent({
    name: "BranchDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<BranchModel>,
        },
    },
    setup(props, { emit }) {
        const title = ref<string>("Thêm mới chi nhánh");
        const item = ref<BranchModel>({
            id: null,
            code: "",
            name: "",
            address: "",
            description: "",
            inactive: false,
        });
        const errors = ref(
            {
                code: "",
                name: "",
                mediOrgCode: "",
                mediOrgAcceptCode: ""
            });
        const loading = ref<boolean>(false);

        let result = false;

        const handleSave = function () {
            loading.value = true;
            branchService
                .createOrEdit(item.value)
                .then((res) => {
                    if (res.data.isSucceeded) {
                        result = true;
                        toggle();
                    } else {
                        Modal.error({ content: res.data.message, okText: "Đồng ý" });
                    }
                })
                .catch((error) => {
                    Modal.error({ content: error.message, okText: "Đồng ý" });
                    //errors.value = error.response.data.errors;
                })
                .finally(() => {
                    loading.value = false;
                });
        };

        const handleSaveAndAddNew = function () {
            loading.value = true;
            result = true;

            branchService
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
                    //errors.value = error.response.data.errors;
                })
                .finally(() => {
                    loading.value = false;
                });

            reset();
        };

        const handleCancel = function () {
            toggle();
        };

        const reset = function () {
            item.value = {
                id: null,
                code: "",
                name: "",
                address: "",
                description: "",
                inactive: false,
            };
        };

        const toggle = function () {
            emit("toggle", result);
        };

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                result = false;
                loading.value = true;

                reset();

                if (props.data !== null && props.data?.id !== undefined) {
                    let data = props.data!;
                    branchService
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
        });

        return {
            title,
            item,
            errors,
            show,
            loading,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>