<template>
    <div class="layout">
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
                    :customRow="mastersCustomRow"
                ></a-table>
            </div>
            <!-- <a-divider style="height: 1px; background-color: #f8f8f8" /> -->
            <div class="content-row">
                <a-table
                    class="ant-table-striped"
                    size="middle"
                    :columns="columnGroupDetails"
                    :data-source="source?.serviceRequestDatas"
                >
                    <template #expandedRowRender="{ record }">
                        <a-table
                            :columns="columnDetails"
                            :data-source="record.serviceResultDatas"
                            :pagination="false"
                        >
                        </a-table>
                    </template>
                </a-table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import dayjs, { Dayjs } from "dayjs";
import { ServiceRequestModel } from "@/models";
import { testingService } from "@/services";

export default defineComponent({
    name: "TestingView",
    setup() {
        const fromDate = ref<Dayjs>(
            dayjs().set("hour", 0).set("minute", 0).set("second", 0)
        );
        const toDate = ref<Dayjs>(
            dayjs().set("hour", 23).set("minute", 59).set("second", 59)
        );

        const itemSources = ref<ServiceRequestModel[]>([]);
        const source = ref<ServiceRequestModel>();

        const columnMasters = reactive([
            {
                title: "Số phiếu",
                key: "serviceRequestCode",
                dataIndex: "serviceRequestCode",
                width: 50,
                // className: "column-header-center",
            },
            {
                title: "Barcode",
                key: "barcode",
                dataIndex: "barcode",
                width: 50,
                // className: "column-header-center",
            },
            {
                title: "Mã BN",
                key: "patientCode",
                dataIndex: "patientCode",
                width: 50,
                // className: "column-header-center",
            },
            {
                title: "Mã điều trị",
                key: "treatmentCode",
                dataIndex: "treatmentCode",
                width: 50,
                // className: "column-header-center",
            },
            {
                title: "Tên bệnh nhân",
                key: "patientName",
                dataIndex: "patientName",
                width: 100,
                // className: "column-header-center",
            },
            {
                title: "Khoa",
                key: "departmentName",
                dataIndex: "departmentName",
                width: 100,
                // className: "column-header-center",
            },
            {
                title: "Phòng",
                key: "roomName",
                dataIndex: "roomName",
                width: 100,
                // className: "column-header-center",
                align: "center",
            },
            {
                title: "TG chỉ định",
                key: "serviceRequestDate",
                dataIndex: "serviceRequestDate",
                width: 50,
                // className: "column-header-center",
                align: "center",
            },
            {
                title: "BS chỉ định",
                key: "userName",
                dataIndex: "userName",
                width: 50,
                // className: "column-header-center",
                align: "center",
            },
            {
                title: "TG thực hiện",
                key: "executeUserName",
                dataIndex: "executeUserName",
                width: 50,
                // className: "column-header-center",
                align: "center",
            },
            {
                title: "BS thực hiện",
                key: "executeUserName",
                dataIndex: "executeUserName",
                width: 50,
                // className: "column-header-center",
                align: "center",
            },
            {
                title: "TG trả KQ",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                // className: "column-header-center",
                align: "center",
            },
            {
                title: "BS trả KQ",
                key: "stockImpTime",
                dataIndex: "stockImpTime",
                width: 50,
                // className: "column-header-center",
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

        const columnGroupDetails = reactive([
            {
                title: "Mã dịch vụ",
                key: "serviceCode",
                dataIndex: "serviceCode",
                // width: 150,
                // className: "column-header-center",
            },
            {
                title: "Tên dịch vụ",
                key: "serviceName",
                dataIndex: "serviceName",
                // width: 500,
                // className: "column-header-center",
            },
        ]);

        const columnDetails = reactive([
            {
                title: "Mã XN",
                key: "serviceResultIndiceCode",
                dataIndex: "serviceResultIndiceCode",
                // width: 50,
                // className: "column-header-center",
            },
            {
                title: "Tên XN",
                key: "serviceResultIndiceName",
                dataIndex: "serviceResultIndiceName",
                // width: 250,
                // className: "column-header-center",
            },
            {
                title: "Kết quả",
                key: "result",
                dataIndex: "result",
                // width: 100,
                // className: "column-header-center",
            },
            {
                title: "Bình thường",
                key: "normalRange",
                dataIndex: "normalRange",
                // width: 150,
                // className: "column-header-center",
            },
            {
                title: "Máy XN",
                key: "testingMachine",
                dataIndex: "testingMachine",
                // width: 150,
                // className: "column-header-center",
            },
        ]);

        // lấy dữ liệu
        const handleLoad = async () => {
            let fromDateString = fromDate.value.format("DD/MM/YYYY HH:mm:ss");
            let toDateString = toDate.value.format("DD/MM/YYYY HH:mm:ss");

            let result = await testingService.getAll();
            itemSources.value = result.data.result;
        };

        const mastersCustomRow = async (
            record: ServiceRequestModel,
            index: number
        ) => {
            source.value = record;

            if (record && record.id) {
                let serviceRequestDataDtos =
                    await testingService.getServiceRequestDataByServiceRequestId(
                        record.id,
                        1,
                        true
                    );

                source.value.serviceRequestDatas =
                    serviceRequestDataDtos.data.result;
                console.log(serviceRequestDataDtos);
            }
        };

        const itemSourceRowSelection = {
            /* eslint-disable */
            onChange: (
                selectedRowKeys: (string | number)[],
                selectedRows: ServiceRequestModel[]
            ) => {
                debugger;

                console.log(
                    `selectedRowKeys: ${selectedRowKeys}`,
                    "selectedRows: ",
                    selectedRows
                );
            },
            onSelect: (
                record: ServiceRequestModel,
                selected: boolean,
                selectedRows: ServiceRequestModel[]
            ) => {
                debugger;
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (
                selected: boolean,
                selectedRows: ServiceRequestModel[],
                changeRows: ServiceRequestModel[]
            ) => {
                debugger;
                console.log(selected, selectedRows, changeRows);
            },
        };

        return {
            fromDate,
            toDate,
            columnMasters,
            columnDetails,
            columnGroupDetails,
            itemSources,
            source,

            itemSourceRowSelection,
            mastersCustomRow,

            handleLoad,
        };
    },
});
</script>


<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    /* height: 100vh; */
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
</style>
