<template>
    <div class="container my-3">

        <a-divider orientation="left" orientationMargin="0">Hành chính</a-divider>

        <div class="row mb-1">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Mã bệnh nhân</label>
                    </div>
                    <div class="col-sm-4 px-1">
                        <a-input></a-input>
                    </div>
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Họ tên</span>
                            <span class="text-danger me-1">*</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row px-1">
                    <a-input></a-input>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Ngày sinh</label>
                    </div>
                    <div class="col-sm-4 px-1">
                        <a-input size="small"></a-input>
                    </div>
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Năm</span>
                            <span class="text-danger me-1">*</span>
                        </label>
                    </div>
                </div>

            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <a-input-number size="small"></a-input-number>
                    </div>
                    <div class="col-sm-4 px-1">
                        <a-input-number size="small"></a-input-number>
                    </div>
                    <div class="col-sm-4 px-1">
                        <a-select size="small"></a-select>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-1">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Giới tính</span>
                            <span class="text-danger me-1">*</span>
                        </label>
                    </div>
                    <div class="col-sm-4 px-1">
                        <a-select>

                        </a-select>
                    </div>
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Nghề nghiệp</span>
                            <span class="text-danger me-1">*</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row px-1">
                    <a-input></a-input>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Dân tộc</label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Quốc tịch</label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-1">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Số nhà/Thôn</span>
                        </label>
                    </div>
                    <div class="col-sm-4 px-1">
                        <a-input></a-input>
                    </div>
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>T/H/Xã</span>
                            <span class="text-danger me-1">*</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-12 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Tỉnh</span>
                        </label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-1">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Huyện (Q)</span>
                        </label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Xã (P)</span>
                        </label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-2 px-1">
                        <label for="">
                            <span>Địa chỉ BN</span>
                        </label>
                    </div>
                    <div class="col-sm-10 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-1">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Điện thoại</span>
                        </label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Chức danh</span>
                        </label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-2 px-1">
                        <label for="">
                            <span>Nơi làm việc</span>
                        </label>
                    </div>
                    <div class="col-sm-10 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Họ tên NN</span>
                        </label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">
                            <span>Địa chỉ NN</span>
                        </label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-2 px-1">
                        <label for="">
                            <span>CMT/CCCD</span>
                        </label>
                    </div>
                    <div class="col-sm-10 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
        </div>

        <a-divider orientation="left" orientationMargin="0">Thông tin đăng ký khám bệnh</a-divider>

        <div class="row mb-1">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Ngày khám</label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Đối tượng</label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-10">
                        <a-radio-group >
                            <a-radio value="1">Cấp cứu</a-radio>
                            <a-radio value="2">Khám bệnh</a-radio>
                        </a-radio-group>
                        <a-checkbox>Ưu tiên</a-checkbox>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-1">
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-2 px-1">
                        <label for="">Ngày khám</label>
                    </div>
                    <div class="col-sm-10 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-2 px-1">
                        <label for="">Phòng khám</label>
                    </div>
                    <div class="col-sm-10 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-1">
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Nơi sống</label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="row">
                    <div class="col-sm-4 px-1">
                        <label for="">Số thẻ</label>
                    </div>
                    <div class="col-sm-8 px-1">
                        <a-input></a-input>
                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-5">
                <a-checkbox>Check BHYT</a-checkbox>
                <a-checkbox>HK</a-checkbox>
                <a-checkbox>Sinh thẻ TE</a-checkbox>
                <a-checkbox>Giữ thẻ BHYT</a-checkbox>
            </div>
        </div>

        <div class="row mb-1">
            
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {

        }
    },
    mounted() {

    },
    name: 'OutpatientRegister',
    methods: {

    }
})
</script>