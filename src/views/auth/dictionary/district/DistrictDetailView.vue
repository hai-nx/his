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
                        <span>Mã quận, huyện</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input
                        v-model:value="item.districtCode"
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
                        <span>Tên quận, huyện</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input
                        v-model:value="item.districtName"
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
                        <span>Tỉnh, thành phố</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-select v-model:value="item.provinceID" :options="provinces" :field-names="{ value: 'id', label: 'provinceName' }"
                        :disabled="loading" class="w-100">
                        <template #option="{ provinceCode, provinceName }">
                            <div class="row">
                                <span class="col-3">{{ provinceCode }}</span>
                                <span class="col-9">{{ provinceName }}</span>
                            </div>
                        </template>
                    </a-select>
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
import { ProvinceModel, DistrictModel } from "@/models";
import { districtService, provinceService } from "@/services";
import Msg from '@/components/message'

export default defineComponent({
    name: "DistrictDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<DistrictModel>,
        },
    },
    setup(props, { emit }) {
        const title = ref<string>("Thêm mới quận, huyện");
        const item = ref<DistrictModel>({
            id: null,
            code: "",
            name: "",
            description: "",
            inactive: false,
        });
        const errors = ref({ code: "", name: "" });
        const loading = ref<boolean>(false);


        const provinces = ref<ProvinceModel[]>([])

        let result = false;

        const handleSave = function () {
            loading.value = true;
            districtService
                .createOrEdit(item.value)
                .then((res) => {
                    if (res) {
                        result = true;
                        toggle();
                    } else {
                        Msg.warning(res);
                    }
                })
                .catch((error) => {
                    Msg.warning(error.message);
                })
                .finally(() => {
                    loading.value = false;
                });
        };

        const handleSaveAndAddNew = function () {
            loading.value = true;
            result = true;

            districtService
                .createOrEdit(item.value)
                .then((res) => {
                    if (res) {
                        result = true;
                    } else {
                        Msg.warning(res);
                    }
                })
                .catch((error) => {
                    Msg.warning(error.message);
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
                    districtService
                        .getById(data.id!)
                        .then((res) => {
                            item.value = res.data.result;
                            title.value = "Sửa quận, huyện";
                            loading.value = false;
                        })
                        .catch((error) => {
                            Msg.warning(error.message);
                            toggle();
                        });
                } else {
                    loading.value = false;
                }

                provinceService.getAll()
                .then(r => {
                    provinces.value = r.data.result;
                })
            }
        });

        return {
            title,
            item,
            errors,
            show,
            loading,
            provinces,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>