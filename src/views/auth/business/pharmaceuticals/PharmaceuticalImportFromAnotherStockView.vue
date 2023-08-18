<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            width="1280px"
            :mask-closable="false"
        >
            <div class="container card-body">
                <div class="container card-container">
                    <label class="grid-column-1">
                        <span>Kho nhập:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-2-5"
                        :field-names="fields"
                        :options="sStocks"
                        showSearch
                        v-model:value="source.impStockId"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-5">
                        <span>Ngày lập:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <input
                        class="datetime grid-column-6"
                        type="date"
                        v-model="source.impTime"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-7">
                        <span>Người lập:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-8"
                        :options="sUsers"
                        :field-names="userColumns"
                        show-search
                        v-model:value="source.impUserId"
                        :disabled="isDisabled"
                    />

                    <label class="grid-column-1">
                        <span>Kho xuất:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-2-5"
                        :field-names="fields"
                        :options="sStocks"
                        showSearch
                        v-model:value="source.impStockId"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-5"> Mã phiếu: </label>
                    <a-input
                        class="grid-column-6"
                        v-model:value="source.code"
                        :disabled="isDisabled"
                    />

                    <label class="grid-column-7"> Nội dung: </label>
                    <a-input
                        class="grid-column-columnspan-8-13"
                        v-model:value="source.description"
                        :disabled="isDisabled"
                    />

                    <a-divider
                        class="grid-column-columnspan-1-13"
                        style="height: 1px; background-color: #f8f8f8"
                    />

                    <label class="grid-column-1">
                        <span>Tên thuốc:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-2-7"
                        showSearch
                        :field-names="fields"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-7">
                        <span>Mã thuốc:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-input
                        class="grid-column-8"
                        v-model:value="source.description"
                        :disabled="isDisabled"
                    />

                    <label class="grid-column-9"> ĐVT: </label>
                    <a-select
                        class="grid-column-610"
                        :field-names="fields"
                        :options="sUnits"
                        disabled
                    />
                    <label class="grid-column-11"> Nồng độ: </label>
                    <a-input class="grid-column-12" disabled />

                    <label class="grid-column-1"> Hàm lượng: </label>
                    <a-input class="grid-column-2" disabled />

                    <label class="grid-column-3"> Hoạt chất: </label>
                    <a-input class="grid-column-4" disabled />

                    <label class="grid-column-5"> Nước SX: </label>
                    <a-input class="grid-column-6" disabled />

                    <label class="grid-column-7"> Hãng SX: </label>
                    <a-input class="grid-column-columnspan-8-13" disabled />

                    <label class="grid-column-1">Số lượng: </label>
                    <a-input-number
                        class="grid-column-2 w-100"
                        :disabled="isDisabled"
                        min="0"
                    />

                    <label class="grid-column-3">Giá nhập: </label>
                    <a-input-number
                        class="grid-column-4 w-100"
                        :disabled="isDisabled"
                        min="0"
                    />

                    <label class="grid-column-5">VAT nhập (%): </label>
                    <a-input-number
                        class="grid-column-6 w-100"
                        :disabled="isDisabled"
                        min="0"
                        max="100"
                    />

                    <label class="grid-column-7">Thuế nhập (%): </label>
                    <a-input-number
                        class="grid-column-8 w-100"
                        :disabled="isDisabled"
                        min="0"
                        max="100"
                    />

                    <label class="grid-column-9">Thành tiền: </label>
                    <a-input-number
                        class="grid-column-columnspan-10-13 w-100"
                        :disabled="isDisabled"
                        min="0"
                    />

                    <label class="grid-column-1"> Số ĐK: </label>
                    <a-input class="grid-column-2" disabled />

                    <label class="grid-column-3"> Số lô: </label>
                    <a-input class="grid-column-4" disabled />

                    <label class="grid-column-5">Hạn dùng: </label>
                    <input
                        class="datetime grid-column-6"
                        type="date"
                        :disabled="isDisabled"
                    />

                    <a-button
                        type="primary"
                        class="grid-column-columnspan-11-13"
                    >
                        Cập nhật (Ctl + A)
                    </a-button>

                    <a-table
                        class="ant-table-striped grid-column-columnspan-1-13 mt-3 table-overflow-x"
                        size="middle"
                        :customRow="handleRowClickImpMestMedicine"
                        :columns="impMestMedicineColumns"
                        :data-source="source.dImpMestMedicines"
                        bordered
                        :pagination="false"
                    >
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'dueDate'">
                                <span>{{
                                    record.dueDate === null
                                        ? record.dueDate
                                        : new Date(
                                              record.dueDate
                                          ).toLocaleDateString()
                                }}</span>
                            </template>
                            <template v-if="column.key === 'unitId'">
                                <a-select
                                    class="w-100"
                                    style="
                                         {
                                            padding: 0px;
                                        }
                                    "
                                    v-model:value="record.unitId"
                                    :field-names="fields"
                                    :options="sUnits"
                                    disabled
                                />
                            </template>
                            <template v-else-if="column.key === 'action'">
                                <span>
                                    <button
                                        class="btn btn-outline-danger border-0 btn-sm"
                                        title="Xóa"
                                        :disabled="isDisabled"
                                    >
                                        <i class="bi bi-x-lg"></i>
                                    </button>
                                </span>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import { DImpMestModel, RoomModel, UnitModel, UserModel } from "@/models";

export default defineComponent({
    name: "PharmaceuticalImportFromAnotherStockView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        impExMestTypeId: {
            type: Number,
            required: true,
        },
        data: {
            type: Object as PropType<DImpMestModel>,
        },
    },
    setup(props, { emit }) {
        const isDisabled = ref<boolean>(false);
        const title = ref<string>("Nhập từ kho khác");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });
        const userColumns = ref({ value: "id", label: "userName" });

        const activeKey = ref<string>("1");

        const sStocks = ref<RoomModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);

        const show = computed(() => props.visible);
        const source = ref<DImpMestModel>({
            id: null,
            /// Mã phiếu
            code: null,
            /// Trạng thái
            impMestStatus: 0,
            /// Kho nhập
            impStockId: null,
            /// Kho xuất
            expStockId: null,
            /// Loại phiếu nhập, xuất
            impExpMestTypeId: 0,
            /// Người nhận
            receiverUserId: null,
            /// Thời gian nhập
            impTime: null,
            /// Người lập
            impUserId: null,
            /// Ngày duyệt
            approverTime: null,
            /// NGười duyệt
            approverUserId: null,
            /// Nội dung
            description: null,
            /// Phòng yêu cầu
            reqRoomId: null,
            /// Khoa yêu cầu
            reqDepartmentId: null,
            /// Id điều trị
            treatmentId: null,
            /// Id Bệnh nhân
            patientId: null,
            /// Nhà cung cấp
            supplierId: null,
            /// Nhà cung cấp
            supplierAddress: null,
            /// Ngày hóa đơn
            invTime: null,
            /// Số hóa đơn
            invNo: null,
            /// Người giao
            deliverer: null,
            /// Ngày nhập kho
            stockReceiptTime: null,
            /// Người nhập kho
            stockReceiptUserId: null,
            dImpMestMedicines: [],
        });

        //#region Funtion
        const toggle = function () {
            emit("toggle", result);
        };
        //#endregion

        //#region Event
        const handleCancel = function () {
            toggle();
        };
        //#endregion

        return {
            isDisabled,
            show,
            title,
            fields,
            loading,
            userColumns,
            activeKey,
            source,

            sStocks,
            sUnits,
            sUsers,

            handleCancel,
        };
    },
});
</script>

<style scoped>
.card-body {
    margin: -10px;
    max-height: 650px;
    height: 650px;
    overflow-y: auto;
}
.card-container {
    display: grid;
    grid-template-columns: repeat(6, auto minmax(50px, 1fr));
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
}

.grid-column-columnspan-1-13 {
    grid-column: 1/13;
}

.grid-column-columnspan-2-5 {
    grid-column: 2/5;
}

.grid-column-columnspan-2-7 {
    grid-column: 2/7;
}

.grid-column-columnspan-6-9 {
    grid-column: 6/9;
}

.grid-column-columnspan-8-13 {
    grid-column: 8/13;
}

.grid-column-columnspan-10-13 {
    grid-column: 10/13;
}

.grid-column-columnspan-11-13 {
    grid-column: 11/13;
}

.grid-column-1 {
    grid-column: 1/2;
}

.grid-column-2 {
    grid-column: 2/3;
}

.grid-column-3 {
    grid-column: 3/4;
}

.grid-column-4 {
    grid-column: 4/5;
}

.grid-column-5 {
    grid-column: 5/6;
}

.grid-column-6 {
    grid-column: 6/7;
}

.grid-column-7 {
    grid-column: 7/8;
}

.grid-column-8 {
    grid-column: 8/9;
}

.grid-column-9 {
    grid-column: 9/10;
}

.grid-column-10 {
    grid-column: 10/11;
}

.grid-column-11 {
    grid-column: 11/12;
}

.grid-column-12 {
    grid-column: 12/13;
}

.ant-divider-horizontal {
    margin: 5px 0;
}
</style>
