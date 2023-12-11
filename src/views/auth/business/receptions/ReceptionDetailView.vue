<template>
    <x-layout class="x-container" :title="title" :breadcrumbs="breadcrumbs" :show-footer="true">
        <template #action>
            <a-button type="primary">
                <i class="bi bi-plus-lg me-2"></i>
                <span>Lưu (Ctrl + S)</span>
            </a-button>
        </template>

        <template #footer>
            <a-button type="primary">
                <i class="bi bi-plus-lg me-2"></i>
                <span>Lưu (Ctrl + S)</span>
            </a-button>
        </template>

        <div class="x-grid">

            <h6>Hành chính</h6>

            <label class="x-col-1">Mã bệnh nhân</label>
            <!-- <a-input></a-input> -->
            <a-input/>
            <label for="">Họ tên</label>
            <a-input class="x-col-4"></a-input>
            <!-- <label for="">*</label>
            <a-input></a-input>
            <label for="">*</label>
            <a-input></a-input> -->

            <label class="x-col-1">Giới tính</label>
            <a-select>
              <a-select-option key="0" value="Nam"></a-select-option>
              <a-select-option key="1" value="Nữ"></a-select-option>
              <a-select-option key="2" value="Không xác định"></a-select-option>
            </a-select>
            <label for="">Ngày sinh</label>
            <input type="date" class="datetime"/>
            <a-input class="x-age"/>
            <!-- <label>(Tuổi)</label> -->
            <label for="">Nơi sinh</label>
            <a-input></a-input>

            <label class="x-col-1">Số nhà, thôn</label>
            <a-input></a-input>
            <label for="">Ttp/Hq/Xp</label>
            <a-input></a-input>
            <a-input style="grid-column: 5/ span 4;"></a-input>

            <label class="x-col-1">Dân tộc</label>
            <a-input></a-input>
            <label for="">Quốc tịch</label>
            <a-input></a-input>
            <label for="">Nghề nghiệp</label>
            <a-input></a-input>
            <label for="">Nơi làm việc</label>
            <a-input></a-input>

            <label for="">Điện thoại</label>
            <a-input></a-input>
            <label for="">CMND/CCCD</label>
            <a-input></a-input>
            <label for="">Ngày cấp</label>
            <a-input></a-input>
            <label for="">Nơi cấp</label>
            <a-input></a-input>

            <label for="">Người nhà</label>
            <a-input></a-input>
            <label for="">CMND/CCCD</label>
            <a-input></a-input>
            <label for="">Điện thoại</label>
            <a-input></a-input>
            <label for="">Địa chỉ</label>
            <a-input></a-input>



            <h6>Thông tin khám</h6>

            <label class="x-col-1">Đăng ký khám</label>
            <a-input></a-input>
            <label for="">Ngày khám</label>
            <a-input></a-input>
            <label for="">Lý do khám</label>
            <a-input style="grid-column: 6/ span 3;"></a-input>

            <label for="">Dịch vụ</label>
            <a-input style="grid-column: 2/ span 3;"></a-input>
            <label for="">Phòng khám</label>
            <a-input style="grid-column: 6/ span 3;"></a-input>



            <h6>Thông tin thẻ BHYT</h6>

            <label class="x-col-1">Đối tượng</label>
            <a-input></a-input>
            <label for="">Lúc</label>
            <a-input></a-input>
            <label for="">Lý do khám</label>
            <a-input></a-input>
            <label for="">*</label>
            <a-input></a-input>

            <label for="">Đăng ký khám</label>
            <a-input></a-input>
            <label for="">Lúc</label>
            <a-input></a-input>
            <label for="">Lý do khám</label>
            <a-input></a-input>
            <label for="">*</label>
            <a-input></a-input>

            <label for="">Đăng ký khám</label>
            <a-input></a-input>
            <label for="">Lúc</label>
            <a-input></a-input>
            <label for="">Lý do khám</label>
            <a-input></a-input>
            <label for="">*</label>
            <a-input></a-input>
        </div>
    </x-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { XItemType } from '@/components';

const title = ref('Đăng ký khám');
const breadcrumbs = ref<Array<XItemType>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách tiếp đón', icon: '', path: '' },
    { key: '3', label: 'Đăng ký khám', icon: '', path: '' }
]);



const size = "small";

</script>

<style scoped>
.x-grid {
    display: grid;
    grid-template-columns: repeat(3, max-content 1fr) max-content 1.4fr;
    column-gap: .5rem;
    row-gap: .25rem;
    align-items: center;
    padding: 1rem;
}

.x-grid label {
    margin-left: 1rem;
}

.x-grid label::after {
    content: ':';
}

.x-col-1 {
    grid-column: 1/1;
}

.x-col-4 {
    grid-column: 4/ span 3;
}

.x-span-2 {
    column-span: 4 / span 2;
}

.x-age {
    grid-column: 5/ span 2;
}

.x-container {
    max-width: 1320px;
    margin-left: auto;
    margin-right: auto;
}
</style>