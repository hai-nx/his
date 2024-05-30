<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            :mask-closable="false"
        >
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Mã xã, phường</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input
                        v-model:value="item.wardCode"
                        :disabled="loading"
                        :class="{
                            'input-danger': errors.code,
                        }"
                    />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Tên xã, phường</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input
                        v-model:value="item.wardName"
                        :disabled="loading"
                        :class="{
                            'input-danger': errors.name,
                        }"
                    />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Quận, huyện</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-select v-model:value="item.districtID" :options="districts" :field-names="{ value: 'id', label: 'districtName' }"
                        :disabled="loading" class="w-100">
                        <template #option="{ districtCode, districtName }">
                            <div class="row">
                                <span class="col-3">{{ districtCode }}</span>
                                <span class="col-9">{{ districtName }}</span>
                            </div>
                        </template>
                    </a-select>
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Gõ tắt</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input
                        v-model:value="item.searchCode"
                        :disabled="loading"
                    />
                </div>
            </div>
            
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span>Mô tả</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-textarea
                        v-model:value="item.description"
                        :disabled="loading"
                    />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-8 offset-md-4">
                    <a-checkbox
                        v-model:checked="item.inactive"
                        :disabled="loading"
                        >Ngừng theo dõi</a-checkbox
                    >
                </div>
            </div>

            <template #footer>
                <a-button
                    key="submit"
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSave"
                    >Lưu</a-button
                >
                <a-button
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSaveAndAddNew"
                    >Lưu và Thêm mới</a-button
                >
                <a-button @click="handleCancel">Bỏ qua</a-button>
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType } from "vue";
import { Modal } from "ant-design-vue";
import { DistrictModel, WardModel } from "@/models";
import { districtService, wardService } from "@/services";

export default defineComponent({
    name: "WardDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<WardModel>,
        },
    },
    setup(props, { emit }) {
        const title = ref<string>("Thêm mới mã bệnh");
        const item = ref<WardModel>({
            id: null,
            code: "",
            name: "",
            description: "",
            inactive: false,
        });
        const errors = ref({ code: "", name: "" });
        const loading = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });
        const districts = ref<DistrictModel[]>([]);

        let result = false;

        const loadSource = function() {
            districtService.getAll()
            .then(res => {
                districts.value = res.data.result.filter(x=>!x.inactive);
            })
        }

        const handleSave = function () {
            loading.value = true;
            wardService
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

            wardService
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
                    wardService
                        .getById(data.id!)
                        .then((res) => {
                            item.value = res.data.result;
                            title.value = "Sửa mã bệnh";
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

                loadSource()
            }
        });

        return {
            title,
            item,
            errors,
            show,
            loading,
            fields,
            districts,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>