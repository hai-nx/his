<template>
    <x-layout :show-header="false" class="x-container">
        <!-- <template #extra>
            <div>
                <a-button class="me-1" size="small">
                    <i class="bi bi-plus-lg me-2"></i>
                    Làm mới
                </a-button>
                <a-button class="me-1" size="small">
                    <i class="bi bi-plus-lg me-2"></i>
                    Thêm bênh nhân mới
                </a-button>
                <a-button class="me-1" size="small">
                    <i class="bi bi-check me-2"></i>
                    Kiểm tra thẻ BHYT
                </a-button>
            </div>
        </template> -->
        <!-- <template #action>
            <div style="display: flex; align-items: center; text-wrap: nowrap;">
                <label>Cửa số</label>
                <a-input class="x-input"></a-input>
                <label>Lấy số</label>
                <a-input class="x-input"></a-input>
                <a-button size="small">
                    <i class="bi bi-check me-2"></i>
                    Gọi số tiếp theo
                </a-button>
            </div>
        </template> -->

        <template #footer>
            <a-button class="me-1">
                <i class="bi bi-plus-lg me-2"></i>
                Thêm bênh nhân mới
            </a-button>
            <a-button class="me-1">
                <i class="bi bi-check me-2"></i>
                Kiểm tra thẻ BHYT
            </a-button>
        </template>

        <form class="py-3 px-2">
            <div style="display: grid; column-gap: .5rem; row-gap: .25rem; grid-template-columns: max-content 1fr max-content 1fr max-content 1fr max-content 1fr; align-items: center;">
                <h6>HÀNH CHÍNH</h6>

                <label style="grid-column: 1;">Mã bệnh nhân</label>
                <a-input :size="size">
                    <template #suffix>
                        <i class="bi bi-plus-lg" style="cursor: pointer;"></i>
                    </template>
                </a-input>
                <label>Họ tên</label>
                <a-input :size="size"></a-input>
                <label>Năm sinh</label>
                <a-input :size="size"></a-input>


                <label style="grid-column: 7;">Số thẻ</label>
                <a-input :size="size"></a-input>
                <label style="grid-column: 7;">KCBBĐ</label>
                <a-input :size="size"></a-input>
                <label style="grid-column: 7;">Hạn thẻ</label>
                <a-input :size="size"></a-input>
                <label style="grid-column: 7;">Địa chỉ thẻ</label>
                <a-input :size="size"></a-input>
                <label style="grid-column: 7;">Tuyến CKB</label>
                <a-input :size="size"></a-input>
                <label style="grid-column: 7;">Tuyến CKB</label>
                <a-input :size="size"></a-input>
                <label style="grid-column: 7;">Tuyến CKB</label>
                <a-input :size="size"></a-input>
            </div>


            <h6>HÀNH CHÍNH</h6>
            <div
                style="display: grid; row-gap: .25rem; column-gap: .5rem; grid-template-columns: max-content 150px max-content 150px max-content 150px max-content 150px max-content 1fr;">
                <label>Mã bệnh nhân</label>
                <a-input :size="size"></a-input>
                <label for="">Tên bệnh nhân</label>
                <a-input :size="size" style="grid-column: 4/7;"></a-input>

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
            <div
                style="display: grid; row-gap: .25rem; column-gap: .25rem; grid-template-columns: max-content 170px max-content 170px max-content 170px max-content 170px;">
                <label for="">Đăng ký khám</label>
                <a-input class="x-input"></a-input>
                <label for="">Lúc</label>
                <a-input class="x-input"></a-input>
                <label for="">Lý do khám</label>
                <a-input class="x-input"></a-input>

                <label for="">Dịch vụ</label>
                <a-input class="x-input"></a-input>
                <label for="">Phòng khám</label>
                <a-input class="x-input"></a-input>
            </div>
        </form>

    </x-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';



export default defineComponent({
    name: 'ReceptionDetailView',
    setup() {
        const size = ref('small')

        return {
            size
        }
    }
})
</script>

<style>
.x-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

}

@media (min-width: 1400px) {
    .x-container {
        max-width: 1320px;
    }
}
</style>