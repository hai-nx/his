<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            :mask-closable="false"
            height="500px"
        >
            <div class="container">
                <label>
                    <span>Mã nhóm</span>
                    <span class="text-danger me-1">*</span>
                </label>
                <a-input v-model:value="item.code" :disabled="loading" />

                <label>
                    <span>Tên nhóm</span>
                    <span class="text-danger me-1">*</span>
                </label>
                <a-input v-model:value="item.name" :disabled="loading" />

                <label>
                    <span>Số thứ tự</span>
                </label>
                <a-input-number
                    v-model:value="item.sortOrder"
                    :disabled="loading"
                    class="w-100"
                />

                <a-checkbox
                    class="a-checkbox-inactive"
                    v-model:checked="item.inactive"
                    :disabled="loading"
                    >Ngừng theo dõi</a-checkbox
                >
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
import { defineComponent, ref, computed, watch, PropType } from "vue";
import { Modal } from "ant-design-vue";
import { ItemGroupModel } from "@/models";
import { itemGroupService } from "@/services";

export default defineComponent({
    name: "ItemGroupDetailView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<ItemGroupModel>,
        },
    },
    setup(props, { emit }) {
        const title = ref<string>("Thêm mới nhóm thuốc");
        const item = ref<ItemGroupModel>({
            id: null,
            code: "",
            name: "",
            sortOrder: undefined,
            inactive: false,
            commodityType: 0,
            isSystem: false,
        });
        const errors = ref({ code: "", name: "" });
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);

        const handleSave = async function () {
            loading.value = true;
            let resultSave = await itemGroupService.createOrEdit(item.value);
            if (resultSave.data.isSucceeded) {
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

            let resultSave = await itemGroupService.createOrEdit(item.value);
            if (resultSave.data.isSucceeded) {
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
                id: null,
                code: "",
                name: "",
                sortOrder: undefined,
                inactive: false,
                commodityType: 0,
                isSystem: false,
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

                if (
                    props.data !== null &&
                    props.data?.id !== null &&
                    props.data?.id !== undefined
                ) {
                    let data = props.data!;
                    itemGroupService
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
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        };
    },
});
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
}

.a-checkbox-inactive {
    grid-column-start: 2;
    grid-column-end: 3;
}
</style>