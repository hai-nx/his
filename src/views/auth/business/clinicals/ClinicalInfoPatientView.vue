<template>
    <div class="grid">
        <label class="grid-col-1">Mã bệnh nhân:</label>
        <label>{{ dataSource?.patientCode }}</label>

        <label>Mã bệnh án:</label>
        <label>{{ dataSource?.patientRecordCode }}</label>

        <label>Họ tên:</label>
        <label>{{ dataSource?.patientName }}</label>


        <label class="grid-col-1">Giới tính:</label>
        <label>{{ dataSource?.genderName }}</label>

        <label>Ngày sinh:</label>
        <label>{{ dataSource?.patientRecordCode }}</label>

        <label>Dân tộc:</label>
        <label>{{ dataSource?.patientRecordCode }}</label>

        <label>Nghề nghiệp:</label>
        <label>{{ dataSource?.patientRecordCode }}</label>

        <label>Địa chỉ:</label>
        <label>{{ dataSource?.patientRecordCode }}</label>

        <label class="grid-col-1">Số điện thoại:</label>
        <label>{{ dataSource?.patientRecordCode }}</label>

        <label>CMND/CCCD</label>
        <label>{{ dataSource?.patientRecordCode }}</label>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue"
import type { PropType } from 'vue'
import { PatientRecordModel } from "@/models";

const props = defineProps({
    dataSource: {
        type: Object as PropType<PatientRecordModel>
    }
});

</script>

<style scoped>
label {
    white-space: nowrap;
}

.grid {
    display: grid;
    grid-template-columns: max-content 1fr max-content 1fr;
    column-gap: 0.5rem;
    row-gap: 0.5rem;
}

.grid-col-1 {
    grid-column: 1 / 1;
}
</style>