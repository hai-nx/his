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
                        v-model="source.expTime"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-7">
                        <span>Người lập:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-8-11"
                        :options="sUsers"
                        :field-names="userColumns"
                        show-search
                        v-model:value="source.expUserId"
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
                        v-model:value="source.expStockId"
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
                        v-model:value="dExpMestMedicineSelected.medicineId"
                        :field-names="fieldMedistocks"
                        :options="dMedicineStocks"
                        :disabled="isDisabled"
                    >
                        <template #option="{ medicineCode, medicineName }">
                            <div class="row">
                                <div class="col-md-3">
                                    <span>{{ medicineCode }}</span>
                                </div>
                                <div class="col-md-9">
                                    <span>{{ medicineName }}</span>
                                </div>
                            </div>
                        </template>
                    </a-select>
                    <label class="grid-column-7">
                        <span>Mã thuốc:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-input
                        class="grid-column-8"
                        v-model:value="dExpMestMedicineSelected.code"
                        disabled
                    />

                    <label class="grid-column-9"> ĐVT: </label>
                    <a-select
                        class="grid-column-610"
                        :field-names="fields"
                        :options="sUnits"
                        v-model:value="dExpMestMedicineSelected.unitId"
                        disabled
                    />
                    <label class="grid-column-11"> Nồng độ: </label>
                    <a-input
                        class="grid-column-12"
                        disabled
                        v-model:value="dExpMestMedicineSelected.concentration"
                    />

                    <label class="grid-column-1"> Hàm lượng: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="dExpMestMedicineSelected.content"
                    />

                    <label class="grid-column-3"> Hoạt chất: </label>
                    <a-input
                        class="grid-column-4"
                        disabled
                        v-model:value="dExpMestMedicineSelected.activeSubstance"
                    />

                    <label class="grid-column-5"> Nước SX: </label>
                    <a-select
                        class="grid-column-6"
                        :field-names="fields"
                        :options="sCountries"
                        showSearch
                        v-model:value="dExpMestMedicineSelected.countryId"
                        disabled
                    />

                    <label class="grid-column-7"> Hãng SX: </label>
                    <a-input
                        class="grid-column-columnspan-8-13"
                        disabled
                        v-model:value="dExpMestMedicineSelected.manufacturer"
                    />

                    <label class="grid-column-1">Số lượng: </label>
                    <a-input-number
                        class="grid-column-2 w-100"
                        :disabled="isDisabled"
                        min="0"
                        v-model:value="dExpMestMedicineSelected.expQuantity"
                    />

                    <label class="grid-column-3">Giá nhập: </label>
                    <a-input-number
                        class="grid-column-4 w-100"
                        disabled
                        min="0"
                        v-model:value="dExpMestMedicineSelected.impPrice"
                    />

                    <label class="grid-column-5">VAT (%): </label>
                    <a-input-number
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="dExpMestMedicineSelected.impVatRate"
                    />

                    <label class="grid-column-7">Thuế (%): </label>
                    <a-input-number
                        class="grid-column-8 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="dExpMestMedicineSelected.taxRate"
                    />

                    <label class="grid-column-9">Thành tiền: </label>
                    <a-input-number
                        class="grid-column-columnspan-10-13 w-100"
                        disabled
                        min="0"
                        :formatter="formatNumber"
                        v-model:value="dExpMestMedicineSelected.expAmount"
                    />

                    <!-- <label class="grid-column-1"> Số ĐK: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="
                            dExpMestMedicineSelected.registrationNumber
                        "
                    /> -->

                    <label class="grid-column-1"> Số lô: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="dExpMestMedicineSelected.lot"
                    />

                    <label class="grid-column-3">Hạn dùng: </label>
                    <input
                        class="datetime grid-column-4"
                        type="date"
                        disabled
                        v-model="dExpMestMedicineSelected.dueDate"
                    />

                    <label class="grid-column-5">SL tồn: </label>
                    <a-input-number
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        v-model:value="dMedicineStockSelected.availableQuantity"
                    />

                    <a-table
                        class="ant-table-striped grid-column-columnspan-1-13 mt-3 table-overflow-x"
                        size="middle"
                        :customRow="handleRowClickImpMestMedicine"
                        :columns="expMestMedicineColumns"
                        :data-source="source.dExpMestMedicines"
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

            <template #footer>
                <a-button
                    v-if="source.impMestStatus === 1"
                    type="primary"
                    class="btn-save"
                    >Duyệt</a-button
                >
                <a-button v-if="source.expMestStatus === 3" class="btn-save"
                    >Hủy Duyệt</a-button
                >
                <a-button
                    v-if="source.expMestStatus === 3"
                    type="primary"
                    class="btn-save"
                    >Xuất kho</a-button
                >
                <a-button v-if="source.expMestStatus === 4" class="btn-save"
                    >Hủy xuất</a-button
                >
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { Modal } from "ant-design-vue";
import {
    defineComponent,
    ref,
    reactive,
    computed,
    PropType,
    watch,
    watchEffect,
} from "vue";
import {
    DExpMestModel,
    DMedicineStockModel,
    RoomModel,
    UnitModel,
    UserModel,
    DExpMestMedicineModel,
    CountryModel,
} from "@/models";
import {
    roomService,
    userService,
    unitService,
    expMestService,
    countryService,
    dMedicineStockService,
} from "@/services";

export default defineComponent({
    name: "ExportFromAnotherStockView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<DExpMestModel>,
        },
    },
    setup(props, { emit }) {
        const isDisabled = ref<boolean>(false);
        const title = ref<string>("Nhập từ kho khác");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });
        const userColumns = ref({ value: "id", label: "userName" });
        const fieldMedistocks = ref({
            value: "medicineId",
            label: "medicineName",
        });

        const activeKey = ref<string>("1");

        const sStocks = ref<RoomModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const dMedicineStocks = ref<DMedicineStockModel[]>([]);

        const show = computed(() => props.visible);
        const source = ref<DExpMestModel>({
            id: null,
            /// Mã phiếu
            code: null,
            /// Trạng thái phiếu nhập
            impMestStatus: 0,
            /// Trang thái phiếu xuất
            expMestStatus: 0,
            /// Kho nhập
            impStockId: null,
            /// Kho xuất
            expStockId: null,
            /// Loại phiếu nhập, xuất
            impExpMestTypeId: 0,
            /// Người duyệt
            approverUserId: null,
            /// Ngày duyệt
            approverTime: null,
            /// Ngày tạo phiếu xuất
            expTime: null,
            /// Người tạo phiếu xuất
            expUserId: null,
            /// Ngày nhập kho
            stockExpTime: null,
            /// Người nhập kho
            stockExpUserId: null,
            /// Nội dung
            description: null,
            /// Phòng yêu cầu
            reqRoomId: null,
            /// Khoa yêu cầu
            reqDepartmentId: null,
            /// Id điều trị
            patientRecordId: null,
            /// Id Bệnh nhân
            patientId: null,
            /// Nhà cung cấp
            supplierId: null,
            impMestId: null,
            dExpMestMedicines: [],
        });

        const dExpMestMedicineSelected = ref<DExpMestMedicineModel>({
            id: null,
            /// Mã thuốc
            code: null,
            /// Mã BH
            heInCode: null,
            /// Tên thuốc
            name: null,
            /// Thứ tự sắp xếp
            sortOrder: null,
            /// Đường dùng thuốc
            medicineLineId: null,
            /// Nhóm thuốc
            medicineGroupId: null,
            /// Nhóm thuốc
            medicineTypeId: null,
            /// Đơn vị tính
            unitId: null,
            /// Hướng dẫn
            tutorial: null,
            /// Nước sản xuất
            countryId: null,
            /// Giá nhập
            impPrice: null,
            /// Số lượng xuất
            expQuantity: null,
            /// Phần trăm vat giá nhập
            impVatRate: null,
            /// Phần trăm thuế
            taxRate: null,
            expAmount: null,
            /// Diễn giải
            description: null,
            /// Hoạt chất
            activeSubstance: null,
            /// Nồng độ
            concentration: null,
            /// Hàm lượng
            content: null,
            /// Hãng sản xuất
            manufacturer: null,
            /// Quy cách đóng gói
            packagingSpecifications: null,
            /// Liều dùng
            dosage: null,
            /// Lô
            lot: null,
            /// Hạn dùng
            dueDate: null,
            /// Quyệt định thầu
            tenderDecision: null,
            /// Gói thầu
            tenderPackage: null,
            /// Nhóm thầu
            tenderGroup: null,
            /// Năm thầu
            tenderYear: null,
            medicineId: null,
            expMestId: null,
        });

        const dMedicineStockSelected = ref<DMedicineStockModel>({
            id: null,
            stockId: null,
            medicineId: null,
            quantity: null,
            availableQuantity: null,
            sMedicine: null,
        });

        const expMestMedicineColumns = reactive([
            {
                title: "Mã thuốc",
                key: "code",
                dataIndex: "code",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên thuốc",
                key: "name",
                dataIndex: "name",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "ĐVT",
                key: "unitId",
                dataIndex: "unitId",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Giá nhập",
                key: "impPrice",
                dataIndex: "impPrice",
                width: 150,
                className: "column-header-center",
                align: "right",
            },
            {
                title: "Số lượng",
                key: "impQuantity",
                dataIndex: "impQuantity",
                width: 100,
                className: "column-header-center",
                align: "right",
            },
            {
                title: "VAT(%)",
                key: "impVatRate",
                dataIndex: "impVatRate",
                width: 100,
                className: "column-header-center",
                align: "right",
            },
            {
                title: "Thành tiền",
                key: "impAmount",
                dataIndex: "impAmount",
                width: 150,
                className: "column-header-center",
                align: "right",
                customRender: (text: any) => {
                    /* eslint-disable */
                    if (
                        text === null ||
                        text === undefined ||
                        text.value === undefined
                    ) {
                        return 0;
                    } else {
                        return new Intl.NumberFormat(navigator.language, {
                            style: "decimal",
                            minimumFractionDigits: 2,
                        }).format(text.value);
                    }
                },
            },
            {
                title: "Số lô",
                key: "lot",
                dataIndex: "lot",
                width: 150,
                className: "column-header-center",
            },
            {
                title: "Hạn dùng",
                key: "dueDate",
                dataIndex: "dueDate",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "#",
                key: "action",
                dataIndex: "action",
                width: 70,
                align: "center",
                className: "column-header-center",
            },
        ]);

        //#region Funtion
        const toggle = function () {
            emit("toggle", result);
        };

        watch(show, async (value) => {
            if (value) {
                reset();
                inItData();

                result.value = false;
                loading.value = true;
                isDisabled.value = true;

                if (
                    props.data !== null &&
                    props.data?.id !== null &&
                    props.data?.id !== undefined
                ) {
                    isDisabled.value = true;

                    var resultDto =
                        await expMestService.expFromAnotherStockGetById(
                            props.data.id
                        );
                    if (resultDto.data.isSuccessed) {
                        title.value = "Nhập thuốc từ nhà cung cấp";
                        source.value = resultDto.data.result;

                        if (source.value.expTime !== null) {
                            source.value.expTime =
                                source.value.expTime.split("T")[0];
                        }
                        if (source.value.approverTime !== null) {
                            source.value.approverTime =
                                source.value.approverTime.split("T")[0];
                        }
                        if (source.value.stockExpTime !== null) {
                            source.value.stockExpTime =
                                source.value.stockExpTime.split("T")[0];
                        }

                        if (
                            source.value.dExpMestMedicines !== null &&
                            source.value.dExpMestMedicines &&
                            source.value.dExpMestMedicines.length > 0
                        ) {
                            source.value.dExpMestMedicines.forEach(
                                (dExpMestMedicine) => {
                                    if (dExpMestMedicine.dueDate !== null) {
                                        dExpMestMedicine.dueDate =
                                            dExpMestMedicine.dueDate.split(
                                                "T"
                                            )[0];
                                    }
                                }
                            );

                            dExpMestMedicineSelected.value = {
                                ...source.value.dExpMestMedicines[0],
                            };
                        }
                    } else {
                        Modal.error({
                            content: resultDto.data.message,
                            okText: "Đồng ý",
                        });
                        toggle();
                    }

                    loading.value = false;
                } else {
                    isDisabled.value = false;
                }

                loading.value = false;
            }
        });

        watchEffect(async () => {
            // Theo dõi expStockId thay đổi
            if (
                source.value.expStockId !== null &&
                source.value.expStockId !== undefined
            ) {
                dMedicineStocks.value = await getMedicineByStocks(
                    source.value.expStockId
                );
            } else {
                dMedicineStocks.value = [];
            }
        });

        async function inItData() {
            sStocks.value = await getStocks();
            sUnits.value = await getUnits();
            sUsers.value = await getUsers();
            sCountries.value = await getCountries();
        }

        const reset = () => {
            source.value = {
                id: null,
                /// Mã phiếu
                code: null,
                /// Trạng thái phiếu nhập
                impMestStatus: 0,
                /// Trang thái phiếu xuất
                expMestStatus: 0,
                /// Kho nhập
                impStockId: null,
                /// Kho xuất
                expStockId: null,
                /// Loại phiếu nhập, xuất
                impExpMestTypeId: 0,
                /// Người duyệt
                approverUserId: null,
                /// Ngày duyệt
                approverTime: null,
                /// Ngày tạo phiếu xuất
                expTime: null,
                /// Người tạo phiếu xuất
                expUserId: null,
                /// Ngày nhập kho
                stockExpTime: null,
                /// Người nhập kho
                stockExpUserId: null,
                /// Nội dung
                description: null,
                /// Phòng yêu cầu
                reqRoomId: null,
                /// Khoa yêu cầu
                reqDepartmentId: null,
                /// Id điều trị
                patientRecordId: null,
                /// Id Bệnh nhân
                patientId: null,
                /// Nhà cung cấp
                supplierId: null,
                impMestId: null,
                dExpMestMedicines: [],
            };

            dExpMestMedicineSelected.value = {
                id: null,
                /// Mã thuốc
                code: null,
                /// Mã BH
                heInCode: null,
                /// Tên thuốc
                name: null,
                /// Thứ tự sắp xếp
                sortOrder: null,
                /// Đường dùng thuốc
                medicineLineId: null,
                /// Nhóm thuốc
                medicineGroupId: null,
                /// Nhóm thuốc
                medicineTypeId: null,
                /// Đơn vị tính
                unitId: null,
                /// Hướng dẫn
                tutorial: null,
                /// Nước sản xuất
                countryId: null,
                /// Giá nhập
                impPrice: null,
                /// Số lượng xuất
                expQuantity: null,
                /// Phần trăm vat giá nhập
                impVatRate: null,
                /// Phần trăm thuế
                taxRate: null,
                expAmount: null,
                /// Diễn giải
                description: null,
                /// Hoạt chất
                activeSubstance: null,
                /// Nồng độ
                concentration: null,
                /// Hàm lượng
                content: null,
                /// Hãng sản xuất
                manufacturer: null,
                /// Quy cách đóng gói
                packagingSpecifications: null,
                /// Liều dùng
                dosage: null,
                /// Lô
                lot: null,
                /// Hạn dùng
                dueDate: null,
                /// Quyệt định thầu
                tenderDecision: null,
                /// Gói thầu
                tenderPackage: null,
                /// Nhóm thầu
                tenderGroup: null,
                /// Năm thầu
                tenderYear: null,
                medicineId: null,
                expMestId: null,
            };
        };

        async function getMedicineByStocks(
            stockId: string
        ): Promise<DMedicineStockModel[]> {
            return (await dMedicineStockService.getMedicineByStocks(stockId))
                .data.result;
        }

        async function getStocks(): Promise<RoomModel[]> {
            return (await roomService.getByStocks()).data.result;
        }

        async function getUnits(): Promise<UnitModel[]> {
            return (await unitService.getAll()).data.result;
        }

        async function getUsers(): Promise<UserModel[]> {
            return (await userService.getAll()).data.result;
        }

        async function getCountries(): Promise<CountryModel[]> {
            return (await countryService.getAll()).data.result;
        }
        //#endregion

        //#region Event
        const handleCancel = function () {
            toggle();
        };

        const formatNumber = (value: number | string) => {
            if (value === null || value === "") {
                return null;
            }
            return parseFloat(value.toString()).toFixed(2);
        };

        const handleRowClickImpMestMedicine = (
            record: DExpMestMedicineModel
        ) => {
            return {
                onClick: () => {
                    setImpMestMedicine(record);
                },
            };
        };

        const setImpMestMedicine = (
            data: DExpMestMedicineModel | undefined
        ) => {
            if (data !== undefined) {
                const dataCopy = { ...data };
                dExpMestMedicineSelected.value = dataCopy;
            }
        };

        //#endregion

        return {
            isDisabled,
            show,
            title,
            fields,
            fieldMedistocks,
            loading,
            userColumns,
            activeKey,
            source,

            sStocks,
            sUnits,
            sUsers,
            dMedicineStocks,
            sCountries,
            formatNumber,

            dMedicineStockSelected,
            dExpMestMedicineSelected,

            expMestMedicineColumns,
            handleRowClickImpMestMedicine,

            handleCancel,
        };
    },
});
</script>

<style scoped>
.card-body {
    /* margin: 0px -24px; */
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

.grid-column-columnspan-8-11 {
    grid-column: 8/11;
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
