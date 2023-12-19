<template>
    <x-layout title="Đăng ký khám" :show-header="true" class="x-container">
        <!-- <template #extra>
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
        </template> -->
        <template #action>
            <div style="display: flex; align-items: center; text-wrap: nowrap;">
                <label>Cửa số</label>
                <a-input></a-input>
                <label>Lấy số</label>
                <a-input></a-input>
                <a-button>
                    <i class="bi bi-check me-2"></i>
                    Gọi số tiếp theo
                </a-button>
            </div>
        </template>

        <template #footer>
            <div style="display: flex; justify-content: end;">
                <a-button class="me-1">
                    <i class="bi bi-plus-lg me-2"></i>
                    Lưu
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-check me-2"></i>
                    In phiếu khám
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-check me-2"></i>
                    Nhập mới
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-check me-2"></i>
                    Chuyển tuyến
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-check me-2"></i>
                    Sinh hiệu
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-check me-2"></i>
                    Danh sách hẹn khám
                </a-button>
            </div>
        </template>

        <form class="py-3 px-2"
            style="display: grid; grid-template-columns: max-content 160px max-content 160px max-content 160px max-content 1fr; column-gap: .5rem; row-gap: .25rem;">
            <h6 style="grid-column: span 4;">HÀNH CHÍNH</h6>

            <label for="txtPatientCode" style="grid-column: 1;">Mã bệnh nhân</label>
            <a-input id="txtPatientCode" :size="size"></a-input>
            <a-label class="required">Họ tên</a-label>
            <a-input style="grid-column: span 3;" :size="size"></a-input>

            <a-label style="grid-column: 1;" class="required">Giới tính</a-label>
            <a-input :size="size"></a-input>
            <a-label class="required">Ngày sinh</a-label>
            <a-input :size="size"></a-input>
            <a-label style="grid-column: span 2; text-align: center;" class="text-primary">(Năm sinh)</a-label>
            <a-label>Nơi sinh</a-label>
            <a-input :size="size"></a-input>

            <a-label class="required">Địa chỉ</a-label>
            <a-input :size="size"></a-input>
            <a-label>Tt/Hq/Xp:</a-label>
            <a-input :size="size"></a-input>

            <a-label style="grid-column: 1;" class="required">Dân tộc</a-label>
            <a-input :size="size"></a-input>
            <a-label class="required">Quốc tịch</a-label>
            <a-input :size="size"></a-input>
            <a-label class="required">Nghề nghiệp</a-label>
            <a-input :size="size"></a-input>
            <a-label>Nơi làm việc:</a-label>
            <a-input :size="size"></a-input>

            <a-label style="grid-column: 1;">Điện thoại:</a-label>
            <a-input :size="size"></a-input>
            <a-label>CMND/CCCD:</a-label>
            <a-input :size="size"></a-input>
            <a-label>Ngày cấp:</a-label>
            <a-input :size="size"></a-input>
            <a-label>Nơi cấp:</a-label>
            <a-input :size="size"></a-input>

            <h6 style="grid-column: span 4; margin-top: 1rem;">THÔNG TIN ĐẶNG KÝ KHÁM</h6>
            <a-label style="grid-column: 1;" class="required">Đối tượng</a-label>
            <a-input :size="size"></a-input>
            <a-label class="required">Ngày khám</a-label>
            <a-input :size="size"></a-input>
            <a-label>Đăng ký khám</a-label>
            <a-input :size="size"></a-input>
            <a-checkbox style="grid-column: span 2;">Ưu tiên</a-checkbox>

            <a-label style="grid-column: 1;" class="required">Yêu cầu khám</a-label>
            <a-input style="grid-column: span 3;" :size="size"></a-input>
            <a-label class="required">Phòng khám</a-label>
            <a-input style="grid-column:  span 3;" :size="size"></a-input>
            <a-label style="grid-column: 1;">Lý do khám:</a-label>
            <a-input style="grid-column: span 7;" :size="size"></a-input>

            <h6 style="grid-column: span 4; margin-top: 1rem;">THÔNG TIN THẺ BHYT</h6>
            <a-label style="grid-column: 1;">Số thẻ:</a-label>
            <a-input :size="size"></a-input>
            <a-label>Nơi sống:</a-label>
            <a-input :size="size">Nơi sống</a-input>
            <a-label>KCBBD:</a-label>
            <a-input style="grid-column:  span 3;" :size="size"></a-input>
            <a-label style="grid-column: 1;">Hạn thẻ:</a-label>
            <a-input style="grid-column: span 3;" :size="size"></a-input>
            <a-label>Địa chỉ thẻ:</a-label>
            <a-input style="grid-column:  span 3;" :size="size"></a-input>
        </form>

    </x-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';



export default defineComponent({
    name: 'ReceptionDetailView',
    setup() {
        const size = ref('default')

        return {
            size
        }
    }
})
</script>

<style scoped>
.x-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

}

.required:after {
    content: "*";
    padding-left:1%;
    color: red;
}

@media (min-width: 1400px) {
    .x-container {
        max-width: 1320px;
    }
}
</style>