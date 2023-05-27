<template>
    <form>
        <a-modal :visible="show" :title="title" :mask-closable="false" width="auto" centered @cancel="handleCancel">
            <div>
                <a-card title="Hành chính" size="small" class="mb-2">
                    <div class="container px-0 bg-primary">
                        <div class="row mx-0 mb-1">
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Mã BN</label>
                                    </div>
                                    <div class="col-md-4 px-0">
                                        <a-input v-model:value="item.patientCode" :disabled="loading" />
                                    </div>
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">Họ tên</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <a-input v-model:value="item.patientName" :disabled="loading" />
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Ngày sinh</label>
                                    </div>
                                    <div class="col-md-6 px-0">
                                        <a-date-picker v-model:value="item.dob" :disabled="loading" format="DD/MM/YYYY"
                                            class="w-100" />
                                    </div>
                                    <div class="col-md-2 px-0">
                                        <label class="ps-2 text-danger">Năm</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-1">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <a-input v-model:value="item.year" :disabled="loading" />
                                    </div>
                                    <div class="col-md-2 px-0">
                                        <a-input v-model:value="item.age" :disabled="loading" />
                                    </div>
                                    <div class="col-md-6 px-0">
                                        <a-input v-model:value="item.ageType" disabled="true" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mx-0 mb-1">
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">Giới tính</label>
                                    </div>
                                    <div class="col-md-4 px-0">
                                        <a-select v-model:value="item.genderId" :disabled="loading" class="w-100" />
                                    </div>
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Nghề nghiệp</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <a-select v-model:value="item.careerId" :disabled="loading" />
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Dân tộc</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-select v-model:value="item.ethnicId" :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-1">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">Quốc tịch</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-select v-model:value="item.countryId" :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mx-0 mb-1">
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">T/H/X</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-input :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">Tỉnh (TP)</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-select v-model:value="item.provinceId" :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">Huyện (Q)</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-select v-model:value="item.districtId" :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-1">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">Xã (P)</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-select v-model:value="item.wardId" :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mx-0 mb-1">
                            <div class="col-md-6 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-2 px-0">
                                        <label class="ps-2 text-danger">Địa chỉ BN</label>
                                    </div>
                                    <div class="col-md-10 px-0">
                                        <a-input v-model:value="item.vir_address" :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">CMND/CCCD</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-input v-model:value="item.identificationNumber" :disabled="loading"
                                            class="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-1">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Điện thoại</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-input v-model:value="item.phoneNumber" :disabled="loading" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mx-0">
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Người nhà</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-input v-model:value="item.relativeName" :disabled="loading" class="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Địa chỉ NN</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-input v-model:value="item.relativeAddress" :disabled="loading" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2 text-danger">CCCD NN</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-input v-model:value="item.relativeIdentificationNumber" :disabled="loading" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 px-1">
                                <div class="row mx-0">
                                    <div class="col-md-4 px-0">
                                        <label class="ps-2">Điện thoại NN</label>
                                    </div>
                                    <div class="col-md-8 px-0">
                                        <a-input v-model:value="item.relativePhoneNumbar" :disabled="loading" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-card>

                <a-card title="Thông tin đăng ký khám " size="small">
                </a-card>
            </div>






            <template #footer>
                <div>
                    <a-button key="submit" type="primary" :loading="loading" @click.prevent="handleSave">Lưu</a-button>
                    <a-button type="primary" :loading="loading" @click.prevent="handleSaveAndAddNew">Lưu và Thêm
                        mới</a-button>
                    <a-button @click="handleCancel">Bỏ qua</a-button>
                </div>
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

<style scoped>
.no-gutter>[class*='col-'] {
    padding-right: 0;
    padding-left: 0;
}

.his-card-body {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
}
</style>