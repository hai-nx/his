<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, watch, PropType } from "vue";
import Msg from '@/components/message'
import {
    BranchModel,
    ProvinceModel,
    DistrictModel,
    WardModel,
    UserModel,
} from "@/models";
import {
    branchService,
    provinceService,
    districtService,
    wardService,
} from "@/services";

const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
    },
    data: {
        type: Object as PropType<BranchModel>,
    },
});

const emit = defineEmits(["toggle"]);

const title = ref<string>("Thêm mới chi nhánh");
const item = ref<BranchModel>({
    id: null,
    code: "",
    name: "",
    address: "",
    description: "",
    inactive: false,
});
const errors = ref({
    code: "",
    name: "",
    mediOrgCode: "",
    mediOrgAcceptCode: "",
});
const loading = ref<boolean>(false);

const provinces = ref<ProvinceModel[]>([]);
const districts = ref<DistrictModel[]>([]);
const wards = ref<WardModel[]>([]);

const districtOptions = ref<DistrictModel[]>([]);
const wardOptions = ref<WardModel[]>([]);

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
                Msg.warning(res.data.message);
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

    branchService
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
                    Msg.warning(error.message);
                    toggle();
                });
        } else {
            loading.value = false;
        }

        provinceService.getAll().then((r) => {
            provinces.value = r.data.result;
        });

        districtService.getAll().then((r) => {
            districts.value = r.data.result;
        });

        wardService.getAll().then((r) => {
            wards.value = r.data.result;
        });
    }
});

function handleProvinceChange(value: string) {
    //console.log(`selected ${value}`);
    if (value === undefined) {
        districtOptions.value = districts.value;
    } else {
        districtOptions.value = districts.value.filter(
            (x) => x.provinceID === value
        );
    }
}

function handleDistrictChange(value: string) {
    //console.log(`selected ${value}`);
    if (value === undefined) {
        if (item.value.provinceID === undefined) {
            wardOptions.value = wards.value;
        } else {
            wardOptions.value = wards.value.filter(
                (x) => x.provinceId === item.value.provinceID
            );
        }
    } else {
        wardOptions.value = wards.value.filter((x) => x.districtID === value);
        console.log(wards);
    }
}

// export default defineComponent({
//     name: "BranchDetailView",
//     props: {
//         visible: {
//             type: Boolean,
//             required: true,
//         },
//         data: {
//             type: Object as PropType<BranchModel>,
//         },
//     },
//     setup(props, { emit }) {
//         const title = ref<string>("Thêm mới chi nhánh");
//         const item = ref<BranchModel>({
//             id: null,
//             code: "",
//             name: "",
//             address: "",
//             description: "",
//             inactive: false,
//         });
//         const errors = ref(
//             {
//                 code: "",
//                 name: "",
//                 mediOrgCode: "",
//                 mediOrgAcceptCode: ""
//             });
//         const loading = ref<boolean>(false);

//         let result = false;

//         const handleSave = function () {
//             loading.value = true;
//             branchService
//                 .createOrEdit(item.value)
//                 .then((res) => {
//                     if (res.data.isSucceeded) {
//                         result = true;
//                         toggle();
//                     } else {
//                         Modal.error({ content: res.data.message, okText: "Đồng ý" });
//                     }
//                 })
//                 .catch((error) => {
//                     Modal.error({ content: error.message, okText: "Đồng ý" });
//                     //errors.value = error.response.data.errors;
//                 })
//                 .finally(() => {
//                     loading.value = false;
//                 });
//         };

//         const handleSaveAndAddNew = function () {
//             loading.value = true;
//             result = true;

//             branchService
//                 .createOrEdit(item.value)
//                 .then((res) => {
//                     if (res) {
//                         result = true;
//                     } else {
//                         Modal.error({ content: res, okText: "Đồng ý" });
//                     }
//                 })
//                 .catch((error) => {
//                     Modal.error({ content: error.message, okText: "Đồng ý" });
//                     //errors.value = error.response.data.errors;
//                 })
//                 .finally(() => {
//                     loading.value = false;
//                 });

//             reset();
//         };

//         const handleCancel = function () {
//             toggle();
//         };

//         const reset = function () {
//             item.value = {
//                 id: null,
//                 code: "",
//                 name: "",
//                 address: "",
//                 description: "",
//                 inactive: false,
//             };
//         };

//         const toggle = function () {
//             emit("toggle", result);
//         };

//         const show = computed(() => props.visible);

//         watch(show, (value) => {
//             if (value) {
//                 result = false;
//                 loading.value = true;

//                 reset();

//                 if (props.data !== null && props.data?.id !== undefined) {
//                     let data = props.data!;
//                     branchService
//                         .getById(data.id!)
//                         .then((res) => {
//                             item.value = res.data.result;
//                             title.value = "Sửa chi nhánh";
//                             loading.value = false;
//                         })
//                         .catch((error) => {
//                             Modal.error({
//                                 content: error.message,
//                                 okText: "Đồng ý",
//                             });
//                             toggle();
//                         });
//                 } else {
//                     loading.value = false;
//                 }
//             }
//         });

//         return {
//             title,
//             item,
//             errors,
//             show,
//             loading,
//             handleSave,
//             handleSaveAndAddNew,
//             handleCancel,
//         };
//     },
// });
</script>

<template>
    <a-modal
        :visible="show"
        :title="title"
        width="1000px"
        @cancel="handleCancel"
        :mask-closable="false"
    >
        <div class="row gx-2">
            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl lbl-required">Mã chi nhánh</label>
                </div>
                <div>
                    <a-input
                        v-model:value="item.code"
                        :disabled="loading"
                        :maxlength="50"
                        :class="{
                            'input-danger': errors.code,
                        }"
                    />
                </div>
            </div>

            <div class="col-12 col-md-9 mb-2">
                <div>
                    <label class="lbl lbl-required">Tên chi nhánh</label>
                </div>
                <div>
                    <a-input
                        v-model:value="item.name"
                        :disabled="loading"
                        :maxlength="255"
                        :class="{
                            'input-danger': errors.name,
                        }"
                    />
                </div>
            </div>
        </div>

        <div class="row gx-2">
            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Mã KCBBĐ</label>
                </div>
                <div>
                    <a-input
                        v-model:value="item.mediOrgCode"
                        :disabled="loading"
                        :maxlength="50"
                    />
                </div>
            </div>

            <div class="col-12 col-md-9 mb-2">
                <div>
                    <label class="lbl"
                        >Mã KCBBĐ đúng tuyến <i>(ngăn cách bởi dấu ;)</i></label
                    >
                </div>
                <div>
                    <a-input
                        v-model:value="item.mediOrgAcceptCode"
                        :disabled="loading"
                        :maxlength="4000"
                    />
                </div>
            </div>
        </div>

        <div class="row gx-2">
            <div class="col-12 col-md-6 mb-2">
                <div>
                    <label class="lbl"
                        >Đơn vị quản lý <i>(sở y tế, bộ y tế)</i></label
                    >
                </div>
                <div>
                    <a-input
                        v-model:value="item.parentOrganizationName"
                        :disabled="loading"
                        :maxlength="255"
                    />
                </div>
            </div>

            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Loại chuyên khoa</label>
                </div>
                <div>
                    <a-select
                        class="w-100"
                        v-model:value="item.hospitalSpecialityID"
                        :disabled="loading"
                    >
                    </a-select>
                </div>
            </div>

            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Hạng bệnh viện</label>
                </div>
                <div>
                    <a-select
                        class="w-100"
                        v-model:value="item.hospitalLevelID"
                        :disabled="loading"
                    />
                </div>
            </div>
        </div>

        <div class="row gx-2">
            <div class="col-12 col-md-12 mb-2">
                <div>
                    <label class="lbl">Địa chỉ</label>
                </div>
                <div>
                    <a-textarea
                        v-model:value="item.address"
                        :disabled="loading"
                        :maxlength="255"
                    />
                </div>
            </div>
        </div>

        <div class="row gx-2">
            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Tỉnh</label>
                </div>
                <a-select
                    class="w-100"
                    v-model:value="item.provinceID"
                    :options="
                        provinces.map((item) => ({
                            value: item.id,
                            label: item.provinceName,
                        }))
                    "
                    :disabled="loading"
                    :allowClear="true"
                    @change="handleProvinceChange"
                >
                </a-select>
            </div>

            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Huyện</label>
                </div>
                <div>
                    <a-select
                        class="w-100"
                        v-model:value="item.districtID"
                        :options="
                            districtOptions.map((item) => ({
                                value: item.id,
                                label: item.districtName,
                            }))
                        "
                        :allowClear="true"
                        :showSearch="true"
                        :disabled="loading"
                        @select="handleDistrictChange"
                    >
                    </a-select>
                </div>
            </div>

            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Xã</label>
                </div>
                <div>
                    <a-select
                        class="w-100"
                        v-model:value="item.wardID"
                        :options="
                            wardOptions.map((item) => ({
                                value: item.id,
                                label: item.wardName,
                            }))
                        "
                        :disabled="loading"
                    />
                </div>
            </div>
        </div>

        <div class="row gx-2">
            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Điện thoại</label>
                </div>
                <a-input
                    class="w-100"
                    v-model:value="item.phoneNumber"
                    :disabled="loading"
                    :maxlength="50"
                >
                </a-input>
            </div>

            <div class="col-12 col-md-3 mb-2">
                <div>
                    <label class="lbl">Email</label>
                </div>
                <div>
                    <a-input
                        class="w-100"
                        v-model:value="item.email"
                        :disabled="loading"
                        :maxlength="50"
                    >
                    </a-input>
                </div>
            </div>

            <div class="col-12 col-md-6 mb-2">
                <div>
                    <label class="lbl">Lãnh đạo</label>
                </div>
                <div>
                    <a-input-search
                        v-model:value="item.directorID"
                        :disabled="loading"
                    />
                </div>
            </div>
        </div>

        <div class="row gx-2">
            <div class="col-12 col-md-12 mb-2">
                <div>
                    <label class="lbl">Ghi chú</label>
                </div>
                <div>
                    <a-textarea
                        v-model:value="item.description"
                        :disabled="loading"
                        :maxlength="255"
                    />
                </div>
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
    <!-- <form>
        <a-modal :visible="show" :title="title" @cancel="handleCancel" :mask-closable="false">
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Mã chi nhánh</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.branchCode" :disabled="loading" :class="{
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
                    <a-input v-model:value="item.branchName" :disabled="loading" :class="{
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
</form> -->
</template>

<style scoped>
.lbl {
    font-weight: 600;
}

.lbl-required::after {
    content: "*";
    color: red;
    margin-left: 0.2rem;
}
</style>