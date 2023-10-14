<template>
    <x-layout>
        <template #extra>
            <div>
                <a-button class="me-1">
                    <i class="bi bi-plus-lg me-2"></i>
                    Làm mới
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-plus-lg me-2"></i>
                    Thêm bênh nhân mới
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-check me-2"></i>
                    Kiểm tra thẻ BHYT
                </a-button>
            </div>
        </template>
        <template #action>
            <div style="display: flex; align-items: center; text-wrap: nowrap;">
                <label>Cửa số</label>
                <a-input class="x-input"></a-input>
                <label>Lấy số</label>
                <a-input class="x-input"></a-input>
                <a-button>
                    <i class="bi bi-check me-2"></i>
                    Gọi số tiếp theo
                </a-button>
            </div>
        </template>

        <form class="py-3">
            <h6>HÀNH CHÍNH</h6>
            <div style="display: grid; row-gap: .25rem; column-gap: .25rem; grid-template-columns: max-content 1fr max-content 1fr max-content 1fr max-content 2fr;">
                <label>Mã bệnh nhân</label>
                <a-input class="x-input"></a-input>
                <label for="">Tên bệnh nhân</label>
                <a-input class="x-input" style="grid-column: 4/7;"></a-input>

                <label for="" style="grid-column: 1;">Giới tính</label>
                <a-input class="x-input"></a-input>
                <label for="">Ngày sinh</label>
                <a-input class="x-input"></a-input>
                <label for="">Tuổi</label>
                <div></div>
                <label for="">Nơi sinh</label>
                <a-input class="x-input"></a-input>

                <label for="" style="grid-column: 1;">Địa chỉ</label>
                <a-input class="x-input"></a-input>
                <label for="">Tt/Hq/Xp</label>
                <a-input class="x-input"></a-input>

                <label for="" style="grid-column: 1;">Dân tộc</label>
                <a-input class="x-input"></a-input>
                <label for="">Quốc tịch</label>
                <a-input class="x-input"></a-input>
                <label for="">Nghề nghiệp</label>
                <a-input class="x-input"></a-input>
                <label for="">Nơi làm việc</label>
                <a-input class="x-input"></a-input>

                <label for="">CMND/CCCD</label>
                <a-input class="x-input"></a-input>
                <label for="">Ngày cấp</label>
                <a-input class="x-input"></a-input>
                <label for="">Nơi cấp</label>
                <a-input class="x-input"></a-input>

            </div>

            <h6>THÔNG TIN ĐĂNG KÝ KHÁM</h6>
            <div class="row">
                <label for="">Đăng ký khám</label>
                <input/>
                <label for="">Thời gian đăng ký khám</label>
                <input/>
                <label for="">Lý do khám</label>
                <input/>

                <label for="">Dịch vụ</label>
                <input/>
                <label for="">Phòng khám</label>
                <input/>
            </div>
        </form>

    </x-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'ReceptionDetailView',
    setup() {


        return {

        }
    }
})
</script>