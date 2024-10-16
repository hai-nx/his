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
                    <a-input v-model:value="item.mediCode" :disabled="loading" />
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
                    <a-select v-model:value="item.roomTypeId" :options="roomTypes" :field-names="fields"
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
                        <span>Khoa</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-select v-model:value="item.departmentId" :options="departments" :field-names="fields"
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
import { DepartmentModel, RoomModel, RoomTypeModel } from "@/models";
import { departmentService, roomService, roomTypeService } from "@/services";
import Msg from '@/components/message'

export default defineComponent({
    name: "DepartmentDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<RoomModel>,
        },
    },
    setup(props, { emit }) {
        const loading = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });

        const result = ref<boolean>(false);
        const title = ref<string>("Thêm mới chi nhánh");
        const item = ref<RoomModel>({
            id: null,
            code: "",
            name: "",
            roomTypeId: 0,
            departmentId: "",
            inactive: false,
        });

        const roomTypes = ref<RoomTypeModel[]>([]);
        const departments = ref<DepartmentModel[]>([]);

        const handleSave = () => {
            loading.value = true;
            roomService
                .createOrEdit(item.value)
                .then(res => {
                    if (res.data.isSucceeded) {
                        result.value = true;
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

        const handleSaveAndAddNew = () => {
            loading.value = true;
            result.value = true;

            reset();
        };

        const handleCancel = () => {
            toggle();
        };

        const reset = () => {
            item.value = {
                id: null,
                code: "",
                name: "",
                roomTypeId: 0,
                departmentId: "",
                description: "",
                inactive: false,
            };
        };

        const toggle = () => {
            emit("toggle", result.value);
        };

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                reset();
                loading.value = true;
                result.value = false;

                if (props.data !== undefined && props.data?.id !== undefined) {
                    let data = props.data!;
                    roomService
                        .getById(data.id!)
                        .then((res) => {
                            item.value = res.data.result;
                            title.value = "Sửa phòng";
                            loading.value = false;
                        })
                        .catch((error) => {
                            Msg.warning(error.message);
                            toggle();
                        });
                } else {
                    loading.value = false;
                }
            }

            // lấy dữ liệu
            if (value) {
                roomTypeService.getAll().then((response) => {
                    roomTypes.value = response.data.result.filter(
                        (x) => !x.inactive
                    );
                    if (roomTypes.value.length > 0) {
                        item.value.roomTypeId =
                            roomTypes.value[0].id != undefined &&
                                roomTypes.value[0].id != ""
                                ? parseInt(roomTypes.value[0].id)
                                : 0;
                    }
                });

                departmentService.getAll().then((response) => {
                    departments.value = response.data.result.filter(
                        (x) => !x.inactive
                    );
                    if (departments.value.length > 0) {
                        item.value.departmentId = departments.value[0].id!;
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
            result,
            roomTypes,
            departments,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>