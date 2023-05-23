<template>
    <form>
        <a-modal :visible="show" :title="title" @cancel="handleCancel" :mask-closable="false">
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Mã loại phòng</span>
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
                        <span>Tên loại phòng</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.name" :disabled="loading" />
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
                    <a-input-number v-model:value="item.sortOrder" :disabled="loading" class="w-100"/>
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
import { RoomTypeModel } from '@/models'
import { roomTypeService } from '@/services';

export default defineComponent({
    name: 'RoomTypeDetailView',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object as PropType<RoomTypeModel>
        }
    },
    setup(props, { emit }) {
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const title = ref<string>('Thêm mới loại phòng');
        const item = ref<RoomTypeModel>({
            id: undefined,
            code: "",
            name: "",
            inactive: false
        });

        const handleSave = () => {
            loading.value = true;
            roomTypeService.createOrEdit(item.value)
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
                    roomTypeService.getById(data.id!)
                        .then(res => {
                            item.value = res.data.result;
                            title.value = "Sửa chi loại phòng";
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
        });

        return {
            title,
            item,
            show,
            loading,
            result,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        }
    }
})
</script>