<template>
    <div class="container">
        <div class="border py-2 mb-1">
            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Mã BN</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Họ tên</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <a-input :disabled="loading" />
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Ngày sinh</label>
                        </div>
                        <div class="col-md-6 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                        <div class="col-md-2 px-0">
                            <label class="ps-2 text-danger">Năm</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-6 px-0">
                            <a-input disabled="true" />
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
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Nghề nghiệp</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <a-input :disabled="loading" />
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Dân tộc</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Quốc tịch</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
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
                        <div class="col-md-4 px-0">
                            <a-input class="w-100" :disabled="loading" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Tỉnh (TP)</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Huyện (Q)</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Xã (P)</label>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">Số nhà</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <a-input class="w-100" :disabled="loading" />
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
                            <a-input class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">CMND/CCCD</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Điện thoại</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input :disabled="loading" />
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
                            <a-input class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Địa chỉ NN</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2 text-danger">CCCD NN</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Điện thoại NN</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border py-2 mb-1">
            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Đối tượng</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Tiếp nhận lúc</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Lý do tiếp nhận</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-1">
                    <div class="row mx-0">
                        <a-checkbox>Ưu tiên</a-checkbox>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Yêu cầu khám</label>
                        </div>
                        <div class="col-md-10 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Phòng khám</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Số thẻ</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <a-checkbox>Check BHYT</a-checkbox>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-checkbox>Sinh thẻ TE</a-checkbox>
                        </div>
                        <div class="col-md-4 px-0">
                            <a-button class="w-100" type="primary">
                                Lịch sử thẻ
                            </a-button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Nơi ĐKKCB</label>
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-5 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-3 px-1">
                            <a-input disabled="true" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Từ ngày</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Đến ngày</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Địa chỉ BH</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Tuyến</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-6 px-2">
                            <a-checkbox>5 năm</a-checkbox>
                        </div>
                        <div class="col-md-6 px-0">
                            <a-checkbox>6 tháng</a-checkbox>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Ngày đủ 5 năm</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">TG hưởng ĐCT</label>
                        </div>
                        <div class="col-md-8 px-0 pe-1">
                            <a-date-picker class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Mức hưởng</label>
                        </div>
                        <div class="col-md-8 px-0">
                            <a-input :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 px-0">
                    <div class="row mx-0">
                        <div class="col-md-4 px-0">
                            <label class="ps-2">Nơi sống</label>
                        </div>
                        <div class="col-md-8 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Nơi chuyển</label>
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-8 px-0">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Chẩn đoán TD</label>
                        </div>
                        <div class="col-md-2 px-0">
                            <a-input :disabled="loading" />
                        </div>
                        <div class="col-md-8 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">H.T chuyển</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-0 mb-1">
                <div class="col-md-6 px-0">
                </div>
                <div class="col-md-6 px-0">
                    <div class="row mx-0">
                        <div class="col-md-2 px-0">
                            <label class="ps-2">Lý do chuyển</label>
                        </div>
                        <div class="col-md-10 px-0 pe-1">
                            <a-select class="w-100" :disabled="loading" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <a-button type="primary me-1">Nhập mới</a-button>
            <a-button type="primary mx-1">Lưu</a-button>
            <a-button type="primary mx-1">Xóa</a-button>
            <a-button type="primary mx-1">In phiếu</a-button>
            <a-button type="primary mx-1">Xem phiếu</a-button>
            <a-button type="primary mx-1">In khác</a-button>
            <a-button type="primary mx-1">Dịch vụ CLS</a-button>
            <a-button type="primary mx-1">Khác</a-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'AdmissionRegisterView',
    setup() {

        const loading = ref(false)

        return {
            loading
        }
    },
});
</script>

<style scoped>
.ant-input {
    height: 28px;
}
</style>