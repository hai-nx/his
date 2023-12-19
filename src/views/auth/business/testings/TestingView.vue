<template>
    <div class="container">
        <div class="header">
            <div class="procedure-room">
                <label>Phòng thực hiện:</label>
                <a-select> </a-select>
            </div>
            <div class="search">
                <label>Từ ngày:</label>
                <a-date-picker
                    placeholder="dd/MM/yyyy HH:mm:ss"
                    format="DD/MM/YYYY HH:mm:ss"
                    v-model:value="fromDate"
                />
                <label>Đến ngày:</label>
                <a-date-picker
                    placeholder="dd/MM/yyyy HH:mm:ss"
                    format="DD/MM/YYYY HH:mm:ss"
                    v-model:value="toDate"
                />
                <a-button type="primary" @click="handleLoad">
                    <i class="bi-arrow-clockwise"></i>
                    <label>Cập nhật</label>
                </a-button>
            </div>
        </div>

        <!-- Nội dung tại đây -->
        <div class="content">
            <div class="content-row">
                <a-table
                    class="ant-table-striped"
                    size="middle"
                    :columns="columnMasters"
                    :data-source="itemSources"
                ></a-table>
            </div>
            <!-- <a-divider style="height: 1px; background-color: #f8f8f8" /> -->
            <div class="content-row">
                <a-table
                    class="ant-table-striped"
                    size="middle"
                    :columns="columnImps"
                    :data-source="itemSources"
                ></a-table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import dayjs, { Dayjs } from "dayjs";

export default defineComponent({
    name: "TestingView",
    setup() {
        const fromDate = ref<Dayjs>(
            dayjs().set("hour", 0).set("minute", 0).set("second", 0)
        );
        const toDate = ref<Dayjs>(
            dayjs().set("hour", 23).set("minute", 59).set("second", 59)
        );

        const columnMasters = reactive([
            {
                title: "Số phiếu",
                key: "code",
                dataIndex: "code",
                width: 50,
                className: "column-header-center",
            },
            {
                title: "Barcode",
                key: "barcode",
                dataIndex: "barcode",
                width: 50,
                className: "column-header-center",
            },
            {
                title: "Mã BN",
                key: "patientCode",
                dataIndex: "patientCode",
                width: 50,
                className: "column-header-center",
            },
            {
                title: "Mã điều trị",
                key: "treatmentCode",
                dataIndex: "treatmentCode",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Tên bệnh nhân",
                key: "impStockName",
                dataIndex: "impStockName",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Khoa",
                key: "departmentName",
                dataIndex: "departmentName",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Phòng",
                key: "roomName",
                dataIndex: "roomName",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "TG chỉ định",
                key: "invTime",
                dataIndex: "invTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "BS chỉ định",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "TG thực hiện",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "BS thực hiện",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "TG trả KQ",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "BS trả KQ",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                className: "column-header-center",
                align: "center",
            },

            {
                title: "Trạng thái",
                key: "status",
                dataIndex: "stocstatuskImpTime",
                width: 70,
                align: "center",
            },
        ]);

        // lấy dữ liệu
        const handleLoad = async () => {
            let fromDateString = fromDate.value.format("DD/MM/YYYY HH:mm:ss");
            let toDateString = toDate.value.format("DD/MM/YYYY HH:mm:ss");
        };

        return {
            fromDate,
            toDate,
            columnMasters,

            handleLoad,
        };
    },
});
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Chiều cao 100% của màn hình */
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.search {
    display: grid;
    grid-template-columns: auto 170px auto 170px 100px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
.procedure-room {
    display: grid;
    grid-template-columns: auto 170px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
}
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.content-row {
    flex: 1;
    overflow: auto;
}
/* .a-divider {
    height: 1px;
    background-color: #f8f8f8;
} */
</style>
