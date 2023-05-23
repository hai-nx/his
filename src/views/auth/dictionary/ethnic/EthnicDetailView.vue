<template>
    <form>
        <a-modal :visible="show" :title="title" @cancel="handleCancel" :mask-closable="false">
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Mã dân tộc</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.code" :disabled="loading" :class="{
                        'input-danger': errors.code
                    }" />
                </div>
            </div>
            <div class="row mb-1">
                <div class="col-12 col-md-4 text-start text-md-end">
                    <label>
                        <span class="text-danger me-1">*</span>
                        <span>Tên dân tộc</span>
                    </label>
                </div>
                <div class="col-12 col-md-8">
                    <a-input v-model:value="item.name" :disabled="loading" :class="{
                        'input-danger': errors.name
                    }" />
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
import { EthnicModel } from '@/models'
import { ethnicService } from '@/services'

export default defineComponent({
    name: 'EthnicDetailView',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object as PropType<EthnicModel>
        }
    },
    setup(props, { emit }) {
        const title = ref<string>('Thêm mới dân tộc');
        const item = ref<EthnicModel>({
            id: undefined,
            code: "",
            name: "",
            description: "",
            inactive: false
        });
        const errors = ref({ code: '', name: '' });
        const loading = ref<boolean>(false);

        let result = false;

        const handleSave = function () {
            loading.value = true;
            ethnicService.createOrEdit(item.value)
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
                    //errors.value = error.response.data.errors;
                })
                .finally(() => {
                    loading.value = false;
                });
        }

        const handleSaveAndAddNew = function () {
            loading.value = true;
            result = true;

            ethnicService.createOrEdit(item.value)
                .then(res => {
                    if (res) {
                        result = true;
                    } else {
                        Modal.error({ content: res, okText: "Đồng ý" });
                    }
                })
                .catch(error => {
                    Modal.error({ content: error.message, okText: "Đồng ý" });
                    //errors.value = error.response.data.errors;
                })
                .finally(() => {
                    loading.value = false;
                });

            reset();
        }

        const handleCancel = function () {
            toggle();
        }

        const reset = function () {
            item.value = {
                id: undefined,
                code: "",
                name: "",
                description: "",
                inactive: false
            }
        }

        const toggle = function () {
            emit("toggle", result);
        }

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                result = false;
                loading.value = true;

                reset();

                if (props.data !== null && props.data?.id !== undefined) {
                    let data = props.data!;
                    ethnicService.getById(data.id!)
                        .then(res => {
                            item.value = res.data.result;
                            title.value = "Sửa dân tộc";
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
            errors,
            show,
            loading,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
        }
    }
})
</script>