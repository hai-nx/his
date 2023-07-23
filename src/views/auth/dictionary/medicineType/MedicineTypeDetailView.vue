<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            :mask-closable="false"
            width="1000px"
        >
            <div class="container">
                <a-tabs
                    class="medicine-card-body"
                    v-model:activeKey="activeKey"
                    type="card"
                >
                    <a-tab-pane key="1" tab="Thông tin chung">
                        <div class="container">
                            <div class="container-general">
                                <label class="grid-column-1">
                                    <span>Mã thuốc</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">
                                    <span>Tên thuốc</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-columnspan-4-7"
                                    v-model:value="item.name"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">
                                    <span>Mã BHYT</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">
                                    <span>Nhóm BHYT</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-5">
                                    <span>Nhóm thuốc</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">
                                    <span>Đơn vị tính</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">
                                    <span>Đường dùng</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-5">Hoạt chất</label>
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Hàm lượng</label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">Nồng độ</label>
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-5">Đóng gói</label>
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Hướng dẫn</label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3"
                                    >Hãng sản xuất</label
                                >
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-5"
                                    >Nước sản xuất</label
                                >
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Giá nhập</label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-3">VAT nhập(%)</label>
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <label class="grid-column-5"
                                    >Thuế nhập(%)</label
                                >
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Ghi chú</label>
                                <a-input
                                    class="grid-column-columnspan-2-7"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Số thứ tự</label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                                <a-checkbox class="grid-column-6"
                                    >Ngưng sử dụng</a-checkbox
                                >
                            </div>

                            <div class="container-general-other mt-4">
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 1</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 2</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 3</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 4</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 5</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 6</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 7</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 8</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 9</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 10</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 11</a-checkbox>
                                </div>
                                <div class="checkbox-wrapper">
                                    <a-checkbox>Nghiệp vụ 12</a-checkbox>
                                </div>
                            </div>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Thông tin bổ sung">
                        <div class="container">
                            <div class="container-extent">
                                <label class="grid-column-1"
                                    >Dạng bào chế:</label
                                >
                                <a-select
                                    class="grid-column-2"
                                    :options="optionPharmaceuticalFormulations"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">Nguồn gốc:</label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1"
                                    >Tên khoa học vị thuốc:</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1"
                                    >Tên KH của cây con, khoáng vật:</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1"
                                    >Tình trạng dược liệu:</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1"
                                    >Yêu cầu sử dụng dược liệu:</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1"
                                    >Bộ phận dược liệu sử dụng:</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1"
                                    >Tỷ lệ hao hụt chế biến (%):</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1"
                                    >Chi phí khác:</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">
                                    Phương pháp chế biến:</label
                                >
                                <a-select
                                    class="grid-column-2"
                                    :options="preparationMethod"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />

                                <label class="grid-column-1">
                                    Tiêu chuẩn chất lượng:</label
                                >
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="item.code"
                                    :disabled="loading"
                                />
                            </div>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>

            <template #footer>
                <a-button
                    class="btn-save"
                    key="submit"
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSave"
                    >Lưu</a-button
                >
                <a-button
                    class="btn-save-new"
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSaveAndAddNew"
                    >Lưu và Thêm mới</a-button
                >
                <a-button @click="handleCancel" class="btn-cancel"
                    >Bỏ qua</a-button
                >
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType, reactive } from "vue";
import { Modal } from "ant-design-vue";
import { MedicineTypeModel } from "@/models";
import { medicineTypeService } from "@/services";

export default defineComponent({
    name: "MedicineGroupDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<MedicineTypeModel>,
        },
    },
    setup(props, { emit }) {
        const title = ref<string>("Thêm mới nhóm thuốc");
        const item = ref<MedicineTypeModel>({
            id: undefined,
            code: "",
            name: "",
            sortOrder: undefined,
            inactive: false,
        });
        const errors = ref({ code: "", name: "" });
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const activeKey = ref<string>("1");

        // Dạng bào chế
        const optionPharmaceuticalFormulations = reactive<
            { value: string; label: string }[]
        >([
            { value: "", label: "-- Chọn --" },
            { value: "Dạng cao", label: "Dạng cao" },
            { value: "Hoàn cứng", label: "Hoàn cứng" },
            { value: "Hoàn mềm", label: "Hoàn mềm" },
            { value: "Bột thuốc", label: "Bột thuốc" },
            { value: "Trà thuốc", label: "Trà thuốc" },
            { value: "Rượu thuốc", label: "Rượu thuốc" },
            { value: "Cồn thuốc", label: "Cồn thuốc" },
            { value: "Viên nén", label: "Viên nén" },
            { value: "Bột hòa tan", label: "Bột hòa tan" },
            { value: "Cốm hòa tan", label: "Cốm hòa tan" },
            { value: "Hoàn nhỏ giọt", label: "Hoàn nhỏ giọt" },
            { value: "Siro", label: "Siro" },
            { value: "Viên nang cứng", label: "Viên nang cứng" },
            { value: "Viên nang mềm", label: "Viên nang mềm" },
            { value: "Thuốc phun sương mù", label: "Thuốc phun sương mù" },
            { value: "Dung dịch", label: "Dung dịch" },
            { value: "Viên", label: "Viên" },
            { value: "Viên nén bao phim", label: "Viên nén bao phim" },
            { value: "Khác", label: "Khác" },
        ]);

        // Phương pháp chế biến
        const preparationMethod = reactive<{ value: string; label: string }[]>([
            { value: "", label: "-- Chọn --" },
            { value: "Sơ chế", label: "Sơ chế" },
            { value: "Phức chế", label: "Phức chế" },
            { value: "Khác", label: "Khác" },
        ]);

        // const inItData = function () {};

        const handleSave = async function () {
            loading.value = true;
            let resultSave = await medicineTypeService.createOrEdit(item.value);
            if (resultSave.data.isSuccessed) {
                result.value = true;
                toggle();
            } else {
                Modal.error({
                    content: resultSave.data.message,
                    okText: "Đồng ý",
                });
                loading.value = false;
            }
        };

        const handleSaveAndAddNew = async function () {
            loading.value = true;
            result.value = true;

            let resultSave = await medicineTypeService.createOrEdit(item.value);
            if (resultSave.data.isSuccessed) {
                result.value = true;
            } else {
                Modal.error({
                    content: resultSave.data.message,
                    okText: "Đồng ý",
                });
                loading.value = false;
            }

            reset();
        };

        const handleCancel = function () {
            toggle();
        };

        const reset = function () {
            item.value = {
                id: undefined,
                code: "",
                name: "",
                sortOrder: undefined,
                inactive: false,
            };
        };

        const toggle = function () {
            emit("toggle", result);
        };

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                result.value = false;
                loading.value = true;

                reset();

                console.log("ádasd", props.data);

                if (
                    props.data !== null &&
                    props.data?.id !== null &&
                    props.data?.id !== undefined
                ) {
                    let data = props.data!;
                    medicineTypeService
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

                loading.value = false;
            }
        });

        return {
            title,
            item,
            errors,
            show,
            loading,
            activeKey,
            optionPharmaceuticalFormulations,
            preparationMethod,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>

<style scoped>
.medicine-card-body {
    margin: -24px;
    max-height: 650px;
    height: 650px;
    overflow-y: auto;
}

.container-general {
    display: grid;
    grid-template-columns: repeat(3, auto 1fr);
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
}

.grid-column-columnspan-4-7 {
    grid-column: 4/7;
}
.grid-column-columnspan-2-7 {
    grid-column: 2/7;
}
.grid-column-1 {
    grid-column: 1/2;
}
.grid-column-2 {
    grid-column: 2/3;
}
.grid-column-3 {
    grid-column: 3/4;
}
.grid-column-4 {
    grid-column: 4/5;
}
.grid-column-5 {
    grid-column: 5/6;
}
.grid-column-6 {
    grid-column: 6/7;
}

.container-general-other {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    align-items: center;
    justify-content: center;
}

.checkbox-wrapper {
    width: 100%;
}

.container-extent {
    display: grid;
    grid-template-columns: repeat(1, auto 1fr);
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .container-general {
        grid-template-columns: 1fr;
    }
    .grid-column-1 {
        grid-column: 1/1;
    }
    .grid-column-2 {
        grid-column: 1/1;
    }
    .grid-column-3 {
        grid-column: 1/1;
    }
    .grid-column-4 {
        grid-column: 1/1;
    }
    .grid-column-5 {
        grid-column: 1/1;
    }
    .grid-column-6 {
        grid-column: 1/1;
    }
    .grid-column-columnspan-4-7 {
        grid-column: 1/1;
    }
    .grid-column-columnspan-2-7 {
        grid-column: 1/1;
    }
}
</style>