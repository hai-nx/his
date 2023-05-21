<template>
    <form>
        <a-modal 
            :visible="show" 
            :title="title" 
            :mask-closable="false" 
            width="100%" 
            wrap-class-name="ant-modal"
            @cancel="handleCancel">
            
            <div class="row">
                <div class="col-3">
                    <div class="row">
                        <div class="col-md-3 px-0">
                            <label class="ps-2">Mã BN</label>
                        </div>
                        <div class="col-md-3 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-3 px-0">
                            <label class="ps-2">Mã KCB</label>
                        </div>
                        <div class="col-md-3 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="col-md-3 px-0">
                            <label class="ps-2">Họ tên</label>
                        </div>
                        <div class="col-md-9 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="col-md-3 px-0">
                            <label class="ps-2">Năm sinh</label>
                        </div>
                        <div class="col-md-6 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                        <div class="col-md-3 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
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
import { TreatmentModel } from '@/models'
import { patientService } from '@/services';

export default defineComponent({
    name: 'TreatmentDetailView',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object as PropType<TreatmentModel>
        }
    },
    setup(props, { emit }) {
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const title = ref<string>('Đăng ký khám');
        const item = ref<TreatmentModel>({
            id: undefined,
            code: "",
            patientId: undefined,
            patientCode: '',
            patientName: '',
            patientTypeId: undefined,
            treatmentTypeId: undefined,
            year: 0,
            age: 0,
            ageType: 0,
            genderId: undefined,
            inTimeClinical: new Date()
        });

        const handleSave = () => {
            loading.value = true;
            patientService.registerOrEdit(item.value)
                .then(res => {
                    if (res) {
                        console.log("DONE");
                    } else {
                        Modal.error({ content: res, okText: "Đồng ý" });
                    }
                })
                .catch(error => {
                    console.log(error)
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
                patientId: undefined,
                patientCode: '',
                patientName: '',
                patientTypeId: undefined,
                treatmentTypeId: undefined,
                year: 0,
                age: 0,
                ageType: 0,
                genderId: undefined,
                inTimeClinical: new Date()
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
                    patientService.getById(data.id!)
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

<style>
.ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
}

.ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
}

.ant-modal-body {
    flex: 1;
}
</style>