<template>
    <x-layout :title="title" :routes="breadcrumbs">
        <template #action>
            <a-button type="primary" @click="regPatient">Đón tiếp</a-button>
            <a-dropdown-button class="ms-2">
                Báo cáo
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="1">
                            <i class="bi bi-dot"></i>
                            Phiếu giữ thẻ BHYT
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="2">
                            <i class="bi bi-dot"></i>
                            Sổ khám bệnh
                        </a-menu-item>
                        <a-menu-item key="3">
                            <i class="bi bi-dot"></i>
                            Báo cáo hoạt động khám bệnh
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown-button>
        </template>
        <div class="d-flex flex-column p-2">
            <div>
                <label class="ms-2">Từ</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <label class="ms-2">Đến</label>
                <a-date-picker class="ms-2"></a-date-picker>
                <a-input
                    placeholder="Tìm kiếm"
                    class="ms-2 mb-2 x-w-200"
                ></a-input>
                <XDateRangePicker class="ms-2" />
            </div>
            <a-table bordered> </a-table>
        </div>
    </x-layout>

    <AdmissionRegistrationPatientView
        :visible="showRegPatient"
        @cancel="closeRegPatient"
    />
</template>

<script lang="ts">
import XLayout from "@/components/XLayout.vue"
import XDateRangePicker from "@/components/XDateRangePicker.vue"
import AdmissionRegistrationPatientView from "./AdmissionRegistrationPatientView.vue"
import { ref } from "vue"
import { XItemType } from "@/components"
export default {
    components: {
        XLayout,
        XDateRangePicker,
        AdmissionRegistrationPatientView,
    },
    setup() {
        const title = ref("Danh sách bệnh nhân đăng ký khám");
        const showRegPatient = ref<boolean>(false);

        const breadcrumbs = ref<Array<XItemType>>([
            {
                key: "1",
                label: "Danh sách tiếp đón",
            },
            {
                key: "2",
                label: "Danh sách tiếp đón",
            },
        ]);

        const regPatient = () => {
            showRegPatient.value = true;
        };

        const closeRegPatient = () => {
            showRegPatient.value = false;
        };

        return {
            title,
            breadcrumbs,
            regPatient,
            showRegPatient,
            closeRegPatient,
        };
    },
};
</script>

<style scoped>
.x-w-200 {
    width: 200px;
}
</style>